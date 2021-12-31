import React from 'react'
import {Nav, NavItem, NavMenu, 
    NavIcon, ColorChange, NavItems} from './NavbarStyles'

const Navbar = () => {
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
            </NavMenu>
        </Nav>
        </>
    )
}

export default Navbar
