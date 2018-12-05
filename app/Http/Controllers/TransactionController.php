<?php

namespace App\Http\Controllers;

use App\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = Transaction::with('user', 'product.medicine')->searchPaginateAndOrder();
        $columns = [
            [
                'id' => 'id',
                'name' => 'ID'
            ],
            [
                'id' => 'type',
                'name' => 'Type'
            ],
            [
                'id' => 'user.name',
                'name' => 'Users'
            ],
            [
                'id' => 'out_quantity',
                'name' => 'Quantity'
            ],
            [
                'id' => 'product.medicine.name',
                'name' => 'Products'
            ],
            [
                'id' => 'product.dosage',
                'name' => 'Dosage'
            ],
            [
                'id' => 'updated_at',
                'name' => 'Updated at'
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function show(Transaction $transaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Transaction $transaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function destroy(Transaction $transaction)
    {
        //
    }
}
