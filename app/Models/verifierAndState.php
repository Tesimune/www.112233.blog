<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class verifierAndState extends Model
{
    use HasFactory;
    protected $fillable = [
        'state',
        'codeVerifier',
        'uid'
    ];
}
