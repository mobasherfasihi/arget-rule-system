<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\PageTargetController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::namespace('Api')->group(function () {
    Route::group(['prefix' => 'auth'], function () {
        Route::post('login', [AuthController::class, 'login']);
        Route::prefix('user')->group(function() {
            Route::post('register', [AuthController::class, 'register']);
        });
    });
    Route::prefix('page-target')->middleware('auth')->group(function() {
        Route::get('', [PageTargetController::class, 'index']);
    });
});
