<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Helper\DataViewer;
class Category extends Model
{
    use DataViewer;
    public $fillable = [
        'name'
    ];
    public static $columns =  [

        [
            'id' => 'id',
            'name' => 'ID'
        ],
        [
            'id' => 'name',
            'name' => 'Name'
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
    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
