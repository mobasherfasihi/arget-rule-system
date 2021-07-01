<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PageTarget extends Model
{
    use HasFactory;

    public function rules()
    {
        return $this->hasMany(TargetRule::class, 'page_target_id', 'id');
    }
}
