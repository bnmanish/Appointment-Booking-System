<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Services\MailService;


class LoginController extends Controller
{
    public function login(Request $request)
    {
        // Validate request
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        // Find user
        $user = User::where('email', $request->email)->first();

        // Check user & password
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'status' => false,
                'message' => 'Invalid credentials'
            ], 401);
        }

        // 🔑 Generate token
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'status' => true,
            'message' => 'Login successful',
            'token' => $token,
            'user' => $user
        ]);
    }

    public function signup(Request $request, MailService $mailService)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required'
        ]);
        $user = User::where('email', $request->email)->first();
        if ($user) {
            $status = false;
            $message = 'Email already taken!';
        } else {
            $otp = rand(100000, 999999);
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'otp' => $otp,
            ]);
            // email logic starts
            $mailService->sendMail(
                [
                    $request->email
                ],
                'Verify Your Email Address',
                'mail.signup-otp',
                [
                    'name' => $request->email,
                    'otp'  => $otp,
                ],
                [
                    'cc' => [
                        'developermanish95@gmail.com',
                    ]
                ]
            );
            // email logic ends
            $status = true;
            $message = 'OTP sent to your email!';
        }
        return response()->json([
            'status' => $status,
            'message' => $message,
        ]);
    }

    public function verifyOtp(Request $request){
        $request->validate([
            'email' => 'required|email',
            'otp' => 'required'
        ]);
        // return $request->all();

        $email = $request->email;
        $otp = $request->otp;
        $user = User::where(['email' => $email, 'otp' => $otp])->first();
        if($user){
            $status = true;
            $user->is_email_verified = "yes";
            $user->save();
            $message = "Otp verified successfully! Redirecting to login page. . . ";
        }else{
            $status = false;
            $message = "Something went wrong!";
        }

        return array(
            'status' => $status,
            'message' => $message
        );
    }

}
