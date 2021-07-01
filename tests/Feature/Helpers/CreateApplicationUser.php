<?php

namespace Tests\Feature\Helpers;

use App\Models\User;

trait CreateApplicationUser
{
    public function createUser() {
        $user = User::factory()->create();
        return $user;
    }

    protected function runSeeders() {}
}
