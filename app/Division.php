<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Helper\DataViewer;
class Division extends Model
{
    use DataViewer;
    protected $fillable = ['name', 'user_id', 'station'];
    public static $columns =  [

        [
            'id' => 'id',
            'name' => 'ID'
        ],
        [
            'id' => 'name',
            'name' => 'Code'
        ],
        [
            'id' => 'station',
            'name' => 'Station'
        ],
        [
            'id' => 'user.name',
            'name' => 'Head Of Office'
        ],
    ];

    public function requests()
    {
        return $this->hasMany(Request::class);
    }
    public function receipts()
    {
        return $this->hasMany(Receiptment::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}