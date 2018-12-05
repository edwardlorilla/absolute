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
        $model = Supply::whereType(request('type'))->searchPaginateAndOrder();
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

        $input = $request->validate([
            'id' => '',
            'name' => 'required',
            'description' => '',
            'reorder_point' => ''
        ]);
        $input['type'] = request()->type;
        $supply = Supply::updateOrCreate(
            ['id' => $request->id],
            $input
        );
        return response()->json($supply, 201);
    }

    public function receive_items(Request $request)
    {
        $input = $request->validate([
            'division' => 'required',
            'request_date' => '',
            'request_year_code' => 'required',
            'year' => 'required',
            'supplies' => 'required|array|min:1',
        ]);

        foreach ($input['supplies'] as $item) {
            $supply = Supply::whereId($item['id'])->first();
            $supply->tracks()->save(new \App\Track(['division_id' => $input['division'], 'check' => $item['out_quantity'], 'type' => 0]));
        }
    }

    public function store_purchase_order(Request $request)
    {
        $input = $request->validate([
            'po_number' => 'required',
            'pr_number' => '',
            'date_delivered' => 'required',
            'source_id' => 'required',
            'data' => 'required|array|min:1',
        ]);
        $supplies = '';
        foreach ($input['data'] as $item) {
            $supply = Supply::whereId(request()->supply_id ? request()->supply_id : $item['supply_id']['id'])->first();
            $supplies = $supply->tracks()->save(new \App\Track(['check' => $item['quantity'], 'type' => 1]));
            $supply->orders()->create([
                'user_id' => auth()->id(),
                'type' => 'created_purchase_order',
                'source_id' => $input['source_id'],
                'po_number' => $input['po_number'],
                'pr_number' => $input['pr_number'],
                'date_delivered' => $input['date_delivered']
            ]);
        }
        //
        return response()->json($supplies, 200);
    }

    public function create_supply_ledger($request)
    {
        $input = $this->validate($request, [
            'supply_id' => 'required',
            'supplier_id' => 'required',
            'name' => 'required',
            'disabled' => '',
            'purchase_order' => 'required',
            'description' => '',
            'locations' => 'required|array|min:1',
            'code' => 'required',
            'unit_cost' => 'required',
            'unit_id' => 'required',
            /*'vat' => 'required',
            'purchase_rate' => 'required',
            'discount' => 'required',
            'mrp_rate' => 'required',
            'sale_rate' => 'required',*/
            'reorder_point' => 'required'
        ]);
        $input->except('purchase_order');
        $input['quantity'] = (int)$request->quantity;
        $input['supplier_id'] = (int)$request->supplier_id;
        $locations = $request->locations;

        $supply = Supply::updateOrCreate(
            ['id' => $request->id],
            $input
        );
        if (!$request->id) { //if not found id
            $supply->orders()->create([
                'user_id' => auth()->id(),
                'type' => 'created_purchase_order',
//            'source_id' => $orders['source_id'], //type= medicine = 0 'supply 1
                'po_number' => $request->purchase_order,
                'pr_number' => '',
                'date_delivered' => $request->date_delivered
            ]);
        }


        $supply->tracks()->save(new \App\Track(['supplier_id' => $request->supplier_id, 'check' => $input['quantity'], 'type' => 1]));

        foreach ($locations as $q) {
            $location = \App\Location::whereId($q['id'])->first();
            $receive = $location->receives()->save(new \App\Receive(['quantity' => $q['quantity']]));
            $supply->tracks()->save(new \App\Track(['supplier_id' => $request->supplier_id, 'receive_id' => $receive->id, 'check' => $q['quantity'], 'type' => 0]));
            $supply->decrement('quantity', $q['quantity']);
            $location->update(['disabled' => 0]);
        }


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
        $query = [
            'user_id',
            'type'
        ];
//        $model = Supply::whereId()->with('tracks')->first();
        $model = \App\Track::whereSupplyId($supply->id)->searchPaginateAndOrder();
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
                'id' => 'check',
                'name' => 'Quantity'
            ],
        ];
        return response()
            ->json([
                'model' => $model,
                'columns' => $columns,
                'supply' => $supply
            ]);

    }

    public function edit(Supply $supply)
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
        $supplier = \App\Supplier::whereId($supply->supplier_id)->first();
        $receives = [];

        if ((int)$request->type === 1) {
            $receive = $supplier->tracks()->save(new \App\Track(['check' => $request->quantity, 'type' => (int)$request->type, 'supply_id' => $supply->id]));
            $receive['supplier'] = $supplier;
            $receives[] = $receive;
            $supply->increment('quantity', $request->quantity);
        } else {
            foreach ($request->locations as $q) {
                $location = \App\Location::whereId($q['id'])->first();
                $receive = $location->receives()->save(new \App\Receive(['quantity' => $q['quantity']]));
                $track = $supply->tracks()->save(new \App\Track(['supplier_id' => $supply->supplier_id, 'receive_id' => $receive->id, 'check' => $q['quantity'], 'type' => 0]));
                $receives[] = \App\Track::where('id', $track->id)->with('supplier', 'receive.location')->first();
                $supply->decrement('quantity', $q['quantity']);
                $location->update(['disabled' => 0]);
            }
        }
        return response()->json($receives, 200);
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
