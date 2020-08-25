import React, {useEffect, useState} from 'react';
import AttendeeCard from './attendee-card';
import {retrieveAttendees} from "../api/trnout-service";

const AttendeeList = ({eventId, filterQuery}) => {
    const [attendees, setAttendees] = useState();


    useEffect(() => {
        const getAttendeeList = async () => {
            const id = eventId;
            const attendeeList = await retrieveAttendees(id);
            if (attendeeList.code === 400){
                return setAttendees(attendeeList.message);
            }
            setAttendees(attendeeList);
        };
        getAttendeeList();
    }, [eventId]);

    const showAttendeeList = () => {

        if(!filterQuery || filterQuery === ''){
            return attendees ? attendees.map(attendee => <AttendeeCard attendee={attendee}  />) : <div>Loading</div>
        } else {
            return attendees.filter(a => a.memberName.toLowerCase().includes(filterQuery.toLowerCase())).map((filteredMember, index) =>
                <AttendeeCard key={index} attendee={filteredMember}/>
            )
        }
    };


    return <div>
        { typeof attendees === 'string' ? <div>{attendees}</div> : showAttendeeList()}
    </div>
}

export default AttendeeList;
