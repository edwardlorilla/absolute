<?php

namespace App\Http\Controllers;

use App\Setting;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
class SettingController extends Controller
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
        $setting = Setting::first();
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
            $setting->photo_id = $photo->id;
        }

        if($request->name ){
            $setting->name = $request->name;
        }

        $setting->save();
        if (!(empty($request->photo))) {
            Photo::where('id', (int)$request->photo_id)->delete();
        }
        return response()->json($setting->with('photo')->first(), 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function show(Setting $setting)
    {
        return response()->json($setting->with('photo')->first(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Setting $setting)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function destroy(Setting $setting)
    {
        //
    }
}
