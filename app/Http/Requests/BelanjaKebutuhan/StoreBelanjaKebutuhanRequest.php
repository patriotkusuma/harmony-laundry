<?php

namespace App\Http\Requests\BelanjaKebutuhan;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreBelanjaKebutuhanRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'nama'  => 'required',
            'harga' => 'required',
            'qty'   => 'required',
            'satuan' => 'required|in:kilo,liter,satuan',
            'harga' => 'required',
        ];
    }
}