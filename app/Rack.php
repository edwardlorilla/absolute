<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Helper\DataViewer;
class Rack extends Model
{
    use DataViewer;
    protected $fillable = ['name'];
    public static $columns =  [
        [
            'id' => 'id',
            'name' => 'ID'
        ],[
            'id' => 'name',
            'name' => 'Name'
        ]
    ];
}
