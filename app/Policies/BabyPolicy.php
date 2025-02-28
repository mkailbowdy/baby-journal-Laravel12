<?php

namespace App\Policies;

use App\Models\Baby;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class BabyPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return false;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Baby $baby): bool
    {
        if ($user->id === $baby->user_id){
            return true;
        }
        return false;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        if($user->id === auth()->user()->id){
            return true;
        }
        return false;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Baby $baby): bool
    {
        return $this->view($user, $baby);

    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Baby $baby): bool
    {
        return $this->view($user, $baby);
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Baby $baby): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Baby $baby): bool
    {
        return false;
    }
}
