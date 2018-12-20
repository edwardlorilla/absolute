<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laratrust\Traits\LaratrustUserTrait;
use Laravel\Passport\HasApiTokens;
use App\Helper\DataViewer;

class User extends Authenticatable
{

    use DataViewer;
    use LaratrustUserTrait;
    use HasApiTokens, Notifiable;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    public function requests()
    {
        return $this->hasMany(Request::class);
    }
    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
    protected $fillable = [
        'name', 'email', 'password','photo_id', 'address', 'phone', 'file'
    ];

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
            'id' => 'email',
            'name' => 'Email'
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
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function division ()
    {
        return $this->hasOne(Division::class);
    }
    public function photo()
    {
        return $this->belongsTo(Photo::class);
    }
}
