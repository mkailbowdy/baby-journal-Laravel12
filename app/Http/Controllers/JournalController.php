<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreJournalRequest;
use App\Models\Baby;
use App\Models\Journal;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class JournalController extends Controller
{
//    public function index(Baby $baby): Response
//    {
//        // Eager load the journals relationship with any nested relationships (e.g., 'journals.baby')
//        $journals = $baby->journals()->latest()->with('baby')->get();
////        $journals = $baby->journals()->latest()->with('baby')->paginate(1);
//
//        return Inertia::render('Journals/JournalIndex', [
//            'journals' => $journals,
//            'baby' => $baby,
//        ]);
//    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Baby $baby): Response
    {
        $journal = $baby->journals()->latest()->with('baby')->first();
        return Inertia::render('Journals/JournalCreate', [
            'baby' => $baby,
            'journal' => $journal,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreJournalRequest $request, Baby $baby): RedirectResponse
    {
        $validated = $request->validated();

        // Store the file in the storage/app/public/images directory
        if($request->hasFile('image')){
            // store the image into our file disk at storage/app/public/images and set the path as a string to $imagePath
            $imagePath = $request->file('image')->store('images', 'public');
            // Add the image path to the validated data
            $validated['image'] = $imagePath;
            Log::info('Image saved to path: ' . $imagePath); // Debugging
        }
        $journal = $baby->journals()->create($validated);
        return redirect(route('babies.journals.index', $baby, $journal));
    }

    /**
     * Display the specified resource.
     */
    public function show(Journal $journal)
    {
        return Inertia::render('Journals/Show1', [
            'journal' => $journal->only(
                'id',
                'date',
                'entry',
                'image',
            ),
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Baby $baby, Journal $journal)
    {
        Gate::authorize('update', $baby);
        return Inertia::render('Journals/JournalEditForm',[
            'baby' => $baby,
            'journal' => $journal,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreJournalRequest $request, Baby $baby, Journal $journal): RedirectResponse
    {
        Gate::authorize('update', $baby);
        // Ensure the journal belongs to the baby
        if ($journal->baby_id !== $baby->id) {
            abort(404); // Or throw a custom authorization/validation exception
        }
        Gate::authorize('update', $journal);
        $validated = $request->validated();
        $journal->update($validated);
        return redirect(route('babies.journals.index', $baby));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Baby $baby, Journal $journal): RedirectResponse
    {
        Gate::authorize('delete', $journal);
        $journal->delete();
        return redirect(route('babies.journals.index', $baby));
    }

    public function search(Baby $baby)
    {
        Gate::authorize('view', $baby);
        $journals = $baby->journals()->with('baby')->latest()->get();
        return Inertia::render('Journals/JournalLookup', ['baby' => $baby, 'journals' => $journals]);
    }
}
