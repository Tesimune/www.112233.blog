<?php

use App\Http\Controllers\AccessTokenController;
use App\Http\Controllers\CommentTopicController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TweetCommentController;
use App\Http\Controllers\VerifierAndStateController;
use App\Models\CommentTopic;
use App\Models\TweetComment;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $user = auth()->user()->twitter_id;
    return Inertia::render('Dashboard/Index', [
        'authURL' => env('AUTH_URL'),
        'topics' => CommentTopic::where('twitter_id', $user)->latest()->get(),
        'comments' => TweetComment::where('twitter_id', $user)->latest()->get(),
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::post('/verifier', [VerifierAndStateController::class, 'store']);
Route::get( '/verifier', [VerifierAndStateController::class, 'index']);
Route::get('/verifier/{verifierAndState:state}', [VerifierAndStateController::class, 'show']);

Route::get('/access', [AccessTokenController::class, 'index']);
Route::post('/access', [AccessTokenController::class, 'update']);

Route::post('/commentTopic', [CommentTopicController::class, 'store'])->name('topic.store');
Route::get('/commentTopic', [CommentTopicController::class, 'index']);

Route::post('/commentPost', [TweetCommentController::class, 'store']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
