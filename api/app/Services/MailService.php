<?php

namespace App\Services;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class MailService
{
    public function sendMail(
        string|array $to,
        string $subject,
        string $view,
        array $data = [],
        array $options = []
    ): bool {
        try {
            Mail::send($view, $data, function ($message) use ($to, $subject, $options) {

                $message->to($to)
                        ->subject($subject);

                // From
                if (!empty($options['from'])) {
                    $message->from(
                        $options['from']['email'],
                        $options['from']['name'] ?? null
                    );
                }

                // Reply To
                if (!empty($options['reply_to'])) {
                    $message->replyTo(
                        $options['reply_to']['email'],
                        $options['reply_to']['name'] ?? null
                    );
                }

                // CC
                if (!empty($options['cc'])) {
                    $message->cc($options['cc']);
                }

                // BCC
                if (!empty($options['bcc'])) {
                    $message->bcc($options['bcc']);
                }

                // Priority (1 = Highest, 5 = Lowest)
                if (!empty($options['priority'])) {
                    $message->priority($options['priority']);
                }

                // Attachments
                if (!empty($options['attachments'])) {
                    foreach ($options['attachments'] as $attachment) {

                        if (is_array($attachment)) {
                            $message->attach(
                                $attachment['path'],
                                [
                                    'as'   => $attachment['name'] ?? null,
                                    'mime' => $attachment['mime'] ?? null,
                                ]
                            );
                        } else {
                            $message->attach($attachment);
                        }
                    }
                }
            });

            return true;

        } catch (\Throwable $e) {

            Log::error('Mail Error', [
                'message' => $e->getMessage(),
                'trace'   => $e->getTraceAsString(),
            ]);

            return false;
        }
    }
}