import styled from 'styled-components'

export const FooterContainer = styled.div`
    min-height: 80px;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    //background: linear-gradient(to bottom, purple, var(--purple) 50%, var(--darkpurple));
    background: black;
    * {
        background: transparent;
    }

    font-size: 1.1rem;

    @media screen and (max-width: 700px){
        height: auto;
    }
`

export const FooterWrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;

    @media screen and (max-width: 700px){
        flex-direction: column;
    }

    * {
        @media screen and (max-width: 700px){
            margin-top: 1.5rem;
            text-align: center;
        }
    }
`

export const FooterSubtitleWrapper = styled.p`
    flex-basis: 100%;
    display: flex;
    justify-content: center;
`
export const FooterSubtitle = styled.p`
`

export const WebsiteRightsWrapper = styled.div`
    flex-basis: 100%;
    display: flex;
    justify-content: center;
`
export const WebsiteRights = styled.p`
    font-size: .9rem;
`

export const FooterIconWrapper = styled.div`
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 700px){
            margin-bottom: 2rem;
    }
`

export const FooterIcon = styled.a`
    margin: 0 1rem;
    font-size: 1.4rem;
    color: white;

    text-decoration: none;

    transition: all .3s ease-in-out;
    :hover{
        color: var(--lightblue);
        cursor: pointer;
    }

    @media screen and (max-width: 700px){
        font-size: 2rem;
    }
`