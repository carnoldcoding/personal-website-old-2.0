import React from 'react'

import {
    HeroContainer,
    HeroWrapper,
    Parallax,
    Image,
    Name
} from './HeroStyles'

import {
    useViewportScroll,
    useTransform,
} from "framer-motion"

/* Import Images */
import middleground from '../../images/Middle.png'
import foreground from '../../images/Foreground-Fade.png'
import background from '../../images/Background.png'
import name from '../../images/cameron.png'


const HeroSection = () => {
    /*
        ==Set up Parallax effect==
        scrollY stores the current window scroll y value
        useTransform() takes a motionValue, and value ranges then 
            returns a transformed MotionValue
    */
    const { scrollY } = useViewportScroll();
    const backgroundY = useTransform(scrollY, [0,300], [0,200]);
    const middlegroundY = useTransform(scrollY, [0,300], [0,50]);
    const foregroundY = useTransform(scrollY, [0,300], [0,-100]);
    const nameY = useTransform(scrollY, [0,300], [0,170]);


    return (
        <HeroContainer>
            <HeroWrapper>
                <Parallax style={{ y: backgroundY, x: 0}}>
                    <Image src={background} />
                </Parallax>
                
                <Parallax style={{y: middlegroundY, x: 0}}>
                    <Image src={middleground} />
                </Parallax>
                

                <Parallax style={{y: nameY, x: 0 }}>
                    <Name src={name} />
                </Parallax>

                <Parallax style={{y: foregroundY, x: 0 }}>
                    <Image src={foreground} />
                </Parallax>

            </HeroWrapper>
        </HeroContainer>
    )
}

export default HeroSection
