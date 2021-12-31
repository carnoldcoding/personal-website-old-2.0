import styled from 'styled-components'

export const HeroContainer = styled.div`
    display: flex;
    height: 2000px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const HeroTitle = styled.h1`
    z-index: 1;
    color: white;
    background: transparent;
`

export const Image = styled.img`
    transform: translateY(${props => props.offset * .2}px)
`
