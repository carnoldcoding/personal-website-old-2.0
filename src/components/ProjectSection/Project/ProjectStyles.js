import styled from 'styled-components'

export const ProjectContainer = styled.div`
    display: flex;
    margin: 5rem 1rem;
    `

export const ProjectWrapper = styled.div`
    display: flex;
    padding: 0 10rem;
    flex: 1 1 100%;
    
    @media screen and (max-width: 800px){
        flex-direction: column;
        padding: 1rem;
    }
`
export const TextWrapper = styled.div`
    z-index: 0;
    flex: 1 1 60%;
    margin: 1 1rem;

    background: #0d0c0c;
    border-radius: 1rem;
    padding: 1rem;
    transition: all 1s ease;

`

export const ProjectHeader = styled.div`
    font-size: 2rem;
    line-height: 4rem;
`

export const ProjectComment = styled.div`
    color: var(--green);
`

export const ProjectSubtitle = styled.div`
    margin-left: 1rem;
    margin-bottom: 1rem;
    line-height: 2rem;
`

export const ImageWrapper = styled.div`
    z-index: 1;
    display: flex;
    flex: 1 1 40%;
    justify-content: flex-end;
    margin-right: 3rem;
`
export const ImageLink = styled.a`

`

export const Image = styled.img`
    --size: 20rem;
    object-fit: cover;
    width: var(--size);
    height: var(--size);
    border-radius: 1rem;

    transition: all .2s ease;
    
    @media screen and (min-width: 800px){
        :hover{
            transform: scale(1.1);
        }
    }
`