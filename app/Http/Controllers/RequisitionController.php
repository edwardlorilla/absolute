<?php

namespace App\Http\Controllers;

use App\Requisition;
use Illuminate\Http\Request;

class RequisitionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function print_requisition(Requisition $requisition)
    {
        return response()->json(Requisition::whereId($requisition->id)->with(['location', 'source', 'division', 'supplies.unit', 'supplies.tracks' => function ($q) use ($requisition) {
            $q->whereFormType(1)->where('requisition_id', $requisition->id);
        }])->first(), 200);
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
        // dd($request->all());
        $input = $this->validate($request, [
            'office' => '',
            'code' => '',
            'responsibilities' => '',
            'division_id' => 'required',
            'source_id' => 'required',
            'location_id' => 'required',
            'supplies' => 'required|array|min:1',
        ]);
        $requisition = Requisition::updateOrCreate(
            ['id' => $request->id ? $request->id : ''],
            $input
        );
        $supplies = $request->supplies;
        $location = \App\Location::whereId($request->location_id)->first();

        $supplies_id = [];
        for ($i = 0; $i < count($supplies); ++$i) {
            $supply = \App\Supply::whereId($supplies[$i]['id'])->first();
            $receive = $location->receives()->save(new \App\Receive(['quantity' => $supplies[$i]['out_quantity']]));
            $supply->tracks()->save(new \App\Track(['requisition_id' => $requisition->id, 'supplier_id' => $supply->supplier_id, 'receive_id' => $receive->id, 'check' => $supplies[$i]['out_quantity'], 'type' => 0, 'form_type' => 1])); //type = 1 = requistion
            $supply->orders()->create([
                'user_id' => auth()->id(),
                'type' => 'created_purchase_order',
                'source_id' => $input['source_id'],
                'po_number' => $input['po_number'],
                'pr_number' => $input['pr_number'],
                'date_delivered' => $input['date_delivered']
            ]);
            $supplies_id[] = $supply->id;
        }
        $requisition->supplies()->attach($supplies_id);
        return response()->json($requisition);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Requisition $requisition
     * @return \Illuminate\Http\Response
     */
    public function show(Requisition $requisition)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Requisition $requisition
     * @return \Illuminate\Http\Response
     */
    public function edit(Requisition $requisition)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Requisition $requisition
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Requisition $requisition)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Requisition $requisition
     * @return \Illuminate\Http\Response
     */
    public function destroy(Requisition $requisition)
    {
        //
    }
}
