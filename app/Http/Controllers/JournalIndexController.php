<?php

namespace App\Http\Controllers;

use App\Models\Baby;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JournalIndexController extends Controller
{

    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Baby $baby)
    {
        $journals = $baby->journals()->latest('date')->latest('updated_at')->with('baby')->paginate(3);

        return Inertia::render('Journals/JournalIndex', [
            'journals' => $journals,
            'baby' => $baby
        ]);
    }
}
