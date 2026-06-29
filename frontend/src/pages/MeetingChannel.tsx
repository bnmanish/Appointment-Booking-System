import { useState } from "react";
import { FaGoogle, FaPhone, FaMicrosoft } from "react-icons/fa";
import { SiZoom } from "react-icons/si";

const MeetingChannel = () => {
  const [googleMeet, setGoogleMeet] = useState<string>("");
  const [zoom, setZoom] = useState<string>("");
  const [microsoftTeams, setMicrosoftTeams] = useState<string>("");
  const [mobileCall, setMobileCall] = useState<string>("");

  const handleSave = () => {
    const payload = {
      google_meet: googleMeet,
      zoom,
      microsoft_teams: microsoftTeams,
      mobile_call: mobileCall,
    };

    console.log(payload);

    // Call your API here
    // axios.post("/api/meeting-channel", payload);
  };

  return (
    <div className="meeting-page">
      <div className="meeting-card">
        <h2>Meeting Channels</h2>

        <p className="subtitle">
          Configure your preferred meeting platforms.
        </p>

        {/* Google Meet */}
        <div className="meeting-row">
          <div className="icon-box">
            <FaGoogle className="meeting-icon google" />
          </div>

          <label>Google Meet</label>

          <input
            type="url"
            name="google_meet"
            placeholder="https://meet.google.com/..."
            value={googleMeet}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setGoogleMeet(e.target.value)
            }
          />
        </div>

        {/* Zoom */}
        <div className="meeting-row">
          <div className="icon-box">
            <SiZoom className="meeting-icon zoom" />
          </div>

          <label>Zoom</label>

          <input
            type="url"
            name="zoom"
            placeholder="https://zoom.us/j/..."
            value={zoom}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setZoom(e.target.value)
            }
          />
        </div>

        {/* Microsoft Teams */}
        <div className="meeting-row">
          <div className="icon-box">
            <FaMicrosoft className="meeting-icon teams" />
          </div>

          <label>Microsoft Teams</label>

          <input
            type="url"
            name="microsoft_teams"
            placeholder="https://teams.microsoft.com/..."
            value={microsoftTeams}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMicrosoftTeams(e.target.value)
            }
          />
        </div>

        {/* Mobile Call */}
        <div className="meeting-row">
          <div className="icon-box">
            <FaPhone className="meeting-icon phone" />
          </div>

          <label>Mobile Call</label>

          <input
            type="tel"
            name="mobile_call"
            placeholder="+91 9876543210"
            value={mobileCall}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMobileCall(e.target.value)
            }
          />
        </div>

        <div className="button-area">
          <button type="button" onClick={handleSave}>
            Save Meeting Channels
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetingChannel;