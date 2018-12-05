<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Purchaseorder extends Model
{
    protected $fillable = ['po_number', 'pr_number', 'source_id', 'date_delivered'];

    public function source()
    {
        return $this->belongsTo(Source::class);
    }
}
