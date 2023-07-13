import { createContext, useContext, useState } from "react";
import { Data } from "../Data";

export const manageItem = createContext();

export function ItemContext({children}){
    // eslint-disable-next-line no-unused-vars
    const [eventData, setEventData] = useState([...Data.meetups]);
    const [rsvped, setRsvped] = useState([]);
    const [search, setSearch] = useState("")


    return <manageItem.Provider value={{ eventData, rsvped, setRsvped, search, setSearch }}>{children}</manageItem.Provider>
}

export const useItems = () => useContext(manageItem);