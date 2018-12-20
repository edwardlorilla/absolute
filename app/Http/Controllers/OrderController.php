<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = Order::with('subject', 'source',  'user')->searchPaginateAndOrder();
        $columns = Order::$columns;
        return response()
            ->json([
                'model' => $model,
                'columns' => $columns
            ]);
    }

    public function validateCheckin(Request $request)
    {
        dd($request->all());
        $input = $request->validate([
            'po_number' => 'required|unique:orders,po_number',
            'quantity_per' => 'required',
            'product_id' => 'required',
            'quantity' => 'required',
            'unit_cost' => 'required',
            'unit' => 'required',
            'dispensing_unit' => 'required'
        ]);
        return response()->json(200);
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
        $orders = $request->validate([
            'source_id' => 'required',
            'date_delivered' => 'required',
            'data' => 'required|array|min:1',
            'data.*.po_number' => 'distinct',
        ]);
        $user = auth()->user();
        foreach ($orders['data'] as $medicine) {

            $transaction = new \App\Transaction;
            $transaction->out_quantity = $medicine['quantity'];
            $transaction->type = 1;
            $transaction->expiry_date = $medicine['expiry_date'];
            $transaction->user_id = $user->id;
            $transaction->product_id = $medicine['product_id']['id'];
            $transaction->save();
            $transaction->orders()->create([
                'user_id' => auth()->id(),
                'type' => 'created_purchase_order',
                'source_id' => $orders['source_id'],
                'po_number' => $medicine['po_number'],
                'date_delivered' => $orders['date_delivered']
            ]);
        }

        return response()->json();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Order $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Order $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Order $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Order $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }
}
