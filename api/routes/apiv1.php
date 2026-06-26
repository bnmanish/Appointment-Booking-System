<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\LoginController;


Route::post('/login', [LoginController::class, 'login']);
Route::post('/signup', [LoginController::class, 'signup']);
Route::post('/verify-otp', [LoginController::class, 'verifyOtp']);


