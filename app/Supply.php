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
            'id' => 'quantity',
            'name' => 'Quantity'
        ],
        [
            'id' => 'purchase_order',
            'name' => 'Purchase Order'
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
        'supply_id',
        'name',
        'disabled',
        'quantity',
        'purchase_order',
        'vat',
        'purchase_rate',
        'discount',
        'mrp_rate',
        'sale_rate',
        'reorder_point'
    ];
    /**
     * App\Post::find(1)->tracks;
     *insert - auth()->user()->tracks()->save(new Announcement($validateData));
     *update - auth()->user()->tracks()->where('id', id)->update($validateData);
     *delete - auth()->user()->tracks()->where('id', id)->delete();
     */
    public function tracks()
    {
        return $this->hasMany(Track::class);
    }
}
