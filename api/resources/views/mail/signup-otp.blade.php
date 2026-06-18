<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Email Verification</title>
</head>

<body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,sans-serif;">

    <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
            <td align="center" style="padding:40px 20px;">

                <table width="600" cellpadding="0" cellspacing="0"
                    style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.1);">

                    <!-- Logo -->
                    <tr>
                        <td align="center"
                            style="background:linear-gradient(135deg,#4f46e5,#7c3aed);padding:30px;">
                            <img src="{{ config('app.url') }}/images/logo.png"
                                alt="Logo"
                                style="max-width:120px;">
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td style="padding:40px;">

                            <h2 style="margin-top:0;color:#1f2937;">
                                Welcome {{ $name }} 👋
                            </h2>

                            <p style="font-size:16px;color:#4b5563;line-height:1.6;">
                                Thank you for registering with us.
                                Please use the following OTP to verify your email address.
                            </p>

                            <div style="text-align:center;margin:35px 0;">
                                <span style="
                                    display:inline-block;
                                    background:#4f46e5;
                                    color:#ffffff;
                                    font-size:32px;
                                    font-weight:bold;
                                    letter-spacing:8px;
                                    padding:18px 35px;
                                    border-radius:10px;
                                ">
                                    {{ $otp }}
                                </span>
                            </div>

                            <p style="font-size:15px;color:#6b7280;">
                                This OTP will expire shortly. Please do not share it with anyone.
                            </p>

                            <p style="font-size:15px;color:#6b7280;">
                                If you did not create this account, please ignore this email.
                            </p>

                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background:#f9fafb;padding:25px;text-align:center;">

                            <p style="margin:0;font-size:14px;color:#6b7280;">
                                Need help? Contact us at
                                <a href="mailto:manish@gmail.com"
                                    style="color:#4f46e5;text-decoration:none;">
                                    manish@gmail.com
                                </a>
                            </p>

                            <p style="margin-top:10px;font-size:12px;color:#9ca3af;">
                                © {{ date('Y') }} {{ config('app.name') }}. All rights reserved.
                            </p>

                        </td>
                    </tr>

                </table>

            </td>
        </tr>
    </table>

</body>

</html>