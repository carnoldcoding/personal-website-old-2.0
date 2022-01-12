import styled from 'styled-components'
import { motion } from 'framer-motion'

export const IntroContainer = styled.div`
    background: transparent;
    margin-bottom: 10vh;
`

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const Header = styled(motion.div)`
    color: white;
    padding: 3rem;
    margin: 1rem;
    font-size: 3.3rem;
`

export const CodeWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 20%;
    font-size: 1rem;
`
export const CodeBox = styled(motion.div)`
    width: 25rem;
`

export const Code = styled(motion.div)`
    color: white;
    padding: 1rem;
`

export const TabCode = styled(motion.div)`
    color: white;
    padding: 1rem;
    padding-left: 2rem;
`

export const SpriteWrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    height: 20%;
    background-color: lightblue;
    justify-content: center;

`

export const Sprite = styled(motion.div)`
    height: 200px;
    width: 175px;
    background-image: url("${props=>props.url}");
`

export const Color = styled.span`
    color: ${props => props.color}
`