<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PageTarget extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'alert_message',
        'target_rule',
    ];

    public function targetRules()
    {
        return $this->hasMany(TargetRule::class, 'page_target_id', 'id')->orderBy('instruction');
    }
}
