<?php

use App\Models\AccountType;

test('canRegister() returns false on type of admin', function () {
    expect(AccountType::ADMIN->canRegister())->toBeFalse();
});

test('canRegister() returns true on type of anything other than admin', function () {
    expect(AccountType::FREE->canRegister())->toBeTrue();
});
