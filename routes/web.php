<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Guest/Welcome');
});

Route::get('/dashboard', function () {
    return Inertia::render('Authenthicated/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/update-profile', [ProfileController::class, 'show'])->name("profile.edit");
    Route::put('/update-profile/{id}', [ProfileController::class, 'update']);
    Route::get('/mobile-dashboard', [ProfileController::class, 'mobileMenu']);
    Route::get('/my-word', [ProfileController::class, 'myWord']);
});



require __DIR__ . '/auth.php';
require __DIR__ . '/word.php';
require __DIR__ . '/api.php';
