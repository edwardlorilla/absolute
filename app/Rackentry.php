<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Helper\DataViewer;
class Rackentry extends Model
{
    use DataViewer;
    protected $fillable = ['weight', 'rack_id'];
    public static $columns =  [
        [
            'id' => 'id',
            'name' => 'ID'
        ],
        [
            'id' => 'weight',
            'name' => 'Weight'
        ]
    ];

}
