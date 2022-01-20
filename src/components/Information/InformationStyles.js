import styled from "styled-components"
import Me from "../../images/Profile.jpg"

export const InformationContainer = styled.div`
    color: white;
    margin: 5rem 0;
    padding: 0 25vw;
    height: 55vh;

    transition: all .2s ease;

    * {
        background: transparent;
    }
`

export const InformationWrapper = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 800px){
        flex-direction: column;
        align-items: center;
    }

`

export const PhotoWrapper = styled.div`
    flex: 1 1 30%;
    margin: 0 1rem;
`

export const Photo = styled.div`
    height: 300px;
    width: 300px;
    background-size: contain;
    border-radius: 100%;
    background-image: url(${Me});
`

export const ContactWrapper = styled.div`
    flex: 1 1 70%;
    text-align: center;
    margin: 4rem 0;
    @media screen and (max-width: 800px){
        margin: 2rem 0;
    }
`

export const ContactHeader = styled.div`
    font-size: 2rem;
`

export const ContactIcons = styled.div`
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    font-size: 2rem;

    text-decoration: none;
`

export const ContactIcon = styled.a`
    margin: 0 1rem;
    font-size: 2rem;
    transition: all .3s ease;
    color: white; 

    :hover{
        color: var(--lightblue);
        cursor: pointer;
    }
`

export const ContactInfoWrapper = styled.div`
    display: flex;
    @media screen and (max-width: 800px){
        flex-direction: column;
    }
`

export const ContactInfo = styled.div`
    flex: 1 1 50%;
    @media screen and (max-width: 800px){
        margin: 1rem 0;
    }
`