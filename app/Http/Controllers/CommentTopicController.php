<?php

namespace App\Http\Controllers;

use App\Models\CommentTopic;
use Illuminate\Http\Request;

class CommentTopicController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index(Request $request)
    {
        // Read the $twitter_id from the query parameters
        $twitter_id = $request->input('twitter_id');

        // Query the CommentTopic model using the $twitter_id
        $topics = CommentTopic::where('twitter_id', $twitter_id)->latest()->get();

        // Prepare the response
        $response = [
            'topics' => $topics,
        ];

        // Return the response as JSON
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
        $validated = $request->validate([
            'topic' => ['required', 'string', 'min:5', 'max:50'],
            'tone' => ['required', 'string', 'min:5', 'max:500'],
        ]);
        
        $validated["twitter_id"] = auth()->user()->twitter_id;

        CommentTopic::updateOrCreate([
            'twitter_id' => $validated['twitter_id'],
        ], [
            'topic' => $validated['topic'],
            'tone' => $validated['tone'],
        ]);
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
