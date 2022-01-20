import React from 'react'
import {Nav, NavItem, NavMenu, 
    NavIcon, ColorChange, NavItems, MobileIcon} from './NavbarStyles'
import {FaBars} from 'react-icons/fa';
import {container, item} from './Variants'

const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav>
            <NavMenu>
                <NavIcon variants={item} initial="hidden" animate="visible">
                    Cam.<ColorChange color="var(--lightblue)">Coding()</ColorChange>
                </NavIcon>
                
                <NavItems 
                variants={container} 
                initial="hidden"
                animate="visible">
                    <NavItem variants={item}>Projects</NavItem>
                    <NavItem variants={item}>Contact</NavItem>
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
