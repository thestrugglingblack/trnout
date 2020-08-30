import React, {useState, useEffect} from "react";
import {Container, Jumbotron, Col, Row, Image} from "react-bootstrap";

import EventList from "./event-list";
import {retrieveEvents} from "../api/trnout-service";
import Search from "./search";

import '../styles/display-board.css';


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
    <div className={'display-board'}>
        <Container fluid>
            <Jumbotron>
                <Row>
                    <Col>
                        <Image src="https://opencollective-production.s3-us-west-1.amazonaws.com/50bd4ad0-769b-11e6-90e1-0dd449fe12b2.png" fluid />
                    </Col>
                    <Col>
                        <h2>Women Who Code DC </h2>
                        <label><b>Members</b></label>: 11528 | <label><b>Started</b></label>: 2014
                        <p>Join us by attending a WWCode event or signing up at <a href="http://www.womenwhocode.com">www.womenwhocode.com</a>.</p>
                        <p>Women Who Code is the largest and most active community of engineers dedicated to inspiring women to excel in technology careers. We envision a world where women are representative as technical executives, founders, VCs, board members, and software engineers. Our programs are designed to get you there. </p>
                        <p>Who should join?</p>
                        <p>Our community is for professional women in technology careers, including software engineers, developers, UX/UI designers, data scientists and more. Current and aspiring coders are welcome. Bring your laptop and a friend!</p>
                        <p>What to expect? </p>
                        <p>Our events offer free hands on technical events, study groups, panel discussions, lightning talks, and keynotes featuring influential tech industry experts, innovators, and investors. We help you build the skills you need to raise your professional profile and achieve greater career success. </p>
                    </Col>
                </Row>

            </Jumbotron>
                <Search onSearch={handleQuery} placeholder={'Search Events...'}/>
            {/*<Row>*/}

                <EventList events={events} filterQuery={query}/>
            {/*</Row>*/}
        </Container>
    </div>
    )
};

export default DisplayBoard;
