<?php

use App\Http\Controllers\BabyController;
use App\Http\Controllers\JournalController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    if(Auth::check()){
        return redirect(route('babies.index'));
    }

    return Inertia::render('Welcome');
})->name('home');

Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/babies/{baby}/journals', \App\Http\Controllers\JournalIndexController::class)
    ->name('babies.journals.index')
    ->middleware('can:delete,baby');

Route::resource('babies', BabyController::class)
    ->only(['index', 'store', 'show', 'edit', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);

Route::get('/babies/{baby}/journals/search', [JournalController::class, 'search'])->name('babies.journals.search');

Route::resource('babies.journals', JournalController::class)
    ->only(['create', 'show', 'update', 'edit', 'destroy', 'store',])
    ->middleware(['auth', 'verified']);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
