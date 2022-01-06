import React from 'react'

import {
    HeroContainer,
    Image,
    Name,
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

    /*
        * Since I am overlapping images, I had to use absolute positioning.
        * Absolute positioning removes images from the DOM which means that
            the parent div couldn't inherit the height.
        * To solve this I have an image of the same dimensions that is hidden
            with relative positioning on it to pass the height into the container.

    */

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
