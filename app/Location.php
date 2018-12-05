<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    protected $fillable = ['name', 'disabled', 'type'];
    public function receives()
    {
        return $this->hasMany(Receive::class);
    }
}
