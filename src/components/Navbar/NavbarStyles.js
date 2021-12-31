import styled from 'styled-components'


export const Nav = styled.nav`
    height: 80px;
    margin-top: 0px;
    display: flex;
    font-size: 20px;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavMenu = styled.nav`
    display: flex;
    padding: 2rem;
    flex: 0 0 100%;
`
export const NavIcon = styled.nav`
    display: flex;
    padding: 1rem;
    color: white;

    &:hover {
        cursor: pointer;
    }
`
export const NavItems = styled.nav`
    display: flex;
    margin-left: auto;
    margin-right: 10rem;
`

export const NavItem = styled.nav`
    padding: 1rem;
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