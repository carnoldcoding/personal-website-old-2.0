import styled from 'styled-components'
import { motion } from 'framer-motion'

export const IntroContainer = styled.div`
    height: 1000px;
`

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const Header = styled(motion.div)`

    color: white;
    font-size: 2rem;
    
    background: transparent;
    @media screen and (max-width: 770px){
        font-size: 2rem;
    }
`

export const SubtitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const Subtitle = styled(motion.div)`
    color: white;
    margin: 1rem;
    margin-right: 10rem;

    @media screen and (max-width: 770px){
        font-size: 1.2rem;
    }
`
export const SubtitleTab = styled(motion.div)`
    color: white;
    margin-bottom: 1rem;
    margin-left: 5rem;
`

export const CodeBox = styled.div`
    display: flex;
    width: 25vw;
    flex-wrap: wrap;

    @media screen and (max-width: 770px){

    }
`

export const ColorChange = styled.span`
    color: ${props => props.color}
`