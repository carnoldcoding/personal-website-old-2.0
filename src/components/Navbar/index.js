import React from 'react'
import {Nav, NavItem, NavMenu, 
    NavIcon, ColorChange, NavItems, MobileIcon} from './NavbarStyles'
import {FaBars} from 'react-icons/fa';

const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav>
            <NavMenu>
                <NavIcon>
                    Cam.<ColorChange color="var(--lightblue)">Coding()</ColorChange>
                </NavIcon>
                
                <NavItems>
                    <NavItem>Home</NavItem>
                    <NavItem>Projects</NavItem>
                    <NavItem>Contact</NavItem>
                </NavItems>

                <MobileIcon onClick = {toggle}>
                    <FaBars />
                </MobileIcon>
            </NavMenu>
        </Nav>
        </>
    )
}

export default Navbar
