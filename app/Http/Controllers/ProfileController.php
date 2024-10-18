<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function update(Request $request, String $id)
    {
        $validated = $request->validate([
            'name' => "required",
            "image" => "required"
        ]);

        $user = User::findOrFail($id);
        $user->update($validated);
        return Inertia::location("/dashboard");
    }
    public function show()
    {
        return Inertia::render("Auth/Edit");
    }

    public function user(String $id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }


    public function mobileMenu()
    {
        return Inertia::render("Authenthicated/Layouts/MobileMenu");
    }
    public function myWord()
    {
        return Inertia::render("Authenthicated/Layouts/MyWordMobile");
    }
}
