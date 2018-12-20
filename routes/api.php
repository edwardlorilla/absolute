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
    Route::post('/supplies/receive-item', 'SupplyController@receive_items');
    Route::get('/requisitions/print/{requisition}', 'RequisitionController@print_requisition');
    Route::get('/products/edit/{product}', 'ProductsController@edit');
    Route::get('/dashboard', function () {
        $products = \App\Transaction::with(['product' => function ($q) {
            $q->select('id', 'medication');
        }])->get();
        return response()->json($products);
    });
    Route::get('/search/doctors', function () {
        $roles = \App\Role::whereId('3')->with(['users' => function ($q) {
            $q->where('name', 'LIKE', '%' . request('search') . "%");
        }])->first();
        return response()->json($roles->users);
    });
    Route::get('/search/patients', function () {
        $roles = \App\Role::whereId('3')->with(['users' => function ($q) {
            $q->where('name', 'LIKE', '%' . request('search') . "%");
        }])->first();
        return response()->json($roles->users);
    });

    Route::post('/products/{product}/check-item', function (Request $request, App\Product $product) {
        $request->validate([
            "po_number" => "required|unique:orders,po_number",
            "date_delivered" => "required",
            "quantity" => "required",
            "unit_cost" => "required",
            "expiry_date" => "required",
            "quantity_per" => "required",
            "unit_id" => 'required',
            "dispensing_unit_id" => 'required',
            "source_select" => 'required',
        ]);
        $user = auth()->user();
        $transaction = new \App\Transaction;
        $transaction->out_quantity = $request->quantity;
        $transaction->type = 1;
        $transaction->expiry_date = $request->expiry_date;
        $transaction->user_id = $user->id;
        $transaction->product_id = $product->id;
        $transaction->save();
        $transaction->orders()->create([
            'user_id' => auth()->id(),
            'type' => 'created_purchase_order',
            'source_id' => $request->source_select,
            'po_number' => $request->po_number,
            'date_delivered' => $request->date_delivered
        ]);
        return response()->json($product->transactions()->whereId($transaction->id)->with('user', 'product')->first());
    });
    Route::get('/products/mass-update', function () {
        App\Product::where('disabled', true)
            ->update(['disabled' => false]);
        return response()->json([], 204);
    });
    Route::get('/supplies/mass-update', function () {
        App\Supply::where('disabled', true)
            ->update(['disabled' => false]);
        return response()->json([], 204);
    });

    Route::get('/tracks/print/{supply}', 'TrackController@print_id');

    Route::get('/locations/able/{location}', 'LocationController@able');
    Route::get('/locations/mass-update', 'LocationController@massUpdate');
    Route::get('/locations/disabled/{location}', 'LocationController@disabled');
    Route::get('/supplies/disabled/{supply}', function (App\Supply $supply) {
        $supply->update(['disabled' => 1]);
        return response()->json();
    });
    Route::get('/products/disabled/{product}', function (App\Product $product) {
        $product->update(['disabled' => 1]);
        return response()->json();
    });
    Route::get('/supplies/disabled/{supply}', function (App\Supply $supply) {
        $supply->update(['disabled' => 1]);
        return response()->json();
    });
    Route::get('/search/locations', function () {
        $select = new App\Location;
        if (request()->has('search')) {
            $select = App\Location::where('type', 0)->where('name', 'LIKE', '%' . request('search') . "%")->where('disabled', false)->get();
        }
        return response()->json($select, 200);
    });
    Route::get('/search/products', function () {
        $select = new App\Product;
        if (request()->has('search')) {
            $select = App\Product::with(['package', 'category', 'medicine' => function($q){
                $q->where('name', 'LIKE', '%' . request('search') . "%");
            }])->get();
        }
        return response()->json($select, 200);
    });
    Route::get('/search/supplies', function () {
        $select = new App\Supply;
        if (request()->has('search')) {
            $select = App\Supply::where('name', 'LIKE', '%' . request('search') . "%")
                ->where('type', request('type') == '0' ? 0 : 1)->get();
        }
        return response()->json($select, 200);
    });
    Route::get('/search/medicines', function () {
        $select = new App\Medicine;
        if (request()->has('search')) {
            $select = App\Medicine::where('name', 'LIKE', '%' . request('search') . "%")->get();
        }
        return response()->json($select, 200);
    });

    Route::get('/search/units', function () {
        $select = new App\Unit;
        if (request()->has('search')) {
            $select = App\Unit::where('name', 'LIKE', '%' . request('search') . "%")->get();
        }
        return response()->json($select, 200);
    });
    Route::get('/search/users', function () {
        $select = new App\Unit;
        if (request()->has('search')) {
            $select = App\User::whereHas('roles', function ($query) {
                $query->where('id', 3); // roles name user id
            })->where('name', 'LIKE', '%' . request('search') . "%")->get();
        }
        return response()->json($select, 200);
    });
    Route::get('/search/locations/requisitions', function () {
        $select = new App\Location;
        if (request()->has('search')) {
            $select = App\Location::where('type', 1)->where('name', 'LIKE', '%' . request('search') . "%")->get();
        }
        return response()->json($select, 200);
    });
    Route::get('/search/suppliers', function () {
        $select = new App\Supplier;
        if (request()->has('search')) {
            $select = App\Supplier::where('name', 'LIKE', '%' . request('search') . "%")
                ->where('disabled', false)
                ->get();
        }
        return response()->json($select, 200);
    });
    Route::get('/search/divisions', function () {
        $select = new App\Division;
        if (request()->has('search')) {
            $select = App\Division::where('name', 'LIKE', '%' . request('search') . "%")
                ->get();
        }
        return response()->json($select, 200);
    });
    Route::get('/search/sources', function () {
        $select = new App\Source;
        if (request()->has('search')) {
            $select = App\Source::where('name', 'LIKE', '%' . request('search') . "%")
                ->get();
        }
        return response()->json($select, 200);
    });

    Route::get('/search/request-supply', function () {
        $select = new App\Supply;

        if (request()->has('search')) {
            $select = App\Supply::where('name', 'LIKE', '%' . request('search') . "%")
                ->where('disabled', false)
                ->get()
                ->filter(function($item) {
                    return $item->quantity > 0 && $item->disabled == false;
                });
        }
        return response()->json($select, 200);
    });
    Route::get('/product/{id}', 'ProductsController@show_request');
    Route::get('/search/request-medicine', function () {
        $select = new App\Product;

        if (request()->has('search')) {
            $select = App\Product::with(['package', 'category', 'medicine' => function($q){
                $q->where('name', 'LIKE', '%' . request('search') . "%");
            }])->where('disabled', false)
                ->get()
                ->filter(function($item) {
                return $item->quantity >  0 && $item->disabled == false &&  $item->expiry_date > Carbon::parse()->format('Y-m-d');
            });
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

    Route::post('/users/sign', 'UserController@sign');

    Route::get('/users/create', 'UserController@create');
    Route::get('/supplies/edit/{supply}', 'SupplyController@edit');
    Route::post('/pending/supply', 'PendingController@supply');
    Route::post('/pending/supply/approved/{pending}', 'PendingController@approved_supply_request');
    Route::post('/pending/request-medicine/approved/{pending}', 'PendingController@approved_medicine_request');
    Route::get('/users/notification/{user}', 'UserController@notification');
    Route::get('/users/mark-as-read/notification', 'UserController@markAsRead');
    Route::post('/supplies/purchase-order', 'SupplyController@store_purchase_order');
    Route::get('/division/{division}', 'DivisionController@show_division');
    Route::get('/user/notification/{id}', 'UserController@notificationMarkAsRead');
    Route::post('/orders/validate-checkin', 'OrderController@validateCheckin');
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
        '/suppliers' => 'SupplierController',
        '/locations' => 'LocationController',
        '/divisions' => 'DivisionController',
        '/sources' => 'SourceController',
        '/requisitions' => 'RequisitionController',
        '/units' => 'UnitController',
        '/orders' => 'OrderController',
        '/receipts' => 'ReceiptController',
        '/pending' => 'PendingController'
    ]);
});


