<?php

namespace App\Http\Controllers;

use App\Supply;
use Illuminate\Http\Request;

class SupplyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = Supply::searchPaginateAndOrder();
        $columns = [

            [
                'id' => 'id',
                'name' => 'ID'
            ],
            [
                'id' => 'name',
                'name' => 'Name'
            ],
            [
                'id' => 'quantity',
                'name' => 'Quantity'
            ],
            [
                'id' => 'purchase_order',
                'name' => 'Purchase Order'
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
        $input = $this->validate($request, [
            'supply_id' => 'required',
            'name' => 'required',
            'disabled' => '',
            'quantity' => 'required',
            'purchase_order' => 'required',
            /*'vat' => 'required',
            'purchase_rate' => 'required',
            'discount' => 'required',
            'mrp_rate' => 'required',
            'sale_rate' => 'required',*/
            'reorder_point' => 'required'
        ]);
        $supply = Supply::updateOrCreate(
            ['id' => $request->id],
            $input
        );
        return response()->json($supply, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Supply $supply
     * @return \Illuminate\Http\Response
     */
    public function show(Supply $supply)
    {
        return response()->json($supply);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Supply $supply
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Supply $supply)
    {
        if((int)$request->type === 1) {
            $supply->increment('quantity', $request->quantity);
        }else{
            $supply->decrement('quantity', $request->quantity);
        }
        return response()->json($supply->tracks()->save(new \App\Track(['check' => (int)$request->quantity, 'type' => (int)$request->type])), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Supply $supply
     * @return \Illuminate\Http\Response
     */
    public function destroy(Supply $supply)
    {
        return response()->json($supply->delete());
    }
}
