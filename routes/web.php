<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/assets/{path}', function ($path) {
    return response()->file(public_path('assets/' . $path));
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'checkRole', 'userStatus'])->name('dashboard');

Route::middleware('auth','checkRole', 'userStatus')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('jenis-cuci', \App\Http\Controllers\JenisCuciController::class);
    Route::post('jenic-cuci/{jenis_cuci}', [\App\Http\Controllers\JenisCuciController::class, 'updateImage'])->name('jenis-cuci-image.update');
    Route::resource('customers', \App\Http\Controllers\CustomerController::class);
    Route::resource('pegawai', \App\Http\Controllers\PegawaiController::class);
    ROute::put('pegawai-password/{pegawai}', [\App\Http\Controllers\Pegawai\PegawaiPasswordController::class, 'pegawaiUpdatePassword'])->name('pegawai-password.update');
    Route::resource('dana-keluar', \App\Http\Controllers\DanaKeluarController::class);
    Route::resource('belanja-kebutuhan', \App\Http\Controllers\BelanjaKebutuhanController::class);
});

require __DIR__ . '/auth.php';
