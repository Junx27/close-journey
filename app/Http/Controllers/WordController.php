<?php

namespace App\Http\Controllers;

use App\Models\DataWord;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class WordController extends Controller
{
    //

    public function index()
    {
        $data = DataWord::with("user:id,name,image")->orderBy('created_at', 'desc')->get();
        return response()->json($data);
    }
    public function myWord()
    {
        $userId = Auth::id();

        $data = DataWord::with("user:id,name,image")->where('user_id', $userId)->orderBy('created_at', 'desc')->get();
        return response()->json($data);
    }
    public function show(String $id)
    {
        $data = DataWord::with("user:id,name,image")->findOrFail($id);
        return response()->json($data);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'word' => 'required',
            'sentence' => 'required',
            'category' => 'required',
            'like' => 'required',
            'bookmark' => 'required',
            'user_id' => 'required',
        ]);
        DataWord::create($validated);
        return Inertia::location("/dashboard");
    }
    public function update(Request $request, String $id)
    {
        $validated = $request->validate([
            'word' => 'required',
            'sentence' => 'required',
            'category' => 'required',

        ]);
        $word = DataWord::findOrFail($id);
        $word->update($validated);
        return Inertia::location("/dashboard");
    }
    public function destroy(String $id)
    {
        $word = DataWord::findOrFail($id);
        $word->delete();
        return Inertia::location("/dashboard");
    }

    public function storeLike(String $id)
    {
        $word = DataWord::findOrFail($id);
        $word->like += 1;
        $word->save();
        return Inertia::location("/dashboard");
    }

    public function storeBookmark(String $id)
    {
        $originalBook = DataWord::findOrFail($id);
        $originalBook->bookmark += 1;
        $originalBook->save();

        $userId = Auth::id();

        $validated = [
            'word' => $originalBook->word,
            'sentence' => $originalBook->sentence,
            'category' => $originalBook->category,
            'like' => 0,
            'bookmark' => 0,
            'user_id' => $userId,
        ];


        DataWord::create($validated);

        return Inertia::location("/dashboard");
    }
}
