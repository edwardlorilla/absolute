<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Helper\DataViewer;
class Supply extends Model
{
    use DataViewer, RecordActivity;
    public static $columns =  [
        [
            'id' => 'id',
            'name' => 'ID'
        ],
        [
            'id' => 'name',
            'name' => 'Name'
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
    public $fillable = [
        'name',
        'type',
        'description',
        'completed',
        'disabled',
        'reorder_point'
    ];
    protected $appends = ['quantity'];
    public function getQuantityAttribute()
    {
        $supply_transactions =  $this->tracks()->get();
        return $supply_transactions->reduce(function ($sum, $transaction) {
            return  $transaction->completed ?  $transaction->type? $sum += $transaction->check : $sum -= $transaction->check : $sum;
        }, 0);
    }
    public function pending()
    {
        return $this->morphMany(Pending::class, 'subject');
    }
    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }
    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }

    public function tracks()
    {
        return $this->hasMany(Track::class);
    }
    public function requisitions()
    {
        return $this->belongsToMany(Requisitions::class);
    }
    public function orders()
    {
        return $this->morphMany(Order::class, 'subject');
    }
}
