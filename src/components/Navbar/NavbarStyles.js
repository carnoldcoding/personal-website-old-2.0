import styled from 'styled-components'
import {motion} from 'framer-motion'
import {NavLink as Link} from 'react-router-dom'


export const Nav = styled.nav`
    z-index: 10;
    position: sticky;
    top: 0;
    height: 80px;
    font-size: 20px;

    background: #0d0c0c;

    *{
        background: transparent;
    }
`;

export const NavMenu = styled.nav`
    display: flex;
    padding: 1rem 3rem;

    *{
        text-decoration: none;
    }
`
export const NavIcon = styled(motion.nav)`
    display: flex;
    flex: 1 1 100%;
    padding: 1rem;
    color: white;

    &:hover {
        //cursor: pointer;
    }
`
export const NavItems = styled(motion.div)`
    display: flex;
`

export const NavItemLink = styled(Link)`
`

export const NavIconLink = styled(Link)`
    display: flex;
    color: white;

    transition: all .2s ease;
    :hover{
        color: var(--lightblue);
        *{
            color: white;
        }
    }
`

export const NavItem = styled(motion.div)`
    padding: 1rem;
    margin-right: 2rem;
    color: white;

    &:hover {
        cursor: pointer;
        transition: .4s ease-in-out;
        color: var(--lightblue)
    }

    @media screen and (max-width: 770px){
        display: none;
    }
`

export const ColorChange = styled.div`
    display: flex;
    color: ${props=>props.color};
    transition: all .2s ease;

    :hover{
        color: white;
    }
`

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 770px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 80%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`