<?php
use Illuminate\Support\Facades\Route;

// Version 1
Route::prefix('v1')->group(function () {
    require __DIR__.'/apiv1.php';
});

// Version 2
Route::prefix('v2')->group(function () {
    require __DIR__.'/apiv2.php';
});