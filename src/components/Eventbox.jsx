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
      {/* <p>{props.eventStartTime}</p> */}
      <p>{new Date(props.eventStartTime).toLocaleString("en-US",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric' })}</p>

      <h2>{props.title}</h2>
    </div>
  );
}
