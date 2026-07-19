<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Event;
use App\Models\User;

class EventController extends Controller
{
    public function createEvent(Request $request){
        $data = $request->data;


        $email = $data['email']; // to indetify the user

        $user = User::where(['email'=>$email])->first();
        $event = new Event;
        $event->user_id = $user->id;
        $event->meeting_channel_id = $data['meetingPlatform'];
        $event->title = $data['eventName'];
        $event->description = $data['description'];
        $event->start_date = $data['startDate'];
        $event->end_date = $data['endDate'];
        $event->duration = $data['duration'];
        $event->save();

        return [
            'status' => true,
            'message' => "Event created sucessfully!"
        ];


    }
}
