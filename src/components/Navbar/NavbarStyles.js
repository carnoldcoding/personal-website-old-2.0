import styled from 'styled-components'


export const Nav = styled.nav`
    height: 80px;
    margin-top: 0px;
    display: flex;
    justify-content: center;
    font-size: 30px;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavMenu = styled.nav`
    display: flex;
    padding: 2rem;
`
export const NavIcon = styled.nav`
    padding: 1rem;
    color: white;

    &:hover {
        transition: .4s ease-in-out;
        color: var(--lightblue);
        cursor: pointer;
    }
`

export const NavItem = styled.nav`
    padding: 1rem;
    color: white;
`;