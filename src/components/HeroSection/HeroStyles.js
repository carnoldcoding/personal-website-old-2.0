import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HeroContainer = styled.div`
    background: transparent;
    position: relative;
    height: 100vh;
`

export const HeroWrapper = styled.div`
    display: flex;
    justify-content: center;
    background: blue;   
`

export const Parallax = styled(motion.div)`
    position: absolute;
    background: transparent;
`

export const Image = styled.img`
    background: transparent;

    width: 100%;
    height: auto;
`

export const Name = styled.img`
    background: transparent;
    width: 30%;
    height: auto;

    margin-left: 31%;
    margin-top: 22%;
`