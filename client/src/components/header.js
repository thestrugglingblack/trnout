import React from "react";
import {Navbar,Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
    return(
    <div>
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand><Link to={'/'}>TrnOut</Link></Navbar.Brand>
            <Nav className="mr-auto">
                <Link to={'/'}>Home</Link>
                <Link to={'/report'}>Report</Link>
            </Nav>
        </Navbar>
    </div>
    )
};

export default Header;
