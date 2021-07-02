<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PageTargetRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => [
                'required', 'string', 'min:3'
            ],
            'alert_message' =>  [
                'required', 'string', 'min:5'
            ],
            'target_rules' => [
                'required', 'array', 'min:1',
            ],
            'target_rules.*.instruction' => [
                'required', 'string', 'in:show,not_show'
            ],
            'target_rules.*.rule' => [
                'required', 'string', 'in:contains,specific_page,starting_with,ending_with'
            ],
            'target_rules.*.pattern' => [
                'required', 'string', 'min:1'
            ]
        ];
    }
}
