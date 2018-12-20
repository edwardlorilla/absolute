<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Helper\DataViewer;
class Receiptment extends Model
{
    use DataViewer;
    public static $columns =  [
        [
            'id' => 'id',
            'name' => 'ID'
        ],
        [
            'id' => 'division.name',
            'name' => 'Code'
        ],[
            'id' => 'product.medicine.name',
            'name' => 'Medicine'
        ],[
            'id' => 'po_number',
            'name' => 'PO #'
        ],[
            'id' => 'date_release',
            'name' => 'Date Release'
        ],[
            'id' => 'date_print',
            'name' => 'Date Print'
        ],
    ];
    protected $fillable = ['division_id', 'product_id', 'po_number', 'date_release', 'date_print'];

    public function division()
    {
        return $this->belongsTo(Division::class);
    }
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
