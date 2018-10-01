<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class permission_role extends model
{
    public function permission()
    {
        return $this->hasMany('App\Permission');
    }
}
