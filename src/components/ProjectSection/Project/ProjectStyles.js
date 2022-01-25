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
        align-items: center;
        flex-direction: column;
    }
`
export const TextWrapper = styled.div`
    flex: 1 1 60%;
    line-height: 3rem;
    margin: 1 1rem;

`

export const ProjectHeader = styled.div`
    font-size: 2rem;
`

export const ProjectComment = styled.div`
    color: var(--green);
`

export const ProjectSubtitle = styled.div`
    margin-left: 1rem;
`

export const ImageWrapper = styled.div`
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
    :hover{
        transform: scale(1.1);
    }
`