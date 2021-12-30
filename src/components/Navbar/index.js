import React from 'react'
import {Nav, NavItem, NavMenu, NavIcon} from './NavbarStyles'

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavMenu>
                <NavIcon>
                    Cam.Coding()
                </NavIcon>

                <NavItem>
                    whoami
                </NavItem>
            </NavMenu>
        </Nav>
        </>
    )
}

export default Navbar
