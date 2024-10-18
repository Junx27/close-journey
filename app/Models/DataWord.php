<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DataWord extends Model
{
    //

    protected $fillable = [
        'word',
        'sentence',
        'category',
        'like',
        'bookmark',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
