<?php

namespace App\Traits;

use App\Models\PageTarget;
use App\Models\TargetRule;
use App\User;

trait TargetRuleTrait
{

    /**
     * Create Target Rules
     *
     * @param array $ruleData
     * @param \App\Models\PageTarget $pageTarget
     * @return void
     */
    public function createTargetRule(array $ruleData, PageTarget $pageTarget) :void
    {
        $data  = [];

        foreach($ruleData as $row) {
            $targetRule = new TargetRule();
            $targetRule->instruction = $row['instruction'];
            $targetRule->rule = $row['rule'];
            $targetRule->pattern = $row['pattern'];
            $targetRule->regex_pattern = $this->regexPattern($row);

            array_push($data, $targetRule);
        }

        $pageTarget->targetRules()->delete();
        $pageTarget->targetRules()->saveMany($data);
    }

    /**
     * Prepare regex pattern based on instruction, rule and pattern string
     *
     * @return string $regexStr
     */
    private function regexPattern($data)
    {
        $instruction = match ($data['instruction']) {
            'show' => '=',
            'not_show' => '!'
        };

        $data['pattern'] = str_replace('/', '\/', $data['pattern']);

        $regStr = match ($data['rule']) {
            'contains' => '(?'.$instruction.'.*'.$data['pattern'].'.*)',
            'specific_page' => match($instruction) {
                '!' => '^(?!'.$data['pattern'].')',
                '=' => '(?='.$data['pattern'].')'
            },
            'starting_with' => '^(?'.$instruction.$data['pattern'].')',
            'ending_with' => '(?'.$instruction.$data['pattern'].'$)'
        };

        return $regStr;
    }
}
