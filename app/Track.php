<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Helper\DataViewer;
class Track extends Model
{
    use DataViewer, RecordActivity;
    protected $fillable = ['check', 'type'];
    public static $columns =  [
        [
            'id' => 'check',
            'name' => 'Check'
        ],
        [
            'id' => 'type',
            'name' => 'TYPE'
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
    public function supply()
    {
        return $this->belongsTo(Supply::class);
    }
}
