import "./Eventbox.css"

export default function SpeakerBox({props}){
    return <div className="speaker-box">
        <img src={props.image} alt={props.name} />
        <h3>{props.name}</h3>
        <p>{props.designation}</p>
    </div>
}