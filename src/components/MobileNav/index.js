import React from 'react'
import {
    MobileContainer,
    MobileWrapper,
    MobileItem
} from './MobileStyles'

const MobileNav = ({ toggle, isOpen }) => {
    return (
        <>
            <MobileContainer isOpen={isOpen} onClick={toggle}>
                <MobileWrapper>
                    <MobileItem to="/projects">
                        Projects
                    </MobileItem>
                    <MobileItem to="/contact">
                        Contact
                    </MobileItem>
                </MobileWrapper>
            </MobileContainer>
        </>
    )
}

export default MobileNav
