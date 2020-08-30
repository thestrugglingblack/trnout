import React from "react";
import {Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../styles/header.css';

const Header = () => {
    return(
    <div>
        <Navbar className={'nav'}>
            <div className="navbar-header">
                <Navbar.Brand className="navbar-brand"><Link to={'/'}>TrnOut</Link></Navbar.Brand>
            </div>
            <NavDropdown title="" id="basic-nav-dropdown" drop={'left'}>
                <NavDropdown.Item><Link to={'/report'}>Report</Link></NavDropdown.Item>
            </NavDropdown>
        </Navbar>
    </div>
    )
};

export default Header;
