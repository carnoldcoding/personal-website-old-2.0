import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: transparent;
    position: relative;
    height: 100%;
`

export const HeroWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 860px;
`

export const Background = styled.img`
    z-index: 1;
    position: absolute;

    height: auto;
    width: 100%;
    background: transparent;

    transform: translateY(${props => props.offset * .2}px)
`

export const Middleground = styled.img`
    z-index: 2;
    position: absolute;

    height: auto;
    width: 100%;
    background: transparent;

    transform: translateY(${props => props.offset * -.07}px)
`

export const Name = styled.img`
    z-index: 3;
    position: absolute;

    height: auto;
    width: 30%;
    margin-top: 22%;
    margin-right: 7%;
    background: transparent;
    opacity: 1;

    transform: translateY(${props => props.offset * .3}px)
`

export const Foreground = styled.img`
    z-index: 4;
    position: absolute;

    height: auto;
    width: 100%;
    background: transparent;
    
    transform: translateY(${props => props.offset * -.3}px)
`


