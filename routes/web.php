<?php

use Inertia\Inertia;
use App\Models\AccountType;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\Twitter\AuthController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', LandingPageController::class)
    ->middleware(['guest'])
    ->name('landing');

Route::get('/register/as/{type}', function (AccountType $type) {
    session(['account_type' => $type]);
    return redirect()->route('twitter.auth.redirect');
})->middleware(['guest'])->name('register.as');

Route::get('/dashboard', DashboardController::class)
    ->middleware(['auth:sanctum', 'verified'])
    ->name('dashboard');


/*
|--------------------------------------------------------------------------
| Authentication
|--------------------------------------------------------------------------
*/

Route::get('/twitter/auth/redirect', [AuthController::class, 'redirect'])->name('twitter.auth.redirect');
Route::get('/twitter/auth/callback', [AuthController::class, 'callback'])->name('twitter.auth.callback');
