<?php

namespace App\Http\Controllers;

use App\Receiptment;
use Illuminate\Http\Request;

class ReceiptController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
        {

            $model = new Receiptment;
            if (request()->has('division')) {
                $model = $model->whereDivisionId(request('division'));
            }
            if (request()->has('receipt_date')) {
                $model = $model->where('date_release', request('receipt_date'));
            }
            $model = $model->with('product.medicine', 'division')->searchPaginateAndOrder();
            $columns = Receiptment::$columns;
            return response()
                ->json([
                    'model' => $model,
                    'columns' => $columns,
                    'division' => \App\Division::whereHas('receipts')->get()
                ], 200);
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
     * @param  \App\Receiptment  $receiptment
     * @return \Illuminate\Http\Response
     */
    public function show(Receiptment $receiptment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Receiptment  $receiptment
     * @return \Illuminate\Http\Response
     */
    public function edit(Receiptment $receiptment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Receiptment  $receiptment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Receiptment $receiptment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Receiptment  $receiptment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Receiptment $receiptment)
    {
        //
    }
}
