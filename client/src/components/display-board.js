import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";

import EventList from "./event-list";
import {retrieveEvents} from "../api/trnout-service";

const DisplayBoard = () => {
    const [events, setEvents] = useState();
    useEffect( ()=>{
      const getEvents = async () =>{
          const eventList = await retrieveEvents();
          setEvents(eventList);
      };
      getEvents();
    },[]);
    return(
    <div>
        <Container>
            <h1>Women Who Code DC</h1>
           <EventList events={events}/>
        </Container>
    </div>
    )
};

export default DisplayBoard;
