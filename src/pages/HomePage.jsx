import { useItems } from "../context/ItemContext";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import EventBox from "../components/Eventbox";
import "./Homepage.css";
import { useState } from "react";

export default function HomePage() {
  const { eventData, search } = useItems();
  const [eventsType, setEventType] = useState("all");

  const searchFilter = eventData.filter(events=> events.title.toLowerCase().includes(search.toLowerCase()));

  const typeFilter = eventsType !== "all" ? searchFilter.filter(events=>events.eventType === eventsType) : searchFilter;

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center"}}>
          <h1>Meetup Events</h1>
          <select onChange={(e)=>setEventType(e.target.value)} style={{height: "40px"}}>
            <option value="all">Select Event Type</option>
            <option value="Offline">Offline</option> 
            <option value="Online">Online</option> 
          </select>
        </div>
        <div className="event-list-panel">
          {typeFilter?.map((events) => (
            <EventBox props={events} />
          ))}
        </div>
      </Container>
    </>
  );
}
