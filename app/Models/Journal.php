<?php

namespace App\Models;

use App\Events\JournalCreated;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Journal extends Model
{
    protected $fillable = [
        'date',
        'entry',
        'image'
    ];

    protected $dispatchesEvents = [
        'created' => JournalCreated::class,
    ];

    public function baby(): BelongsTo
    {
        return $this->belongsTo(Baby::class);
    }

}
