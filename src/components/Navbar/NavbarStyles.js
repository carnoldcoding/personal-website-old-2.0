import styled from 'styled-components'


export const Nav = styled.nav`
    background: #000;
    height: 80px;
    margin-top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    margin: 0;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavItem = styled.nav`
    color: white;
`;