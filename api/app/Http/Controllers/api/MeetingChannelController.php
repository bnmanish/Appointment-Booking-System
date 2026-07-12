<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\MeetingChannel;
use Illuminate\Support\Facades\Validator;



class MeetingChannelController extends Controller
{
    public function updateMeetingChannel(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email'             => 'required|email|exists:users,email',
            'google_meet'       => 'nullable|url',
            'zoom'              => 'nullable|url',
            'microsoft_teams'   => 'nullable|url',
            'whatsapp_video'    => 'nullable|string|max:20',
            'mobile_call'       => 'nullable|string|max:20',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors()->first(),
                'errors' => $validator->errors(),
            ], 422);
        }

        $user = User::where('email', $request->email)->first();

        MeetingChannel::updateOrCreate(
            ['user_id' => $user->id],
            [
                'google_meet'      => $request->google_meet,
                'zoom'             => $request->zoom,
                'microsoft_teams'  => $request->microsoft_teams,
                'whatsapp_video'   => $request->whatsapp_video,
                'mobile_call'      => $request->mobile_call,
            ]
        );

        return response()->json([
            'status' => true,
            'message' => 'Meeting channel updated successfully!'
        ]);
    }

    public function getMeetingChannelByEmail(Request $request){
        $validator = Validator::make($request->all(), [
            'email'             => 'required|email|exists:users,email',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors()->first(),
                'errors' => $validator->errors(),
            ], 422);
        }

        $user = User::select('id')->where('email', $request->email)->first();

        $meetingData = MeetingChannel::select('id','google_meet','zoom','microsoft_teams','whatsapp_video','other_video','mobile_call')->where(['user_id' => $user->id])->first();

        return response()->json([
            'data' => $meetingData,
        ]);

    }

    public function getUserMeetingChannelList(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|exists:users,email',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors()->first(),
                'errors' => $validator->errors(),
            ], 422);
        }

        $user = User::select('id')->where('email', $request->email)->first();

        $meetingData = MeetingChannel::select('google_meet','zoom','microsoft_teams','whatsapp_video','other_video','mobile_call')->where(['user_id' => $user->id])->first();

        return response()->json([
            'data' => $meetingData,
        ]);

    }

}
