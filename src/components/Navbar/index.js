import React from 'react'
import {Nav, NavItem, NavMenu, 
    NavIcon, ColorChange, NavItems, MobileIcon, NavItemLink, NavIconLink} from './NavbarStyles'
import {FaBars} from 'react-icons/fa';
import {container, item} from './Variants'

const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav>
            <NavMenu>
                <NavIcon variants={item} initial="hidden" animate="visible">
                    <NavIconLink to="/">
                        Cam.<ColorChange color="var(--lightblue)">Coding()</ColorChange>
                    </NavIconLink>
                </NavIcon>
                
                <NavItems 
                variants={container} 
                initial="hidden"
                animate="visible">
                    <NavItemLink to="/">
                        <NavItem variants={item}>Projects</NavItem>
                    </NavItemLink>
                    <NavItemLink to="/contact">
                        <NavItem variants={item}>Contact</NavItem>
                    </NavItemLink>
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
