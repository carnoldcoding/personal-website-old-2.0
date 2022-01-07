import styled from 'styled-components'
import { motion } from 'framer-motion'

export const IntroContainer = styled.div`
    position: relative;
    height: 1000px;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const HeaderWrapper = styled.div`
    
`

export const Header = styled(motion.div)`
    color: white;
    font-size: 2rem;
    
    background: transparent;
    @media screen and (max-width: 770px){
        font-size: 1rem;
    }
`