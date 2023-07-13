import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import EventPage from "../pages/EventPage";

export default function AllRoutes(){
    return <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/event/:eventId" element={<EventPage />}/>
    </Routes>
}