import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';

class Navigation extends Component {

    state = {
        isNavOpen: false
    }

    navToggle = () => {
        this.setState({ isNavOpen: !this.state.isNavOpen })
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <div className="container">
                        <NavbarBrand href="/">Rajmahal Restaurant</NavbarBrand>
                        <NavbarToggler onClick={this.navToggle} />
                        <Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link to="/" className="nav-link">Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/menu" className="nav-link">Menu</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/about" className="nav-link">About</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/contact" className="nav-link">Contact</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;
