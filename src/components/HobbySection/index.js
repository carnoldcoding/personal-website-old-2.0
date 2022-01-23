import React, {useEffect} from 'react'
import { useIsMobile } from '../../hooks'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HobbyContainer, CardWrapper, CardTitle,
CardButton, CardBody, CardContent, HobbyTitle} from './HobbyStyles'

import { 
    CardVariants, ContainerVariants, TitleVariants } from './Variants'

import bgImage from '../../images/Gaming.jpeg'
import animeImage from '../../images/Anime.jpeg'
import programImage from '../../images/Programming.jpeg'


const HobbySection = () => {
    const isMobile = useIsMobile()
    const controls = useAnimation()
    
    const { ref, inView } = useInView({
        threshold: .1
    });

    useEffect(() => {
        if (inView){
            controls.start('visible');
        }
        if (!inView){
            controls.start('hidden')
        }

    }, [controls, inView])

    return (
        <>
        <HobbyTitle ref={ref} animate={controls} variants={TitleVariants(isMobile)}>
            .Passions
            <span style={{color: "var(--lightestblue)"}}>()</span>
        </HobbyTitle>
        <HobbyContainer
            ref={ref}
            animate={controls}
            variants={ContainerVariants(isMobile)}
            >
            <CardWrapper 
            url={bgImage}>
                <CardContent>
                    <CardTitle>
                        Video Games
                    </CardTitle>
                    <CardBody>
                        Playing and developing games has been 
                        a passion and hobby of mine.
                    </CardBody>
                </CardContent>
            </CardWrapper>

            <CardWrapper url={animeImage}>
                <CardContent>
                    <CardTitle>
                        Anime
                    </CardTitle>
                    <CardBody>
                        A lot of my philosophies and artistic
                        inspirations come from Japanese culture.
                    </CardBody>
                </CardContent>
            </CardWrapper>

            <CardWrapper url={programImage}>
                <CardContent>
                    <CardTitle>
                        Programming
                    </CardTitle>
                    <CardBody>
                        Programming is the way I connect to the 
                        world around me.
                    </CardBody>
                </CardContent>
            </CardWrapper>
            
        </HobbyContainer>
        </>
    )
}

export default HobbySection
