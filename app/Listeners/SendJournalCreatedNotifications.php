<?php

namespace App\Listeners;

use App\Events\JournalCreated;
use App\Models\User;
use App\Notifications\NewJournal;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendJournalCreatedNotifications implements ShouldQueue
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(JournalCreated $event): void
    {
        foreach(User::whereNot('id', $event->journal->user_id)->cursor() as $user){
            $user->notify(new NewJournal($event->journal));
        }
    }
}
