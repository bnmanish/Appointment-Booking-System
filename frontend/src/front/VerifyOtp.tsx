import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function VerifyOtp() {
    const navigate = useNavigate();

    const email = localStorage.getItem("email");
    if (!email) {
        navigate("/signup", { replace: true });
    }

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            navigate("/admin/dashboard", { replace: true });
        }
    }, [navigate]);

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [message, setMessage] = useState("");
    const [seconds, setSeconds] = useState(30);
    const [resendDisabled, setResendDisabled] = useState(true);

    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        let timer: number;

        if (resendDisabled && seconds > 0) {
            timer = window.setInterval(() => {
                setSeconds((prev) => prev - 1);
            }, 1000);
        }

        if (seconds === 0) {
            setResendDisabled(false);
        }

        return () => clearInterval(timer);
    }, [seconds, resendDisabled]);

    const handleChange = (value: string, index: number) => {
        if (!value) {
            const newOtp = [...otp];
            newOtp[index] = "";
            setOtp(newOtp);
            return;
        }

        // Handles mobile autofill / multiple digit input
        if (value.length > 1) {
            const digits = value.replace(/\D/g, "").slice(0, 6);
            const newOtp = ["", "", "", "", "", ""];

            digits.split("").forEach((digit, i) => {
                newOtp[i] = digit;
            });

            setOtp(newOtp);

            const lastIndex = Math.min(digits.length - 1, 5);
            inputRefs.current[lastIndex]?.focus();
            return;
        }

        if (!/^\d$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (e.key === "Backspace") {
            if (otp[index]) {
                const newOtp = [...otp];
                newOtp[index] = "";
                setOtp(newOtp);
            } else if (index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        }
    };

    const handlePaste = (
        e: React.ClipboardEvent<HTMLInputElement>
    ) => {
        e.preventDefault();

        const pastedData = e.clipboardData
            .getData("text")
            .replace(/\D/g, "")
            .slice(0, 6);

        if (!pastedData) return;

        const newOtp = ["", "", "", "", "", ""];

        pastedData.split("").forEach((digit, index) => {
            newOtp[index] = digit;
        });

        setOtp(newOtp);

        const lastIndex = Math.min(pastedData.length - 1, 5);
        inputRefs.current[lastIndex]?.focus();
    };

    const handleSubmit = async () => {
        const otpValue = otp.join("");

        if (otpValue.length !== 6) {
            setMessage("Please enter a valid 6-digit OTP.");
            return;
        }

        try {
            const apiUrl = import.meta.env.VITE_API_URL;

            const { data } = await axios.post(
                `${apiUrl}/verify-otp`,
                {
                    otp: otpValue,
                    email : email
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            );

            setMessage(data.message);

            if (data.status) {
                // Example redirect
                // navigate("/login");
            }
        } catch (error) {
            console.error(error);
            setMessage("Something went wrong. Please try again.");
        }
    };

    const handleResendOtp = async () => {
        try {
            const apiUrl = import.meta.env.VITE_API_URL;

            const { data } = await axios.post(
                `${apiUrl}/resend-otp`
            );

            setMessage(data.message);

            setSeconds(30);
            setResendDisabled(true);
        } catch (error) {
            console.error(error);
            setMessage("Failed to resend OTP.");
        }
    };

    return (
        <div className="otp-container">
            <div className="otp-card">
                <h2>Verify OTP</h2>

                <p className="otp-text">
                    Enter the 6-digit verification code sent to
                    your email.
                </p>

                {message && (
                    <p className="message">{message}</p>
                )}

                <div className="otp-inputs">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => {
                                inputRefs.current[index] = el;
                            }}
                            type="text"
                            inputMode="numeric"
                            autoComplete={
                                index === 0
                                    ? "one-time-code"
                                    : "off"
                            }
                            maxLength={6}
                            value={digit}
                            onChange={(e) =>
                                handleChange(
                                    e.target.value,
                                    index
                                )
                            }
                            onKeyDown={(e) =>
                                handleKeyDown(e, index)
                            }
                            onPaste={handlePaste}
                            className="otp-box"
                        />
                    ))}
                </div>

                <button
                    onClick={handleSubmit}
                    className="login-btn"
                >
                    Verify OTP
                </button>

                <div className="resend-section">
                    {resendDisabled ? (
                        <span>
                            Resend OTP in {seconds}s
                        </span>
                    ) : (
                        <button
                            type="button"
                            className="resend-btn"
                            onClick={handleResendOtp}
                        >
                            Resend OTP
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default VerifyOtp;