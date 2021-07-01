<?php

namespace Database\Factories;

use App\Models\PageTarget;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Foundation\Testing\WithFaker;

class PageTargetFactory extends Factory
{
    use WithFaker;
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PageTarget::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker()->word(),
            'alert_message' => 'Welcome to the Page Targeting System.'
        ];
    }
}
