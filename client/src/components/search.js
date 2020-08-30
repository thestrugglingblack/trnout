import React from "react";

import {Form, Col, Row} from "react-bootstrap";

const Search = ({onSearch, placeholder}) => {
    return <div>
        <Form>
            <Form.Group as={Row} controlId="search">
                <Col sm="10">
                    <Form.Control type="search" placeholder={placeholder}  onChange={(e)=>{
                       onSearch(e.target.value);
                    }}/>
                </Col>
            </Form.Group>
        </Form>
    </div>
};

export default Search;
