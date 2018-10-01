<?php

namespace App\Http\Controllers;

use App\Track;
use Illuminate\Http\Request;

class TrackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {


    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Track  $track
     * @return \Illuminate\Http\Response
     */
    public function show($supply)
    {
        $model = new Track;
        $query = [
            'type'
        ];
        foreach ($query as $column) {
            if (request()->has($column)) {
                $model = $model->whereIn($column, explode(',', request($column)));
            }
        }
        $model = $model->searchPaginateAndOrder();
        $columns = [
            [
                'id' => 'check',
                'name' => 'Check'
            ],
            [
                'id' => 'type',
                'name' => 'TYPE'
            ],
            [
                'id' => 'created_at',
                'name' => 'Create at'
            ],
            [
                'id' => 'updated_at',
                'name' => 'Updated at'
            ]
        ];
        return response()
            ->json([
                'model' => $model,
                'columns' => $columns,
                'supply' => \App\Supply::whereId($supply)->first()
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Track  $track
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Track $track)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Track  $track
     * @return \Illuminate\Http\Response
     */
    public function destroy(Track $track)
    {
        //
    }
}
