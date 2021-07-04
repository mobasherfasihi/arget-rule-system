<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

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

    public function setPageRuleRegex() {
        $ruleRegexPatterns = $this->targetRules()->select(DB::raw('group_concat(regex_pattern SEPARATOR "|") as regex_pattern'))->groupBy('instruction')->get();

        $target_rule = '';
        foreach($ruleRegexPatterns as $row) {
            $target_rule .= $row['regex_pattern'];
        }

        $this->target_rule = '('.$target_rule.').*';
        $this->save();
    }
}
