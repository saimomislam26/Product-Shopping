import React from 'react'
import Logo from '../assets/logo.png'
import './Header.css';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = () => {
    return (
        <div>

            <Navbar style={{
                backgroundColor: "#D70F64",
                height: "70px",
            }} >
                <NavbarBrand href="/" className="Brand">
                    <img src={Logo} alt="logo" width="100px" />
                </NavbarBrand>

                <Nav className="ml-auto" >
                    <NavItem className="ml-auto">
                        <NavLink href="#" className="NavLink">Component</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}


export default Header;