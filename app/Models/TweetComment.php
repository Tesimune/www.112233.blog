<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TweetComment extends Model
{
    use HasFactory;
    protected $fillable = [
        'twitter_id',
        'commentPost',
        'tweet',
    ];

    protected $casts = [
        'tweet' => 'array',
    ];
    
    public function user() {
        return $this->belongsTo('User','uid');
    }
}
