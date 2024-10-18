<?php

use App\Http\Controllers\WordController;
use Illuminate\Support\Facades\Route;



Route::middleware('auth')->group(function () {
    Route::post("/create-word", [WordController::class, 'store']);
    Route::put("/update-word/{id}", [WordController::class, 'update']);
    Route::delete("/delete-word/{id}", [WordController::class, 'destroy']);
    Route::post("/update-word-like/{id}", [WordController::class, 'storeLike']);
    Route::post("/update-word-bookmark/{id}", [WordController::class, 'storeBookmark']);
});
