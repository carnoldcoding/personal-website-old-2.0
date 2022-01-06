import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HeroContainer = styled(motion.div)`
    position: relative;
    display: flex;
    justify-content: center;

`

export const ImageHeight = styled(motion.img)`
    position: relative;
    background: transparent;
    width: 100%;
    visibility: hidden;

    @media screen and (max-width: 770px){
        height: 1000px;
        object-fit: cover; 
        object-position: 50% 0;
    }
    
`

export const Image = styled(motion.img)`
    background: transparent;
    position: absolute;
    width: 100%;

    @media screen and (max-width: 770px){
        height: 1000px;
        object-fit: cover; 
        object-position: 50% 0;
    }
`

export const Name = styled(motion.img)`
    position: absolute;
    background: transparent;
    width: 30%;
    margin-top: 20%;
    margin-left: -8%;
    
    @media screen and (max-width: 770px){
       width: 50%;
       margin-top: 50%;
    }

    
`