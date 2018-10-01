<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Helper\DataViewer;
class Transaction extends Model
{
    use DataViewer;
    protected $fillable = ['out_quantity', 'product_id', 'user_id', 'type'];

    public static $columns = [

        [
            'id' => 'id',
            'name' => 'ID'
        ],
        [
            'id' => 'type',
            'name' => 'Type'
        ],
        [
            'id' => 'user_id',
            'name' => 'Users'
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
    public function requests()
    {
        return $this->belongsToMany(Request::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
