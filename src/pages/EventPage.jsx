import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useItems } from "../context/ItemContext";
import { Container, TextField } from "@mui/material";
import SpeakerBox from "../components/SpeakerBox";
import "./EventBox.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function EventPage() {
  const { eventId } = useParams();
  const [eventDetails, setEventDetails] = useState([]);
  const { eventData, rsvped, setRsvped } = useItems();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setEventDetails(eventData?.find((events) => events?.id === eventId));
  }, [eventId]);

  const date2 = new Date();


  return (
    <Container>
      <div className="container">
        <div className="panel-left">
          <h1>{eventDetails.title}</h1>
          <div>
            <p>Hosted by</p>
            <p>
              <b>{eventDetails.hostedBy}</b>
            </p>
          </div>
          <img
            src={eventDetails.eventThumbnail}
            height="400"
            width="500"
            alt={eventDetails.id}
          />
          <div>
            <h3>Details</h3>
            <p>{eventDetails.eventDescription}</p>
          </div>
          <div>
            <h3>Additional Information</h3>
            <p>
              <b>Dress Code: </b>
              {eventDetails?.additionalInformation?.dressCode}
            </p>
            <p>
              <b>Age Restriction: </b>
              {eventDetails?.additionalInformation?.ageRestrictions}
            </p>
          </div>
          <div>
            <h3>Event Tags</h3>
            {eventDetails?.eventTags?.map((tags) => (
              <p style={{color: "orangered", border: "1px solid orangered", display: "inline-block", padding: "0.5rem 1rem", margin: "10px"}}>{tags}</p>
            ))}
          </div>
        </div>
        <div className="panel-right">
          <div className="panel-location">
            <span>
              <AccessTimeIcon />
              <p><b>From: </b>{new Date(eventDetails?.eventStartTime).toLocaleString("en-US",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric' })}</p>
              <p><b>To: </b>{new Date(eventDetails?.eventEndTime).toLocaleString("en-US",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric' })}</p>
              
            </span>
            <span>
              <AddLocationIcon /> 
              <p>{eventDetails?.location}</p>
              <p>{eventDetails?.address}</p>
            </span>
            <span>
              <b>Price: </b> {eventDetails?.price}
            </span>
          </div>
          <h3>Speakers:</h3>
          <div className="speakerbox-body">
            {eventDetails?.speakers?.map((speaker) => (
              <SpeakerBox props={speaker} />
            ))}
          </div>
          {rsvped.find(id=>id===eventDetails.id) ? <button className="rsvp-btn" style={{backgroundColor: "grey"}} disabled>RSVP</button> : <button onClick={handleOpen} className="rsvp-btn">RSVP</button>}
        </div>
      </div>

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2>Complete Your Rsvp</h2>
          <p>Fill Personal Information</p>
          <TextField id="outlined-basic" label="Email" variant="outlined"  sx={{width: "100%", margin: "10px 0"}}/>
          <TextField id="outlined-basic" label="Name" variant="outlined"  sx={{width: "100%", margin: "10px 0"}}/>
          <Button sx={{width: "100%", backgroundColor: "orangered", color: "white"}} onClick={()=>{
            setRsvped([...rsvped, eventDetails?.id])
            handleClose();
          }}>RSVP</Button>
        </Box>
      </Modal>
    </Container>
  );
}
