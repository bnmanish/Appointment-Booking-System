<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('meeting_channels', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained();
            $table->longText('google_meet')->nullable();
            $table->longText('zoom')->nullable();
            $table->longText('microsoft_teams')->nullable();
            $table->longText('whatsapp_video')->nullable();
            $table->longText('other_video')->nullable();
            $table->string('mobile_call', 20)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('meeting_channels');
    }
};
