<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccessTokens extends Model
{
    use HasFactory;
    protected $fillable = [
        'twitter_id',
        'accessToken',
        'refreshToken',
        'userObject',
        'expiresIn'
    ];

    protected $casts = [
        'userObject' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo('User', 'twitter_id');
    }
}
