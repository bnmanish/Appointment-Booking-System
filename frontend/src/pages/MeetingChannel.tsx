import { useEffect, useState } from "react";
import axios from "axios";
import { FaGoogle, FaPhone, FaMicrosoft } from "react-icons/fa";
import { SiZoom, SiWhatsapp } from "react-icons/si";

const API_URL = import.meta.env.VITE_API_URL;

const MeetingChannel = () => {
  const [googleMeet, setGoogleMeet] = useState("");
  const [zoom, setZoom] = useState("");
  const [microsoftTeams, setMicrosoftTeams] = useState("");
  const [whatsappVideo, setWhatsappVideo] = useState("");

  const [mobileCall, setMobileCall] = useState("");

  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");


  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };

  // Fetch existing meeting channels
  const fetchMeetingChannels = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        `${API_URL}/get-meeting-channel-by-email`,
        { email: email },
        { headers }
      );

      const data = response.data.data;

      setGoogleMeet(data.google_meet || "");
      setZoom(data.zoom || "");
      setMicrosoftTeams(data.microsoft_teams || "");
      setWhatsappVideo(data.whatsapp_video || "");
      setMobileCall(data.mobile_call || "");
    } catch (error: any) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // Save meeting channels
  const handleSave = async () => {
    try {
      setLoading(true);

      const payload = {
        email: email,
        google_meet: googleMeet,
        zoom,
        microsoft_teams: microsoftTeams,
        whatsapp_video: whatsappVideo,
        mobile_call: mobileCall,
      };

      const response = await axios.post(
        `${API_URL}/update-meeting-channel`,
        payload,
        { headers }
      );

      alert(response.data.message || "Meeting channels updated successfully.");
    } catch (error: any) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeetingChannels();
  }, []);

  return (
    <div className="meeting-page">
      <div className="meeting-card">
        <h2>Meeting Channels</h2>
        <p className="subtitle">
          Add your preferred meeting platforms.
        </p>

        {/* Google Meet */}
        <div className="meeting-row">
          <div className="icon-box">
            <FaGoogle className="meeting-icon google" />
          </div>

          <label>Google Meet</label>

          <input
            type="url"
            placeholder="https://meet.google.com/..."
            value={googleMeet}
            onChange={(e) => setGoogleMeet(e.target.value)}
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
            placeholder="https://zoom.us/j/..."
            value={zoom}
            onChange={(e) => setZoom(e.target.value)}
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
            placeholder="https://teams.microsoft.com/..."
            value={microsoftTeams}
            onChange={(e) => setMicrosoftTeams(e.target.value)}
          />
        </div>

        {/* WhatsApp Video */}
        <div className="meeting-row">
          <div className="icon-box">
            <SiWhatsapp className="meeting-icon whatsapp" />
          </div>

          <label>WhatsApp Video</label>

          <input
            type="url"
            placeholder="https://wa.me/919876543210"
            value={whatsappVideo}
            onChange={(e) => setWhatsappVideo(e.target.value)}
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
            placeholder="+91 9876543210"
            value={mobileCall}
            onChange={(e) => setMobileCall(e.target.value)}
          />
        </div>

        <div className="button-area">
          <button
            type="button"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? "Please Wait..." : "Save Meeting Channels"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetingChannel;