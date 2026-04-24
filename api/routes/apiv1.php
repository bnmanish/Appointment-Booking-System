<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\LoginController;


Route::post('/login', [LoginController::class, 'login']);
