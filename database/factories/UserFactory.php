<?php

namespace Database\Factories;

use App\Models\Team;
use App\Models\User;
use App\Models\AccountType;
use Illuminate\Support\Str;
use Laravel\Jetstream\Features;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }

    /**
     * Indicate that the user should have a personal team.
     *
     * @return $this
     */
    public function withPersonalTeam()
    {
        if (! Features::hasTeamFeatures()) {
            return $this->state([]);
        }

        return $this->has(
            Team::factory()
                ->state(function (array $attributes, User $user) {
                    return ['name' => $user->name.'\'s Team', 'user_id' => $user->id, 'personal_team' => true];
                }),
            'ownedTeams'
        );
    }

    /**
     * Indicate that the should have their twitter fields filled.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function withTwitter()
    {
        return $this->state(function (array $attributes) {
            return [
                'twitter_id' => null,
                'twitter_nickname' => $this->faker->unique()->username(),
                'twitter_avatar' => null,
                'twitter_token' => Str::random(32),
            ];
        });
    }

    public function withFreeAccount()
    {
        return $this->state(function (array $attributes) {
            return [
                'account_type' => AccountType::FREE,
            ];
        });
    }

    public function withPaidAccount()
    {
        return $this->state(function (array $attributes) {
            return [
                'account_type' => AccountType::PAID,
            ];
        });
    }

    public function withSponsorAccount()
    {
        return $this->state(function (array $attributes) {
            return [
                'account_type' => AccountType::SPONSOR,
            ];
        });
    }

    public function withAdminAccount()
    {
        return $this->state(function (array $attributes) {
            return [
                'account_type' => AccountType::ADMIN,
            ];
        });
    }
}
