import { useRef, useState } from "react";
import axios from "axios";


interface TimeSlot {
  start: string;
  end: string;
}

interface DayAvailability {
  enabled: boolean;
  slots: TimeSlot[];
}

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function EventCreate() {
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [meetingPlatform, setMeetingPlatform] = useState("Google Meet");
  const [duration, setDuration] = useState("30");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);

  const [availability, setAvailability] = useState<
    Record<string, DayAvailability>
  >(
    weekDays.reduce((acc, day) => {
      acc[day] = {
        enabled: false,
        slots: [],
      };
      return acc;
    }, {} as Record<string, DayAvailability>)
  );

  const toggleDay = (day: string) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        enabled: !prev[day].enabled,
      },
    }));
  };

  const addSlot = (day: string) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        slots: [...prev[day].slots, { start: "", end: "" }],
      },
    }));
  };

  const updateSlot = (
    day: string,
    index: number,
    field: "start" | "end",
    value: string
  ) => {
    setAvailability((prev) => {
      const slots = [...prev[day].slots];
      slots[index] = {
        ...slots[index],
        [field]: value,
      };

      return {
        ...prev,
        [day]: {
          ...prev[day],
          slots,
        },
      };
    });
  };

  const removeSlot = (day: string, index: number) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        slots: prev[day].slots.filter((_, i) => i !== index),
      },
    }));
  };

  const openPicker = (
    ref: React.RefObject<HTMLInputElement | null>
  ) => {
    ref.current?.focus();

    if (ref.current?.showPicker) {
      ref.current.showPicker();
    }
  };

  const handleFormSubmit = () => {
    console.log({
              eventName,
              description,
              meetingPlatform,
              duration,
              startDate,
              endDate,
              availability,
            });
  };
  
  const API_URL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
  // Fetch existing meeting channels list for dropdown
    try {
      const response = axios.post(
        `${API_URL}/get-user-meeting-channel-list`,
        { email: email },
        { headers }
      );

      const dropdownData = response.data.data;

      console.log(dropdownData);

    } catch (error: any) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.message);
      }
    }

  return (
    <div className="page">
      <div className="card">
        <h1>Create Event</h1>

        <div className="form-group">
          <label>Event Name</label>
          <input
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Interview Product Manager"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="grid2">
          <div className="form-group">
            <label>Meeting Platform</label>
            <select
              value={meetingPlatform}
              onChange={(e) => setMeetingPlatform(e.target.value)}
            >
              <option>Google Meet</option>
              <option>Zoom</option>
              <option>Microsoft Teams</option>
              <option>Webex</option>
            </select>
          </div>

          <div className="form-group">
            <label>Duration</label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              <option value="15">15 Minutes</option>
              <option value="30">30 Minutes</option>
              <option value="45">45 Minutes</option>
              <option value="60">60 Minutes</option>
            </select>
          </div>

          <div
            className="form-group"
            onClick={() => openPicker(startDateRef)}
          >
            <label>Start Date</label>

            <input
              ref={startDateRef}
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              onFocus={() => startDateRef.current?.showPicker?.()}
            />
          </div>

          <div
            className="form-group"
            onClick={() => openPicker(endDateRef)}
          >
            <label>End Date (Optional)</label>

            <input
              ref={endDateRef}
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              onFocus={() => endDateRef.current?.showPicker?.()}
            />
          </div>
        </div>

        <h2>Availability</h2>

        {weekDays.map((day) => (
          <div className="day-card" key={day}>
            <div className="day-header">
              <label>
                <input
                  type="checkbox"
                  checked={availability[day].enabled}
                  onChange={() => toggleDay(day)}
                />
                {day}
              </label>

              {availability[day].enabled && (
                <button
                  type="button"
                  className="add-btn"
                  onClick={() => addSlot(day)}
                >
                  + Add Slot
                </button>
              )}
            </div>

            {availability[day].enabled && (
              <div>
                {availability[day].slots.map((slot, index) => (
                  <div className="slot-row" key={index}>
                    <input
                      type="time"
                      value={slot.start}
                      onChange={(e) =>
                        updateSlot(day, index, "start", e.target.value)
                      }
                    />

                    <span>to</span>

                    <input
                      type="time"
                      value={slot.end}
                      onChange={(e) =>
                        updateSlot(day, index, "end", e.target.value)
                      }
                    />

                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() => removeSlot(day, index)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <button
          className="save-btn"
          onClick={()=> handleFormSubmit()}
        >
          Save Event
        </button>
      </div>
    </div>
  );
}