<?php

use Illuminate\Http\Request;
use Carbon\Carbon;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/login', function () {
    $setting = \App\Setting::select('name')->first();
    return response()->json($setting, 200);
});
Route::middleware('auth:api')->get('/user', function (Request $request) {
    $setting = \App\Setting::with('photo')->first();
    return response()->json(['user' => \App\User::whereId($request->user()->id)->with('roles', 'photo')->first(), 'setting' => $setting], 200);
});
Route::middleware(['auth:api'])->group(function () {
    Route::get('/products/edit/{product}', 'ProductsController@edit' );
    Route::get('/dashboard', function () {
        $products = \App\Transaction::with(['product' => function($q){
            $q->select('id', 'name');
        }])->get();
        return response()->json($products);
    });
    Route::get('/search/doctors', function () {
        $roles = \App\Role::whereId('3')->with(['users' => function($q){
            $q->where('name', 'LIKE', '%' . request('search') . "%");
        }])->first();
        return response()->json($roles->users);
    });
    Route::get('/search/customers', function () {
        $roles = \App\Role::whereId('4')->with(['users' => function($q){
            $q->where('name', 'LIKE', '%' . request('search') . "%");
        }])->first();
        return response()->json($roles->users);
    });

    Route::post('/products/{product}/check-item', function (Request $request, App\Product $product) {
        $user = auth()->user();
        $transaction = new \App\Transaction;
        $transaction->out_quantity = $request->quantity;
        $transaction->type = 1;
        $transaction->user_id = $user->id;
        $transaction->product_id = $product->id;
        $transaction->product()
            ->where('id', $product->id)
            ->update([
                'quantity' => $request->quantity,
                'manufacture_date' => $request->manufacture_date,
                'expiry_date' => $request->expiry_date
            ]);
        $transaction->save();
        return response()->json($product->transactions()->whereId($transaction->id)->with('user', 'product')->first());
    });
    Route::get('/products/mass-update', function () {
        App\Product::where('disabled', true)

            ->update(['disabled' => false]);
        return response()->json([], 204);
    });
    Route::get('/products/disabled/{product}', function (App\Product $product) {
        $product->update(['disabled' => 1]);
        return response()->json();
    });
    Route::get('/search/request-medicine', function () {
        $select = new App\Product;

        if (request()->has('search')) {
            $select = App\Product::where('name', 'LIKE', '%' . request('search') . "%")
                ->where('disabled', false)
                ->where('quantity' , '>' ,0)
                ->whereDate('expiry_date', '>', Carbon::parse()->format('Y-m-d '))
                ->with('category', 'package', 'packs')->get();
        }
        return response()->json($select, 200);
    });//request medicine

    Route::get('/select', function () {
        $categories = App\Category::all();
        $packages = App\Package::all();
        $racks = App\Rack::all();
        return response()->json(['categories' => $categories, 'packages' => $packages, 'racks' => $racks], 200);
    }); //product
    Route::get('/users/edit/{user}', 'UserController@edit');
    Route::get('/users/create', 'UserController@create');
    Route::apiResources([
        '/users' => 'UserController',
        '/packs' => 'PacksController',
        '/categories' => 'CategoriesController',
        '/packages' => 'PackagesController',
        '/products' => 'ProductsController',
        '/roles' => 'RolesController',
        '/racks' => 'RackController',
        '/rackentries' => 'RackentryController',
        '/requests' => 'RequestsController',
        '/transactions' => 'TransactionController',
        '/signs' => 'SignsController',
        '/uploads' => 'UploadController',
        '/settings' => 'SettingController',
        '/supplies' => 'SupplyController',
        '/tracks' => 'TrackController',
        '/activities' => 'ActivityController',
    ]);
});


