<?php

namespace App\Http\Controllers;

use App\Request as Requests;
use Illuminate\Http\Request;

class RequestsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = Requests::with([ 'user', 'transactions' => function ($query) {
            $query->with(['product' => function($q) {
                $q->select('id', 'quantity', 'name');
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
            ],
            [
                'id' => 'request_year_code',
                'name' => 'Request Year Code'
            ], [
                'id' => 'remark',
                'name' => 'Remark'
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
        $this->validate($request, [
            "remark" => 'required',
            "request_date" => 'required',
            "request_year_code" => 'required',
            "products" => 'required',
        ]);
        $user = auth()->user();
        $transaction = new \App\Transaction;
        $transactions = [];
        $products = $request->products;
        for ($i = 0; $i < count($products); ++$i) {
            $transaction->out_quantity = $products[$i]['out_quantity'];
            $transaction->type = 0;
            $transaction->user_id = $user->id;
            $transaction->product_id = $products[$i]['id'];
            $transaction->product()->where('id', $products[$i]['id'])->decrement('quantity', $products[$i]['out_quantity']);
            $transaction->save();
            $transactions[] = $transaction->id;
        }

       $requests = $user->requests()->save(new Requests([
            'remark' => $request->remark,
            'customer' => $request->customer,
            'doctor' => $request->doctor,
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
        $requests = Requests::whereId($request->id)->with(['sign','customer', 'doctor', 'user', 'transactions' => function ($query) {
            $query->with(['product' => function($q) {
                $q->with('category', 'package', 'packs');
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
    public function update(Request $request,  \App\Request $requests)
    {
        $this->validate($request, [
            "remark" => 'required',
            "request_date" => 'required',
            "request_year_code" => 'required',
            "customer" => 'required',
            "doctor" => 'required',
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
            $transaction->product()->where('id', $products[$i]['id'])->update(['disabled' => false,'quantity' => $products[$i]['quantity']]);
            $transaction->save();

            $transactions[] = $transaction->id;
        }
        $req = Requests::findOrFail($request->id);
        $req->customer = $request->customer;
        $req->doctor = $request->doctor;
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
        //
    }
}
