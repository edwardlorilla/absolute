<?php

namespace App\Http\Controllers;

use App\Sign;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
class SignsController extends Controller
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'request_id' => 'required',
            'file' => 'file',
            'photo' => ''
        ]);
        $input = $request->all();
        if ($file = $request->file('file')) {
            if (!(empty($request->photo))) {
                unlink(public_path() . '/storage/images/' . $request->photo);
            }
            $name = time() . $file->getClientOriginalName();
            $file->move('storage/images', $name);
            $input['file'] = $name;
        }
        $sign = new Sign;
        $sign->file = $input['file'];
        $sign->request_id = $input['request_id'];
        $sign->save();
        return response()->json();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Sign  $sign
     * @return \Illuminate\Http\Response
     */
    public function show(Sign $sign)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Sign  $sign
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Sign $sign)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Sign  $sign
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sign $sign)
    {
        //
    }
}
