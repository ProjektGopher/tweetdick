<?php

namespace App\Http\Controllers\Twitter;

use App\Models\User;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
    public function redirect()
    {
        return Socialite::driver('twitter')->redirect();
    }

    public function callback()
    {
        $twitter_user = Socialite::driver('twitter')->user();

        $user = User::updateOrCreate(
            [
                'twitter_id' => $twitter_user->id,
            ],
            [
                'name' => $twitter_user->name,
                'email' => $twitter_user->email,
                'password' => Hash::make(Str::random(16)),
                'twitter_nickname' => $twitter_user->nickname,
                'twitter_avatar' => $twitter_user->avatar,
                'twitter_token' => $twitter_user->token,
            ]
        );

        auth()->login($user);

        return redirect('/dashboard');
    }
}
