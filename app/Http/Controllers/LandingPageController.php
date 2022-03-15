<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class LandingPageController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        return Inertia::render('Landing/Index', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }
}
