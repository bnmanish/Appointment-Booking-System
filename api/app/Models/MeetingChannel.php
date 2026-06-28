<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MeetingChannel extends Model
{
    protected $fillable = [
        'user_id',
        'google_meet',
        'zoom',
        'microsoft_teams',
        'cisco_webex',
        'whatsapp_video',
        'other_video',
        'mobile_call',
    ];
}
