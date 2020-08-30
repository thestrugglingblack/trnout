import React from 'react';
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const EventCard = ({event}) => {
const {eventName, date, time, rsvp, id}= event;
    return <div className={'event-card'} style={{paddingBottom: '20px', paddingTop: '10px'}}>
        <Card style={{ width: '375px' }}>
            <Card.Img variant="top" src="https://opencollective-production.s3-us-west-1.amazonaws.com/50bd4ad0-769b-11e6-90e1-0dd449fe12b2.png" thumbnail />
            <Card.Body>
                <Card.Title>{eventName}</Card.Title>
                <Card.Text>
                    <p><b>Date</b>: {date}</p>
                    <p><b>Time</b>: {time}</p>
                    <p><b>RSVP</b>: {rsvp}</p>
                </Card.Text>
                <button><Link to={`/events/${id}`}>View</Link></button>
            </Card.Body>
        </Card>
        </div>
}

export default EventCard;
