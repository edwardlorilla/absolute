<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Helper\DataViewer;
class Request extends Model
{
    use DataViewer, RecordActivity;
    public static $columns =  [
        [
            'id' => 'id',
            'name' => 'ID'
        ],

        [
            'id' => 'division.name',
            'name' => 'Division Station'
        ],[
            'id' => 'request_date',
            'name' => 'Request Date'
        ],
        [
            'id' => 'request_year_code',
            'name' => 'Request Year Code'
        ],[
            'id' => 'created_at',
            'name' => 'Create at'
        ],
        [
            'id' => 'updated_at',
            'name' => 'Updated at'
        ]
    ];
    protected $fillable = ['division_id',  'remark','request_date','request_year_code'];

    public function transactions(){
        return $this->belongsToMany(Transaction::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function division(){
        return $this->belongsTo(Division::class);
    }

}
