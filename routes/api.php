<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WordController;
use Illuminate\Support\Facades\Route;

Route::get("/api/words", [WordController::class, "index"]);
Route::get("/api/myWords", [WordController::class, "myWord"]);
Route::get("/api/word/{id}", [WordController::class, "show"]);
Route::get("/api/user/{id}", [ProfileController::class, "user"]);
