<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pack extends Model
{
    public $fillable = [
        'item_pack',
        'item_type',
        'sub_item',
        'sub_item_type'
    ];

}
