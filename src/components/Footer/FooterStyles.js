import styled from 'styled-components'

export const FooterContainer = styled.div`
    height: 80px;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    //background: linear-gradient(to bottom, purple, var(--purple) 50%, var(--darkpurple));
    background: linear-gradient(to bottom, var(--darkpurple), transparent);
    * {
        background: transparent;
    }

    font-size: 1.1rem;
`

export const FooterWrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
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

`

export const FooterIconWrapper = styled.div`
    flex-basis: 100%;
    display: flex;
    justify-content: center;
`

export const FooterIcon = styled.div`
    margin: 0 1rem;
    font-size: 1.4rem;

    transition: all .3s ease-in-out;
    :hover{
        color: var(--lightblue);
        cursor: pointer;
    }
`