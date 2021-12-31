import styled from 'styled-components'


export const Nav = styled.nav`
    z-index: 10;
    position: sticky;
    top: 0;
    height: 80px;
    font-size: 20px;
`;

export const NavMenu = styled.nav`
    display: flex;
    padding: 1rem;
`
export const NavIcon = styled.nav`
    display: flex;
    flex: 1 1 100%;
    padding: 1rem;
    margin-left: 4rem;
    color: white;

    &:hover {
        cursor: pointer;
    }
`
export const NavItems = styled.nav`
    display: flex;
    margin-right: 10rem;
`

export const NavItem = styled.nav`
    padding: 1rem;
    margin-right: 2rem;
    color: white;

    &:hover {
        cursor: pointer;
        transition: .4s ease-in-out;
        color: var(--lightblue)
    }
`;

export const ColorChange = styled.div(({color}) => ({
    display: 'flex',
    color: color
}))