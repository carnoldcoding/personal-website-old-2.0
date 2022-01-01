import styled from 'styled-components'
import {motion} from 'framer-motion'

export const IntroContainer = styled.div`
    position: relative;
`

export const IntroWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 1000px;
    width: 100%
`

export const IntroItem = styled(motion.div)`
    padding: 1rem;
    margin: 1rem;
    fontSize: 10rem;
    color: white;
    
    flex: 1 1 100%;
    `