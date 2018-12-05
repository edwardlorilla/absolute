<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Helper\DataViewer;
use Carbon\Carbon;

class Product extends Model
{
    use DataViewer, RecordActivity;

    public $fillable = [
        /*'product_id',
        'po_number',
        'pr_number',
        'name',
        'vat',
        'discount',
        'reorder_point',
        'purchase_rate',
        'mrp_rate',
        'sale_rate',*/
        'disabled',
        'medication',
        'dosage',
        'medicine_id',
        'category_id',
        'package_id'
    ];

    protected $appends = ['quantity', 'expiry_date'];
    public static $columns = [
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
            'id' => 'manufacture_date',
            'name' => 'Manufacture Date'
        ], [
            'id' => 'expiry_date',
            'name' => 'Expiry Date'
        ]
    ];

    public function getQuantityAttribute()
    {
        /*$product = $this->transactions()->get();
//       $product->expiry_date > Carbon::parse()->format('Y-m-d ')
            return $product->reduce(function ($sum, $transaction) {
                return $transaction->type ? $sum + $transaction->out_quantity : $sum - $transaction;
            }, 0);*/
        /*$product = $this->transactions()->get();
        return $product->reduce(function ($sum, $transaction){
               return $transaction->type ? $sum + $transaction->out_quantity : $sum - $transaction->out_quantity;
           }, 0);*/
        /*$transaction = $this->with('expires', 'transactions')->get();
        return  $transaction->map(function ($transaction, $key) {
            return $transaction->expires->filter(function ($q, $key){
                return $q->expiry_date  > Carbon::parse()->format('Y-m-d ');
            });
        })->reduce(function ($sum, $transaction){
            return $transaction->type ? $sum + $transaction->out_quantity : $sum - $transaction->out_quantity;
        }, 0);*/
        /*$transaction = $this->with('expires', 'transactions')->get();
        return  $transaction->map(function ($transaction, $key) {
            return $transaction->expires->where('expiry_date',  '>', Carbon::parse()->format('Y-m-d '));
        });*/
        /*$transaction = $this->with('expires', 'transactions')->get();
        return  $transaction->map(function ($transaction, $key) {
            return $transaction->whereHas('expires', function($q){
                $q->where('expiry_date',  '>', Carbon::parse()->format('Y-m-d '));
            });
        });*/
        /*$products = $this->whereHas('expires', function ($q){
            $q->where('expiry_date',  '>', Carbon::parse()->format('Y-m-d '));
        })->with('transactions')->get();
        return $products->map(function ($product, $key) {
            return $product->transactions->reduce(function ($sum, $transaction){
                return $transaction->type ? $sum + $transaction->out_quantity : $sum - $transaction->out_quantity;
            }, 0);
        });*/
        $transaction = $this->transactions()->get();
        return $transaction->reduce(function ($sum, $transaction){
            if($transaction->completed && $transaction->type && Carbon::parse($transaction->expiry_date)->format('Y-m-d') > Carbon::parse()->format('Y-m-d')){
                return $sum + $transaction->out_quantity;
            }else if($transaction->completed && $transaction->type == 0){
                return $sum - $transaction->out_quantity;
            }else{
                return $sum;
            }
        }, 0);


    }

    public function getExpiryDateAttribute()
    {
        return $this->transactions()->first() ? $this->transactions()->orderBy('expiry_date', 'desc')->first()->expiry_date : '';
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    public function expires()
    {
        return $this->hasMany(Expire::class);
    }

    public function medicine()
    {
        return $this->belongsTo(Medicine::class);
    }


    /*public function rack()
    {
        return $this->hasOne(Rackentry::class);
    }*/

    /*public function packs()
    {
        return $this->hasOne(Pack::class);
    }*/

    public function package()
    {
        return $this->belongsTo(Package::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
