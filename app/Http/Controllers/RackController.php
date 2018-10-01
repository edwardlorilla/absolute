<?php

namespace App\Http\Controllers;

use App\Rack;
use Illuminate\Http\Request;

class RackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = Rack::searchPaginateAndOrder();
        $columns = Rack::$columns;
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
        $input = $this->validate($request, [
            'name' => 'required',
        ]);
        $model = Rack::updateOrCreate(
            ['id' => $request->id],
            $input
        );
        return response()->json($model, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Rack  $rack
     * @return \Illuminate\Http\Response
     */
    public function show(Rack $rack)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Rack  $rack
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Rack $rack)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Rack  $rack
     * @return \Illuminate\Http\Response
     */
    public function destroy(Rack $rack)
    {
        //
    }
}
