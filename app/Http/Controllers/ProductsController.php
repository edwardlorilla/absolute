<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = new Product;
        $query = [
            'category_id'
        ];
        foreach ($query as $column) {
            if (request()->has($column)) {
                $model = $model->whereIn($column, explode(',', request($column)));
            }
        }
        $model = $model->with('category')->searchPaginateAndOrder();
        $columns = [
            [
                'id' => 'product_id',
                'name' => 'Product ID'
            ], [
                'id' => 'name',
                'name' => 'Name'
            ], [
                'id' => 'quantity',
                'name' => 'Quantity'
            ], [
                'id' => 'category.name',
                'name' => 'Category'
            ], [
                'id' => 'manufacture_date',
                'name' => 'Manufacture Date'
            ], [
                'id' => 'expiry_date',
                'name' => 'Expiry Date'
            ]
        ];
        return response()
            ->json([
                'model' => $model,
                'columns' => $columns
            ], 200);
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
            'product_id' => 'required',
            'name' => 'required',
            'quantity' => 'required | integer',
            //'vat' => 'required',
            'reorder_point' => 'required',
            /*'purchase_rate' => 'required',
            'mrp_rate' => 'required',
            'sale_rate' => 'required',*/
            'manufacture_date' => 'required',
            'expiry_date' => 'required',
            'category_id' => 'required',
            'package_id' => 'required',
            'rack.weight' => 'required',
            'rack.rack_id' => 'required',
            //'discount' => 'required',
            'packs.item_pack' => 'required',
            'packs.item_type' => 'required',
            'packs.sub_item' => 'required',
            'packs.sub_item_type' => 'required',
        ]);
        $model = Product::updateOrCreate(
            ['id' => $request->id],
            [
                'product_id' => $input['product_id'],
                'name' => $input['name'],
                'quantity' => $input['quantity'],
                //'vat' => $input['vat'],
                'reorder_point' => $input['reorder_point'],
                /*'purchase_rate' => $input['purchase_rate'],
                'mrp_rate' => $input['mrp_rate'],
                'sale_rate' => $input['sale_rate'],*/
                'manufacture_date' => $input['manufacture_date'],
                'expiry_date' => $input['expiry_date'],
                'category_id' => $input['category_id'],
                'package_id' => $input['package_id'],
                //'discount' => $input['discount']
            ]


        );
        $model->rack()->updateOrCreate(
            ['id' => array_key_exists('id', $request->rack) ? $input['rack']['id'] : null],
            [
                'weight' => $input['rack']['weight'],
                'rack_id' => $input['rack']['rack_id']
            ]);
        $model->packs()->updateOrCreate(
            ['id' => array_key_exists('id', $request->packs) ? $input['packs']['id'] : null],
            [
                "item_pack" => $input['packs']['item_pack'],
                "item_type" => $input['packs']['item_type'],
                "sub_item" => $input['packs']['sub_item'],
                "sub_item_type" => $input['packs']['sub_item_type'],
            ]
        );
        return response()->json($model, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        $query = [
            'user_id',
            'type'
        ];
        $transaction = $product->transactions();
        foreach ($query as $column) {
            if (request()->has($column)) {
                $transaction = $transaction->whereIn($column, explode(',', request($column)));
            }
        }
        $model = $transaction->with('user', 'product')->searchPaginateAndOrder();
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
                'id' => 'user.name',
                'name' => 'Users'
            ],
            [
                'id' => 'out_quantity',
                'name' => 'Quantity'
            ],
            [
                'id' => 'product.name',
                'name' => 'Products'
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
                'columns' => $columns
            ]);

    }

    public function edit(Product $product)
    {
        $id = $product->id;
        return response()->json(Product::whereId($id)->with('rack', 'packs', 'package', 'category')->first(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Product $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
//
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        return response()->json($product->delete(), 201);
    }


}
