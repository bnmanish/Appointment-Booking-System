
import {
  FaGoogle,
  FaPhone,
  FaSlack,
  FaDiscord,
  FaMicrosoft,
} from "react-icons/fa";

import {
  SiZoom,
  SiCisco,
  SiJitsi,
  SiWhatsapp,
  SiTelegram,
  SiSignal,
  SiWebex,
} from "react-icons/si";

import { MdVideoCall } from "react-icons/md";

const meetingPlatforms = [
  {
    name: "Google Meet",
    icon: <FaGoogle className="meeting-icon google" />,
    placeholder: "https://meet.google.com/...",
  },
  {
    name: "Zoom",
    icon: <SiZoom className="meeting-icon zoom" />,
    placeholder: "https://zoom.us/j/...",
  },
  {
    name: "Microsoft Teams",
    icon: <FaMicrosoft className="meeting-icon teams" />,
    placeholder: "https://teams.microsoft.com/...",
  },
//   {
//     name: "Cisco Webex",
//     icon: <SiWebex className="meeting-icon webex" />,
//     placeholder: "https://company.webex.com/...",
//   },
//   {
//     name: "Cisco Meeting",
//     icon: <SiCisco className="meeting-icon cisco" />,
//     placeholder: "Cisco Meeting Link",
//   },
//   {
//     name: "Jitsi Meet",
//     icon: <SiJitsi className="meeting-icon jitsi" />,
//     placeholder: "https://meet.jit.si/...",
//   },
//   {
//     name: "Slack Huddle",
//     icon: <FaSlack className="meeting-icon slack" />,
//     placeholder: "Slack Huddle Link",
//   },
//   {
//     name: "Discord",
//     icon: <FaDiscord className="meeting-icon discord" />,
//     placeholder: "Discord Invite Link",
//   },
//   {
//     name: "WhatsApp Video",
//     icon: <SiWhatsapp className="meeting-icon whatsapp" />,
//     placeholder: "WhatsApp Call Link",
//   },
//   {
//     name: "Telegram",
//     icon: <SiTelegram className="meeting-icon telegram" />,
//     placeholder: "Telegram Call Link",
//   },
//   {
//     name: "Signal",
//     icon: <SiSignal className="meeting-icon signal" />,
//     placeholder: "Signal Call Link",
//   },
//   {
//     name: "Other Video Meeting",
//     icon: <MdVideoCall className="meeting-icon other" />,
//     placeholder: "Meeting URL",
//   },
];

function MeetingChannel() {
  return (
    <div className="meeting-page">
      <div className="meeting-card">

        <h2>Meeting Channels</h2>

        <p className="subtitle">
          Configure your preferred meeting platforms.
        </p>

        {meetingPlatforms.map((platform) => (
          <div className="meeting-row" key={platform.name}>
            <div className="icon-box">
              {platform.icon}
            </div>

            <label>{platform.name}</label>

            <input
              type="url"
              placeholder={platform.placeholder}
            />
          </div>
        ))}

        <div className="meeting-row">
          <div className="icon-box">
            <FaPhone className="meeting-icon phone" />
          </div>

          <label>Mobile Call</label>

          <input
            type="tel"
            placeholder="+91 9876543210"
          />
        </div>

        <div className="button-area">
          <button type="button">
            Save Meeting Channels
          </button>
        </div>

      </div>
    </div>
  );
}

export default MeetingChannel;