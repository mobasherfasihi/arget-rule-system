<?php

namespace App\Traits;

use App\Models\TargetRule;
use App\User;

trait TargetRuleTrait
{

    /**
     * Create Business User
     *
     * @param array $ruleData
     * @param int $pageTargetID
     * @return void
     */
    public function createTargetRule(array $ruleData, int $pageTargetID) :void
    {
        $data  = [];
        // $dataArray = array_column($ruleData, 'instruction');
        // array_multisort($dataArray, SORT_ASC, $ruleData);
        foreach($ruleData as $row) {
            $data[] = [
                'instruction' => $row['instruction'],
                'rule' => $row['rule'],
                'pattern' => $row['pattern'],
                'regex_pattern' => $this->regexPattern($row),
                'page_target_id' => $pageTargetID
            ];
        }

        TargetRule::insert($data);
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
