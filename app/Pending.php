<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Helper\DataViewer;
class Pending extends Model
{
    use DataViewer;
    protected $fillable = [
        'user_id',
        'type',
        'subject_id',
        'subject_type',
    ];
    public static $columns =  [
        [
            'id' => 'id',
            'name' => 'ID'
        ],
        [
            'id' => 'type',
            'name' => 'Type'
        ],
    ];
    public function subject()
    {
        return $this->morphTo();
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
