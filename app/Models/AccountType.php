<?php

namespace App\Models;

enum AccountType: string
{
    case FREE = 'free';
    case PAID = 'paid';
    case SPONSOR = 'sponsor';
    case ADMIN = 'admin';
    case DEVELOPER = 'developer';

}