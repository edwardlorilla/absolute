<?php

namespace App\Http\Controllers;

use App\Request as Requests;
use Illuminate\Http\Request;
use Carbon\Carbon;

class RequestsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = Requests::with(['user', 'division', 'transactions' => function ($query) {
            $query->with(['product.medicine' => function ($q) {
                $q->get();
            }]);
        }])->searchPaginateAndOrder();
        $columns = [
            [
                'id' => 'user.name',
                'name' => 'Users'
            ],
            [
                'id' => 'request_date',
                'name' => 'Request Date'
            ], [
                'id' => 'division.name',
                'name' => 'Division Code'
            ],
            [
                'id' => 'request_year_code',
                'name' => 'Request Year Code'
            ]
        ];
        return response()
            ->json([
                'model' => $model,
                'columns' => $columns
            ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
//        dd($request->all());
        /*return \App\Transaction::whereDate('expiry_date',  '>', Carbon::parse()->format('Y-m-d'))->orderBy('expiry_date', 'asc')->where(['orders' => function($query){
            $query->first();
        }])->first();*/
        $this->validate($request, [
            "division" => 'required',
            "request_date" => 'required',
            "request_year_code" => 'required',
            "products" => 'required',
        ]);
        $user = auth()->user();
        $transactions = [];
        $products = $request->products;
        foreach ($products as $product) {
            $transaction = new \App\Transaction;
            $transaction->out_quantity = $product['out_quantity'];
            $transaction->type = 0;
            $transaction->user_id = $user->id;
            $transaction->product_id = $product['id'];
            $transaction->save();
            $transactions[] = $transaction->id;

            $recipient = \App\Transaction::whereProductId($product['id'])
                ->whereDate('expiry_date', '>', Carbon::parse()->format('Y-m-d'))
                ->orderBy('expiry_date', 'asc')
                ->with(['orders' => function ($query) {
                    $query->first();
                }])->first();
            $receiptment = new \App\Receiptment;
            $receiptment->product_id = $product['id'];
            $receiptment->division_id =  $request->division;
            $receiptment->po_number = $recipient['orders'][0]['po_number'];
            $receiptment->ris_number = $recipient['orders'][0]['pr_number'];
            $receiptment->date_release =$request->request_date;
            $receiptment->date_print = $request->request_date;
            $receiptment->save();
        }
        $requests = $user->requests()->save(new Requests([
//            'po' => \App\Transaction::whereDate('expiry_date' > Carbon::parse()->format('Y-m-d'))->first(),
            'division_id' => $request->division,
            'request_date' => $request->request_date,
            'request_year_code' => $request->request_year_code
        ]));
        $requests->transactions()->attach($transactions);


        return response()->json($requests, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Request $request
     * @return \Illuminate\Http\Response
     */
    public function show(Requests $request)
    {
        $requests = Requests::whereId($request->id)->with(['division', 'user', 'transactions' => function ($query) {
            $query->with(['product' => function ($q) {
                $q->with('category', 'package');
            }]);
        }])->first();
        return response()->json($requests, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Request $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, \App\Request $requests)
    {
        $this->validate($request, [
            "request_date" => 'required',
            "request_year_code" => 'required',
            "division_id" => 'required',
            "products" => 'required',
        ]);
        $user = auth()->user();
        $transactions = [];
        $products = $request->products;
        for ($i = 0; $i < count($products); ++$i) {
            $transaction = \App\Transaction::whereId($products[$i]['transaction_id'])->first();
            $transaction->out_quantity = $products[$i]['out_quantity'];
            $transaction->type = 0;
            $transaction->user_id = $user->id;
            $transaction->product_id = $products[$i]['id'];;
            $transaction->product()->where('id', $products[$i]['id'])->update(['disabled' => false, 'quantity' => $products[$i]['quantity']]);
            $transaction->save();

            $transactions[] = $transaction->id;
        }
        $req = Requests::findOrFail($request->id);
        $req->division_id = $request->patient;
        $req->remark = $request->remark;
        $req->request_date = $request->request_date;
        $req->request_year_code = $request->request_year_code;
        $req->save();
        $req->transactions()->sync($transactions);
        return response()->json();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Request $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(Requests $request)
    {
        $request->delete();
    }
}
