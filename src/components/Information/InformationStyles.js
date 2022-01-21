import styled from "styled-components"
import Me from "../../images/Profile.jpg"

export const InformationContainer = styled.div`
    color: white;
    margin: 5rem 0;
    padding: 0 20vw;

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
    border: 5px outset var(--lightblue);
    background-image: url(${Me});

    transition: all .2s ease;

    :hover{
        transform: scale(1.1);
    }
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
    margin: 2rem 0;
    @media screen and (max-width: 800px){
        flex-direction: column;
        margin-bottom: 5rem;
    }
`

export const ContactInfo = styled.div`
    flex: 1 1 50%;
    @media screen and (max-width: 800px){
        margin: 1rem 0;
    }
`