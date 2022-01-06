import React from 'react'

import {
    HeroContainer,
    Image,
    Name,
    SetHeight,
    ImageHeight
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
    const backgroundY = useTransform(scrollY, [0,300], [0,-120]);
    const middlegroundY = useTransform(scrollY, [0,300], [0,-50]);
    const foregroundY = useTransform(scrollY, [0,0], [0,0]);
    const nameY = useTransform(scrollY, [0,300], [0,300]);


    return (
        <HeroContainer style={{ y: foregroundY, x: 0}}>
                <ImageHeight style={{ y: foregroundY, x: 0}} src={foreground}/>

                <Image style={{ y: backgroundY, x: 0}} src={background} />
                <Image style={{ y: middlegroundY, x: 0}} src={middleground}/>
                <Name style={{ y: nameY, x: 0}} src={name} />
                <Image style={{ y: foregroundY, x: 0}} src={foreground} />

        </HeroContainer>
    )
}

export default HeroSection
