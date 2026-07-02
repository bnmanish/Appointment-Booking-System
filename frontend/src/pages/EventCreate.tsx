import { useState } from "react";
// import "./EventCreate.css";

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
    setAvailability({
      ...availability,
      [day]: {
        ...availability[day],
        enabled: !availability[day].enabled,
      },
    });
  };

  const addSlot = (day: string) => {
    const data = { ...availability };

    data[day].slots.push({
      start: "",
      end: "",
    });

    setAvailability(data);
  };

  const updateSlot = (
    day: string,
    index: number,
    field: "start" | "end",
    value: string
  ) => {
    const data = { ...availability };

    data[day].slots[index][field] = value;

    setAvailability(data);
  };

  const removeSlot = (day: string, index: number) => {
    const data = { ...availability };

    data[day].slots.splice(index, 1);

    setAvailability(data);
  };

  return (
    <div className="page">

      <div className="card">

        <h1>Create Interview Event</h1>

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

            <select>
              <option>Google Meet</option>
              <option>Zoom</option>
              <option>Microsoft Teams</option>
              <option>Webex</option>
            </select>
          </div>

          <div className="form-group">
            <label>Duration</label>

            <select>
              <option>15 Minutes</option>
              <option>30 Minutes</option>
              <option>45 Minutes</option>
              <option>60 Minutes</option>
            </select>
          </div>

          <div className="form-group">
            <label>Start Date</label>

            <input type="date" />
          </div>

          <div className="form-group">
            <label>End Date (Optional)</label>

            <input type="date" />
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

        <button className="save-btn">
          Save Event
        </button>

      </div>

    </div>
  );
}