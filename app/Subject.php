<?php

namespace HorarioFI;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    public function groups()
    {
        return $this->hasMany(Group::class);
    }
}
