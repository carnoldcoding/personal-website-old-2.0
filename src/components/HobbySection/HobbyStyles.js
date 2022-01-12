import styled from 'styled-components'
import {motion} from 'framer-motion'

export const HobbyContainer = styled(motion.div)`
    display: flex;
    background-color: lightgreen;
    justify-content: center;
`

export const LeftCardWrapper = styled(motion.div)`
    height: 60vh;
    width:  20vw;

    padding: 1rem;
    margin: 2rem;

    border-radius: 1rem;
    box-shadow: 4px 4px 4px grey;

    background-color: var(--darkpurple);

`

export const MidCardWrapper = styled(motion.div)`
    height: 60vh;
    width:  20vw;

    padding: 1rem;
    margin: 2rem;
    margin-top: 10rem;

    border-radius: 1rem;
    box-shadow: 4px 4px 4px grey;

    background-color: var(--darkpurple);

`

export const RightCardWrapper = styled(motion.div)`
    height: 60vh;
    width:  20vw;

    padding: 1rem;
    margin: 2rem;
    margin-top: 20rem;

    border-radius: 1rem;
    box-shadow: 4px 4px 4px grey;

    background-color: var(--darkpurple);
`

export const CardTitle = styled.div`
    background-color: transparent;
    color: white;
`