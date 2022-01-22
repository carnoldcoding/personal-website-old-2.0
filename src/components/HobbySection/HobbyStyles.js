import styled from 'styled-components'
import {motion} from 'framer-motion'

export const HobbyContainer = styled(motion.div)`
    display: flex;
    background-color: black;
    justify-content: center;

    @media screen and (max-width: 780px){
        flex-direction: column;
    }
`

export const HobbyTitle = styled(motion.div)`
    display: flex;
    color: white;
    font-size: 3rem;
    justify-content: center;
    `

export const CardTitle = styled.h2`
    background-color: transparent;
    color: white;
    position: relative;

    width: max-content;

    ::after{
        content: "";
        position: absolute;
        width: calc(100% + var(--padding));
        background: var(--lightpink);
        height: 4px;

        left: calc(var(--padding) * -1);
        bottom: 0;
        transform-origin: left;
        transform: scaleX(0);
        transition: all .5s ease;
    }
`


export const CardContent = styled.div`
    --padding: 1.5rem;
    background: linear-gradient(
        hsl(0 0% 0% / 0),
        hsl(20 0% 0% / .5) 10%,
        hsl(0 0% 0% /1)
    );
    height: 100%;

    padding: var(--padding);
    transition: transform .5s ease;

    //Move the card content off of the card,
    //Then use translateY to bring it back
    //Need the units to be responsive
    transform: translateY(50%);

    @media screen and (max-width: 800px){
        transform: translateY(65%);
    }

`

export const CardWrapper = styled(motion.div)`
    line-height: 2;

    max-width: 20vw;
    min-width: 35ch;

    padding: 10rem 0 0;
    margin: 2rem;


    border: 1.5px solid black;
    border-radius: .25rem;

    background-image: url(${props=>props.url});
    background-size: cover;
    transition: all .5s ease-in-out;

    overflow: hidden;


    :hover{
        transform:  scale(1.05);

        ${CardTitle}:after{
            transform: scaleX(1);
        }
        ${CardContent}{
            transform: translateY(0);
            transition-delay: 500ms;
        }
    }

`


export const CardBody = styled.p`
    background: transparent;
    color: white;
    margin-bottom: 1rem;
`

export const CardButton = styled.a`
    color: black;
    padding: .7rem;

    display: inline;

    cursor: pointer;
    text-decoration: none;

    background: var(--green);
    border-radius: .3rem;
    transition: all .5s ease-in-out;


    :hover{
        background: white;
    }
    :focus{
        background: white;
    }
`