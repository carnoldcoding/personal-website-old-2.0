import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'


export const MobileContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    transition: 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;


    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen })=>(isOpen ? '0' : '-100%')};
`

export const MobileWrapper = styled.div`
    color: white;
    display: flex;
    flex: 1 1 100%;
    justify-content: center;
    flex-direction: column;
`

export const MobileItem = styled(Link)`
    margin: 4rem;
    font-size: 1.4rem;
    text-decoration: none;
    color: white;

    &:hover {
        color: var(--lightblue)
    }
`