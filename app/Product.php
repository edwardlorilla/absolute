<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Helper\DataViewer;
class Product extends Model
{
    use DataViewer, RecordActivity;
    public $fillable = [
        'product_id',
        'name',
        'quantity',
        'vat',
        'discount',
        'reorder_point',
        'purchase_rate',
        'mrp_rate',
        'sale_rate',
        'manufacture_date',
        'expiry_date',
        'category_id',
        'package_id'
    ];
    public static $columns =  [
        [
            'id' => 'product_id',
            'name' => 'Product ID'
        ],[
            'id' => 'name',
            'name' => 'Name'
        ],[
            'id' => 'quantity',
            'name' => 'Quantity'
        ],[
            'id' => 'manufacture_date',
            'name' => 'Manufacture Date'
        ],[
            'id' => 'expiry_date',
            'name' => 'Expiry Date'
        ]
    ];
    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
    public function rack()
    {
        return $this->hasOne(Rackentry::class);
    }

    public function packs()
    {
        return $this->hasOne(Pack::class);
    }

    public function package()
    {
        return $this->belongsTo(Package::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
