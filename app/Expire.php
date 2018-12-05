<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expire extends Model
{
    protected $fillable = ['product_id', 'expiry_date', 'transaction_id'];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
    public function transaction()
    {
        return $this->belongsTo(Transaction::class);
    }
}
