<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;
use Symfony\Component\HttpFoundation\RedirectResponse;

class OAuthController extends Controller
{
    public function redirect(): RedirectResponse
    {
        return Socialite::driver('twitter-oauth-2')
            ->with(['authorize' => [
            ['tweet:read', 'tweet:write', 'users:read', 'offline:access']
            ]])
            ->redirect();
    }

    public function callback(): RedirectResponse
    {
        $oAuthUser = Socialite::driver('twitter-oauth-2')->user();

        // dd($oAuthUser);
        $user = User::updateOrCreate([
            'twitter_id' => $oAuthUser->getId(),
        ], [
            'name' => $oAuthUser->getName(),
            'email' => $oAuthUser->getEmail(),
            'password' => Hash::make(Str::random(50)),
            'username' => $oAuthUser->nickname,
            'avatar' => $oAuthUser->getAvatar(),
            'twitter_token' => $oAuthUser->token,
            'twitter_refresh_token' => $oAuthUser->refreshToken,
        ]);

        Auth::login($user);

        

        return redirect()->route('dashboard');
    }
}