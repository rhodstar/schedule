<?php

namespace HorarioFI;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }
}
