<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Requisition extends Model
{
    protected $fillable = ['office', 'code', 'responsibilities', 'location_id' , 'division_id', 'source_id'];
    public function supplies()
    {
        return $this->belongsToMany(Supply::class);
    }

    public function source()
    {
        return $this->belongsTo(Source::class);
    }
public function location()
    {
        return $this->belongsTo(Location::class);
    }

    public function division()
    {
        return $this->belongsTo(Division::class);
    }
}
