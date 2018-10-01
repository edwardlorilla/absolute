<?php

namespace App\Http\Controllers;

use App\Photo;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
class UploadController extends Controller
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
        $manager = new ImageManager();
        $hash = '';
        if ($file = $request->file('file')) {
            if (!(empty($request->photo))) {
                unlink(public_path() . '/storage/images/' . $request->photo);

            }
            $resize = $manager->make($file->getRealPath())->fit(100)->encode('jpg');
            $hash = md5($resize->__toString());
            $path = "storage/images/{$hash}.jpg";
            $resize->save(public_path($path));
            $photo = \App\Photo::create(['file' => "{$hash}.jpg"]);
        }
        auth()->user()->update(['photo_id' => $photo->id]);
        if (!(empty($request->photo))) {
            Photo::where('id', (int)$request->photo_id)->delete();
        }
        return response()->json([ 'id' => $photo->id, 'file' =>"{$hash}.jpg"], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Photo  $photo
     * @return \Illuminate\Http\Response
     */
    public function show(Photo $photo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Photo  $photo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Photo $photo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Photo  $photo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Photo $photo)
    {
        //
    }
}
