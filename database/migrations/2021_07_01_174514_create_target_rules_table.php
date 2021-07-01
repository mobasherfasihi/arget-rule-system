<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTargetRulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('target_rules', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('page_target_id');
            $table->foreign('page_target_id')->references('id')->on('page_targets');
            $table->enum('instruction', ['show', 'not_show']);
            $table->enum('rule', ['contains', 'specific_page', 'starting_with', 'ending_with']);
            $table->string('pattern');
            $table->string('regex_pattern');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('target_rules');
    }
}
