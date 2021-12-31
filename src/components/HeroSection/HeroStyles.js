import styled from 'styled-components'

export const HeroContainer = styled.div`
    display: flex;
    height: 5000px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const HeroTitle = styled.h1`
    z-index: 1;
    color: white;
    background: transparent;
`

export const ImageBox = styled.div`
height: 10000px;
    background: transparent;
    position: relative;
    top: 0;
    left: 0;
`

export const Image = styled.img`

    background: transparent;
    z-index: 2;
    height: auto;
    width: 1800px;
    position: relative;
    top: 0;
    left: 0;
    transform: translateY(${props => props.offset * -.07}px)
`

export const Image2 = styled.img`
    
    z-index: 1;
    background: transparent;
    height: auto;
    width: 1800px;
    position: absolute;
    top: 0px;
    left: 0px;
    transform: translateY(${props => props.offset * .1}px)
`

export const Image3 = styled.img`
    z-index: 4;
    background: transparent;
    height: auto;
    width: 1800px;
    position: absolute;
    top: 0px;
    left: 0px;
    transform: translateY(${props => props.offset * -.3}px)
`

export const Heading = styled.h1`
    z-index: 3;
    font-size: 50px;
    background: transparent;
    position: absolute;
    top: 400px;
    left: 650px;
    color: white;
    transform: translateY(${props => props.offset * .3}px)
`
