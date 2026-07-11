<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\LoginController;
use App\Http\Controllers\api\MeetingChannelController;


Route::post('/login', [LoginController::class, 'login']);
Route::post('/signup', [LoginController::class, 'signup']);


Route::middleware('auth:sanctum')->group(function () {
    Route::post('/verify-otp', [LoginController::class, 'verifyOtp']);
    Route::post('/update-meeting-channel', [MeetingChannelController::class, 'updateMeetingChannel']);
    Route::post('/get-meeting-channel-by-email', [MeetingChannelController::class, 'getMeetingChannelByEmail']);

    Route::post('/get-user-meeting-channel', [MeetingChannelController::class, 'getUserMeetingChannel']);

});



