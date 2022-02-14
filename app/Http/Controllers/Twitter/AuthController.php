<?php

namespace App\Http\Controllers\Twitter;

use App\Models\User;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller {
    public function redirect() {
      return Socialite::driver('twitter')->redirect();
    }

    public function callback() {
      $twitter_user = Socialite::driver('twitter')->user();
  
      $user = User::where('twitter_id', $twitter_user->id)->first();
   
      if ($user) {
          $user->update([
              'twitter_token' => $twitter_user->token,
          ]);
      } else {
          $user = User::create([
              'name' => $twitter_user->name,
              'email' => $twitter_user->email,
              'password' => Hash::make(Str::random(16)),
              'twitter_id' => $twitter_user->id,
              'twitter_nickname' => $twitter_user->nickname,
              'twitter_avatar' => $twitter_user->avatar,
              'twitter_token' => $twitter_user->token,
          ]);
      }
   
      auth()->login($user);
   
      return redirect('/dashboard');
    }
}

// ^ Laravel\Socialite\One\User {#428 ▼
//     +id: "1488270859521253379"
//     +nickname: "tweetdick_app"
//     +name: "TweetDick"
//     +email: null
//     +avatar: "http://pbs.twimg.com/profile_images/1488274774807568385/nn5ie3CC_normal.jpg"
//     +user: array:41 [▼
//       "id_str" => "1488270859521253379"
//       "entities" => array:2 [▶]
//       "protected" => false
//       "followers_count" => 0
//       "friends_count" => 0
//       "listed_count" => 0
//       "created_at" => "Mon Jan 31 22:00:28 +0000 2022"
//       "favourites_count" => 0
//       "utc_offset" => null
//       "time_zone" => null
//       "geo_enabled" => false
//       "verified" => false
//       "statuses_count" => 0
//       "lang" => null
//       "contributors_enabled" => false
//       "is_translator" => false
//       "is_translation_enabled" => false
//       "profile_background_color" => "F5F8FA"
//       "profile_background_tile" => false
//       "profile_link_color" => "1DA1F2"
//       "profile_sidebar_border_color" => "C0DEED"
//       "profile_sidebar_fill_color" => "DDEEF6"
//       "profile_text_color" => "333333"
//       "profile_use_background_image" => true
//       "has_extended_profile" => true
//       "default_profile" => true
//       "default_profile_image" => false
//       "following" => false
//       "follow_request_sent" => false
//       "notifications" => false
//       "translator_type" => "none"
//       "withheld_in_countries" => []
//       "suspended" => false
//       "needs_phone_verification" => false
//       "url" => "https://t.co/XMLV3TQy4J"
//       "profile_background_image_url" => null
//       "profile_background_image_url_https" => null
//       "profile_image_url" => "http://pbs.twimg.com/profile_images/1488274774807568385/nn5ie3CC_normal.jpg"
//       "profile_image_url_https" => "https://pbs.twimg.com/profile_images/1488274774807568385/nn5ie3CC_normal.jpg"
//       "location" => ""
//       "description" => "This app should not have had to exist. Sexual harrassment online should have consequences, and there are too few tools to help women and non-males to feel safe."
//     ]
//     +token: "1488270859521253379-EpGUVgnEZT5B0NqTQhPwudtsi4sYuw"
//     +tokenSecret: "lz1qRlQlOIeKzbtwnlSsBgnoE7KB7zIrBrXyfMA0UauKT"
//     +"avatar_original": "http://pbs.twimg.com/profile_images/1488274774807568385/nn5ie3CC.jpg"
//   }