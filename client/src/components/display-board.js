import React, {useState, useEffect} from "react";
import {Container} from "react-bootstrap";

import EventList from "./event-list";
import {retrieveEvents} from "../api/trnout-service";
import Search from "./search";


const DisplayBoard = () => {
    const [events, setEvents] = useState();
    const [query, setQuery] = useState();

    useEffect( ()=>{
      const getEvents = async () =>{
          const eventList = await retrieveEvents();
          setEvents(eventList);
          setQuery()
      };
      getEvents();
    },[]);

    const handleQuery = (term) => {
        setQuery(term)
    };


    return(
    <div>
        <Container>
            <h1>Women Who Code DC</h1>
                <Search onSearch={handleQuery}/>
                <EventList events={events} filterQuery={query}/>
        </Container>
    </div>
    )
};

export default DisplayBoard;
