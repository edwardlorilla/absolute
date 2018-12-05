<?php

namespace App\Http\Controllers;

use App\Division;
use Illuminate\Http\Request;

class DivisionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = Division::searchPaginateAndOrder();
        $columns = Division::$columns;
        return response()
            ->json([
                'model' => $model,
                'columns' => $columns
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

    public function show_division(Division $division)
    {
        return response()->json($division);
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
            'name' => 'required',
            'supply_division' => 'required',
            'station' => ''
        ]);
        if (!$input['station']) {
            $input['station'] = $input['name'];
        }
        $division = Division::updateOrCreate(
            ['id' => $request->id ? $request->id : '', 'name' => $request->name, 'supply_division' => $request->supply_division],
            $input
        );
        return response()->json($division, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Division $division
     * @return \Illuminate\Http\Response
     */
    public function show(Division $division)
    {
        //\App\Request::whereDivisionId($division->id)->with('transactions')->get()
        /*\App\Order::whereSubjectId('App\Transaction')->whereHas('subject', function ($query) use ($division) {
            $query->with('requests')->get();
        })->get();*/
        $receipts = Division::whereId($division->id)->with('receipts.division', 'receipts.product.medicine')->searchPaginateAndOrder();
        $columns = \App\Receiptment::$columns;
        return response()
            ->json([
                'model' => $receipts,
                'columns' => $columns
            ], 200);
    }
   /* public function show_supplies(Division $division)
    {
        //\App\Request::whereDivisionId($division->id)->with('transactions')->get()
        /*\App\Order::whereSubjectId('App\Transaction')->whereHas('subject', function ($query) use ($division) {
            $query->with('requests')->get();
        })->get();
        $receipts = Division::whereId($division->id)->with('receipts.division', 'receipts.product.medicine')->searchPaginateAndOrder();
        $columns = \App\Receiptment::$columns;
        return response()
            ->json([
                'model' => $receipts,
                'columns' => $columns
            ], 200);
    }*/


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Division $division
     * @return \Illuminate\Http\Response
     */
    public function edit(Division $division)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Division $division
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Division $division)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Division $division
     * @return \Illuminate\Http\Response
     */
    public function destroy(Division $division)
    {
        //
    }
}
