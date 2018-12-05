<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Receive extends Model
{
    protected $fillable = ['quantity'];
    public function location()
    {
        return $this->belongsTo(Location::class);
    }
}
