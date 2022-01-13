import React, {useEffect} from 'react'
import { useIsMobile } from '../../hooks'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HobbyContainer, CardWrapper, CardTitle,
CardButton, CardBody, CardContent} from './HobbyStyles'
import { 
    CardVariants } from './Variants'

import bgImage from '../../images/Gaming.jpeg'
import animeImage from '../../images/Anime.jpeg'
import programImage from '../../images/Programming.jpeg'


const HobbySection = () => {
    const isMobile = useIsMobile()
    const controls = useAnimation()
    
    const { ref, inView } = useInView({
        threshold: .3
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
        <HobbyContainer
            ref={ref}
            animate={controls}>
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
                    <CardButton>
                        Expand
                    </CardButton>
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
                    <CardButton>
                        Expand
                    </CardButton>
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
                    <CardButton>
                        Expand
                    </CardButton>
                </CardContent>
            </CardWrapper>
            
        </HobbyContainer>
    )
}

export default HobbySection