import React, {useEffect, useState} from 'react';
import AttendeeCard from './attendee-card';
import Search from './search';
import {retrieveAttendees} from "../api/trnout-service";

const AttendeeList = ({eventId}) => {
    const [attendees, setAttendees] = useState();
    useEffect(() => {
        const getAttendeeList = async () => {
            const id = eventId;
            const attendeeList = await retrieveAttendees(id);
            console.log('attendees', attendeeList);
            setAttendees(attendeeList)
        }
        getAttendeeList();
    }, [eventId]);
    return <div>
        <Search/>
        {attendees ? attendees.map(attendee => <AttendeeCard attendee={attendee}/>) : <div>Loading</div>}
    </div>
}

export default AttendeeList;
