import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: transparent;
    position: relative;
`

export const HeroWrapper = styled.div`
    height: auto;
    display: flex;
    justify-content: center;
`

export const Background = styled.img`
    z-index: 1;
    background: transparent;
    width: 100%;

    position: absolute;

    transform: translateY(${props => props.offset * .1}px)
`

export const Middleground = styled.img`
    z-index: 2;
    background: transparent;
    width: 100%;

    position: absolute;

    transform: translateY(${props => props.offset * -.07}px)
`

export const Name = styled.img`
    background: transparent;
    z-index: 3;
    width: 24%;
    margin-top: 22%;
    margin-right: 5%;

    transform: translateY(${props => props.offset * .3}px)
`

export const Foreground = styled.img`
    z-index: 4;
    background: transparent;
    width: 100%;

    position: absolute;
    
    transform: translateY(${props => props.offset * -.3}px)
`

