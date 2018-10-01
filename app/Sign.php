<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sign extends Model
{
    protected $fillable = ['file'];
    public function request()
    {
        return $this->belongsTo(Request::class);
    }
}
