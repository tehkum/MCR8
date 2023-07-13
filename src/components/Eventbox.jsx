import { useNavigate } from "react-router";
import "./Eventbox.css";

export default function EventBox({ props }) {
    const navigate = useNavigate();

  return (
    <div className="event-list-box" onClick={()=>navigate(`/event/${props.id}`)}>
      <div className="event-list-box-inner">
        <img src={props.eventThumbnail} alt={props.id} />
        <p>{props.eventType} event</p>
      </div>
      <p>{props.eventStartTime}</p>
      <h2>{props.title}</h2>
    </div>
  );
}
