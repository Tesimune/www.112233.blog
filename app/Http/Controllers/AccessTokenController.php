<?php

namespace App\Http\Controllers;

use App\Models\AccessTokens;
use Illuminate\Http\Request;

class AccessTokenController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $response = [
            'access' => AccessTokens::all()
        ];

        return response()->json($response);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $validated = $request->validate([
            'twitter_id' => [],
            'accessToken' => [],
            'refreshToken' => [],
            'userObject' => [],
            'expiresIn' => [],
        ]);

        AccessTokens::updateOrCreate([
            'twitter_id' => $validated['twitter_id'],
        ], [
            'accessToken' => $validated['accessToken'],
            'refreshToken' => $validated['refreshToken'],
            'userObject' => $validated['userObject'],
            'expiresIn' => $validated['expiresIn'],
        ]);
    
        // Optionally, you can return a response indicating success or failure
        return response()->json(['message' => 'Tokens updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
