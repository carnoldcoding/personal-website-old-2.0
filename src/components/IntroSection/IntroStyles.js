import styled from 'styled-components'
import { motion } from 'framer-motion'

export const IntroContainer = styled.div`
    height: 1000px;
    background: transparent;
`

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const Header = styled(motion.div)`
    color: white;
    padding: 3rem;
    margin: 1rem;
    font-size: 3rem;
`

export const CodeWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 20%;
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

export const Color = styled.span`
    color: ${props => props.color}
`