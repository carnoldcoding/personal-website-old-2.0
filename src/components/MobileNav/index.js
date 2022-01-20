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
                    <MobileItem>
                        Projects
                    </MobileItem>
                    <MobileItem>
                        Contact
                    </MobileItem>
                </MobileWrapper>
            </MobileContainer>
        </>
    )
}

export default MobileNav
