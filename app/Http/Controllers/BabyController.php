<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBabyRequest;
use App\Models\Baby;
use App\Models\Journal;
use Illuminate\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class BabyController extends Controller
{
    public function index(): Response
    {
        // Here we've used Eloquent's with method to eager-load every Journal's associated user's ID and name. We've also used the latest scope to return the records in reverse-chronological order.
        return Inertia::render('Babies/BabyIndex', [
            'babies' => Baby::with('user:id,name')->where('user_id', auth()->id())->latest()->get(),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Baby $baby)
    {
        Gate::authorize('view', $baby);
        return Inertia::render('Babies/BabyDetails', [
            'baby' => $baby->only(
                'id',
                'user_id',
                'first_name',
                'birthday',
                'allergies',
                'vaccinations',
                'likes',
                'dislikes',
            ),
        ]);
    }

    public function store(StoreBabyRequest $request): RedirectResponse
    {
        Gate::authorize('create', Baby::class);
        $validated = $request->validated();
        $baby = $request->user()->babies()->create($validated);

        Log::info('Baby created with data: ', $baby->toArray()); // Debugging

        return redirect(route('babies.index'));
    }
    /**
     * Display the user's profile form.
     */
//    public function edit(Request $request, Baby $baby)
//    {
//        return response('hello world', 200)->withHeaders([
//            'Content-Type' => 'text/html',
//            'X-Header-One' => 'poop',
//            'X-Header-Two' => 'brown',
//        ])->cookie('ahoy', 'chocolate', );
//    }


    /**
     * Update the specified resource in storage.
     */
    public function update(StoreBabyRequest $request, Baby $baby): RedirectResponse
    {
        Gate::authorize('update', $baby);
        $validated = $request->validated();
        $baby->update($validated);
        return redirect(route('babies.show', $baby));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Baby $baby): RedirectResponse
    {
        Gate::authorize('delete', $baby);
        $baby->delete();
        return redirect(route('babies.index'));
    }
}
