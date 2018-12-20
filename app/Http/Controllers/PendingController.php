<?php

namespace App\Http\Controllers;

use App\Pending;
use Illuminate\Http\Request;

class PendingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = Pending::with('subject', 'user')->searchPaginateAndOrder();
        $columns = Pending::$columns;
        return response()
            ->json([
                'model' => $model,
                'columns' => $columns
            ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $this->validate($request, [
//            "division" => '',
            "request_date" => 'required',
            "request_year_code" => 'required',
            "products" => 'required',
        ]);
        $input['division'] = \App\User::whereId(auth()->id())->with('division')->first()['division']['id'];

        $users = \App\User::whereHas('roles', function ($q) {
            $q->where('name', 'superadministrator');
        })->where('id', '!=', auth()->id())->get();

        foreach ($users as $user) {
            $user->notify(new \App\Notifications\Pending(auth()->user(), $input));
        }
        \App\Product::where('disabled', true)
            ->update(['disabled' => false]);
        return response()->json([], 200);
    }

    public function supply(Request $request)
    {
        $input = $request->validate([
//            'division' => 'required',
            'request_date' => '',
            'request_year_code' => 'required',
            'year' => 'required',
            'supplies' => 'required|array|min:1',
        ]);
        $input['division'] = \App\User::whereId(auth()->id())->with('division')->first()['division']['id'];
        $users = \App\User::whereHas('roles', function ($q) {
            $q->where('name', 'superadministrator');
        })->where('id', '!=', auth()->id())->get();

        foreach ($users as $user) {
            $user->notify(new \App\Notifications\PendingSupply(auth()->user(), $input, request()->type == '0' ? 0 : 1));
        }
        \App\Supply::where('disabled', true)
            ->update(['disabled' => false]);
        return response()->json([], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Pending $pending
     * @return \Illuminate\Http\Response
     */
    public function show($pending)
    {
        return response()->json(auth()->user()->notifications()->whereId($pending)->first());


    }

    public function approved_supply_request($pending, Request $request)
    {

        $input = $request->validate([
            'division' => 'required',
            'request_date' => '',
            'request_year_code' => 'required',
            'year' => 'required',
            'user_id' => 'required',
            'supplies' => 'required|array|min:1',
        ]);
        $user = \App\User::whereId($input['user_id'])->first();
        foreach ($input['supplies'] as $item) {
            $supply =  \App\Supply::whereId($item['id'])->first();
            $supply->disabled = false;
            $supply->save();
            $supply->tracks()->save(new \App\Track(['division_id'=> $input['division'], 'check' => $item['out_quantity'], 'type' => 0]));
        }
        $user->notify(new \App\Notifications\ApprovedRequest('Your supply requests been approved by '. auth()->user()->name, $input['supplies'], request()->type == '0' ? 'office-supply-approved': 'supply-approved'));
        return response()->json(auth()->user()->notifications()->whereId($pending)->first()->markAsRead());
    }
    public function approved_medicine_request($pending, Request $request)
    {
        $input = $this->validate($request, [
            "division" => 'required',
            "request_date" => 'required',
            "request_year_code" => 'required',
            "user_id" => 'required',
            "products" => 'required',
        ]);
        $user = \App\User::whereId($input['user_id'])->first();
        $productId = [];
        foreach ($input['products'] as $product) {

            $transaction = new \App\Transaction;
            $transaction->out_quantity = $product['out_quantity'];
            $transaction->type = 0;
            $transaction->user_id = $user->id;
            $transaction->product_id = $product['id'];
            $transaction->save();
            $transactions[] = $transaction->id;
            $recipient = \App\Transaction::whereProductId($product['id'])
                ->whereDate('expiry_date', '>', \Carbon\Carbon::parse()->format('Y-m-d'))
                ->orderBy('expiry_date', 'asc')
                ->with(['orders' => function ($query) {
                    $query->first();
                }])->first();
            $receiptment = new \App\Receiptment;
            $receiptment->product_id = $product['id'];
            $receiptment->division_id =  $request->division;
            $receiptment->po_number = $recipient['orders'][0]['po_number'];
            //$receiptment->ris_number = $recipient['orders'][0]['pr_number'];
            $receiptment->date_release =$request->request_date;
            $receiptment->date_print = $request->request_date;
            $receiptment->save();
            $productId[] = $product['id'];
        }

        $requests = $user->requests()->save(new \App\Request([
            'division_id' => $request->division,
            'request_date' => $request->request_date,
            'request_year_code' => $request->request_year_code
        ]));
        $requests->transactions()->attach($transactions);
        $user->notify(new \App\Notifications\ApprovedRequest('Your medicine requests been approved by '. auth()->user()->name, $input['products'], 'medicine-approved'));
        return response()->json(auth()->user()->notifications()->whereId($pending)->first()->markAsRead(), 201);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Pending $pending
     * @return \Illuminate\Http\Response
     */
    public function edit(Pending $pending)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Pending $pending
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pending $pending)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Pending $pending
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pending $pending)
    {
        //
    }
}
