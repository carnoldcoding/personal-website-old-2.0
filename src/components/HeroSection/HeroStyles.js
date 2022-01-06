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
`

export const Image = styled(motion.img)`
    background: transparent;
    position: absolute;
    width: 100%;
`

export const Name = styled(motion.img)`
    position: absolute;
    background: transparent;
    width: 30%;
    margin-top: 20%;
    margin-left: -8%;
`