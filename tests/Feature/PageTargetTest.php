<?php

namespace Tests\Feature;

use App\Models\PageTarget;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\Feature\Helpers\ActingJwtUser;
use Tests\Feature\Helpers\CreateApplicationUser;
use Tests\TestCase;

class PageTargetTest extends TestCase
{
    use ActingJwtUser;
    use CreateApplicationUser;
    use WithFaker;
    use RefreshDatabase;

    private $user;
    private $pageTargets = [];

    public function setUp(): void
    {
        parent::setUp();
        $this->user = $this->createUser();
        $this->pageTargets = PageTarget::factory()->count(14)->create();
    }

    /**@test */
    public function test_should_list_page_targets()
    {
        $response = $this->jsonAs($this->user, 'GET', 'api/page-target');
        $response->assertOk();
        $response->assertJsonCount(10, 'data');
    }

    /**@test */
    public function test_should_not_allow_unauthenticated_user_to_list_page_targets()
    {
        $response = $this->json('GET', 'api/page-target');
        $response->assertStatus(401);
    }
}
