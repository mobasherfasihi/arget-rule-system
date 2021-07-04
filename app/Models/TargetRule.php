<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TargetRule extends Model
{
    use HasFactory;


    public function pageTarget()
    {
        return  $this->belongsTo(PageTarget::class, 'page_target_id',  'id');
    }
}
