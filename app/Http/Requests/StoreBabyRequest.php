<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBabyRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => 'required|string',
            'birthday' => 'nullable|date|after:1 January 2000',
            'allergies' => 'nullable|string',
            'vaccinations' => 'nullable|string',
            'likes' => 'nullable|string',
            'dislikes' => 'nullable|string',
        ];
    }
}
