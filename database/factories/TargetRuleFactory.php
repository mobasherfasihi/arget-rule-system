<?php

namespace Database\Factories;

use App\Models\PageTarget;
use App\Models\TargetRule;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Foundation\Testing\WithFaker;

class TargetRuleFactory extends Factory
{
    use WithFaker;
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = TargetRule::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'page_target_id' => PageTarget::factory()->create()->id,
            'instruction' => $this->faker()->randomElement([
                'show', 'not_show'
            ]),
            'rule' => $this->faker()->randomElement([
                'contains', 'specific_page', 'starting_with', 'ending_with'
            ]),
            'pattern' => $this->faker()->randomElement([
                'com', 'af', 'test', 'domain'
            ]),
            'regex_pattern' => $this->faker()->randomElement([
                '(?=.*abc.*)',
                '(?=.*klm.*)',
                '(?=www\.netlinks\.net)',
                '(?!.*abc\/def)',
                '(?!.*abc\/xyz).*'
            ])
        ];
    }
}
