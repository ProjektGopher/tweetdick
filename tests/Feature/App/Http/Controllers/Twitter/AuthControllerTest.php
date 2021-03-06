<?php

use App\Models\User;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;

beforeEach(fn() => $this->artisan('migrate:fresh'));

it('has twitter auth routes', function () {
    $this->assertTrue(Route::has('twitter.auth.redirect'));
    $this->assertTrue(Route::has('twitter.auth.callback'));
});

it('saves a new twitter user to the database, logs in, and redirects to the dashboard', function () {
    // $this->withoutExceptionHandling();

    Socialite::shouldReceive('driver->user')
        ->once()
        ->andReturn(twitter_login_fixture());

    $this->assertCount(0, User::all());
    $this->get(route('twitter.auth.callback'))
        ->assertRedirect(route('dashboard'));
    $this->assertCount(1, User::all());

    $this->expect(auth()->user()->twitter_id)->toBe(twitter_login_fixture()->id);
});

it('updates an existing twitter users token and info then logs in', function () {
    // $this->withoutExceptionHandling();

    // arrange
    User::factory()->create([
        'twitter_id' => twitter_login_fixture()->id,
    ]);
    Socialite::shouldReceive('driver->user')
        ->once()
        ->andReturn(twitter_login_fixture());

    // sanity checks
    $this->assertCount(1, User::all());
    $this->expect(User::first()->name)
        ->not()->toBe(twitter_login_fixture()->name);
    $this->expect(User::first()->twitter_token)
        ->not()->toBe(twitter_login_fixture()->token);

    // act
    $this->get(route('twitter.auth.callback'))
        ->assertRedirect(route('dashboard'));
    $this->assertCount(1, User::all());

    // assert
    $this->expect(auth()->user()->twitter_id)->toBe(twitter_login_fixture()->id);
    $this->expect(User::first()->name)
        ->toBe(twitter_login_fixture()->name);
    $this->expect(User::first()->twitter_token)
        ->toBe(twitter_login_fixture()->token);
});

it('merges accounts with the same email');

/*
|------------------------------
| Fixtures & Helpers
|------------------------------
*/

function twitter_login_fixture()
{
    return new class
    {
        public $id = "1488270859521253379";
        public $nickname = "tweetdick_app";
        public $name = "TweetDick";
        public $email = null;
        public $avatar = "http://pbs.twimg.com/profile_images/1488274774807568385/nn5ie3CC_normal.jpg";
        public $user = [
            "id_str" => "1488270859521253379",
            "entities" => [],
            "protected" => false,
            "followers_count" => 0,
            "friends_count" => 0,
            "listed_count" => 0,
            "created_at" => "Mon Jan 31 22:00:28 +0000 2022",
            "favourites_count" => 0,
            "utc_offset" => null,
            "time_zone" => null,
            "geo_enabled" => false,
            "verified" => false,
            "statuses_count" => 0,
            "lang" => null,
            "contributors_enabled" => false,
            "is_translator" => false,
            "is_translation_enabled" => false,
            "profile_background_color" => "F5F8FA",
            "profile_background_tile" => false,
            "profile_link_color" => "1DA1F2",
            "profile_sidebar_border_color" => "C0DEED",
            "profile_sidebar_fill_color" => "DDEEF6",
            "profile_text_color" => "333333",
            "profile_use_background_image" => true,
            "has_extended_profile" => true,
            "default_profile" => true,
            "default_profile_image" => false,
            "following" => false,
            "follow_request_sent" => false,
            "notifications" => false,
            "translator_type" => "none",
            "withheld_in_countries" => [],
            "suspended" => false,
            "needs_phone_verification" => false,
            "url" => "https://t.co/XMLV3TQy4J",
            "profile_background_image_url" => null,
            "profile_background_image_url_https" => null,
            "profile_image_url" => "http://pbs.twimg.com/profile_images/1488274774807568385/nn5ie3CC_normal.jpg",
            "profile_image_url_https" => "https://pbs.twimg.com/profile_images/1488274774807568385/nn5ie3CC_normal.jpg",
            "location" => "",
            "description" => "This app should not have had to exist. Sexual harrassment online should have consequences, and there are too few tools to help women and non-males to feel safe.",
        ];
        public $token = "1488270859521253379-EpGUVgnEZT5B0NqTQhPwudtsi4sYuw";
        public $tokenSecret = "lz1qRlQlOIeKzbtwnlSsBgnoE7KB7zIrBrXyfMA0UauKT";
        public $avatar_original = "http://pbs.twimg.com/profile_images/1488274774807568385/nn5ie3CC.jpg";
    };
}
