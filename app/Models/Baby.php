<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Baby extends Model
{
    protected $fillable = [
        'user_id',
        'first_name',
        'birthday',
        'vaccinations',
        'allergies',
        'likes',
        'dislikes'
    ];

    public function journals(): HasMany
    {
        return $this->hasMany(Journal::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
