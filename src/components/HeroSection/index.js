import React, {useState, useEffect} from 'react'
import {HeroContainer, Background, Foreground, Middleground, Name,
HeroWrapper} from './HeroStyles'
import middleground from '../../images/Middle.png'
import foreground from '../../images/Foreground-Fade.png'
import background from '../../images/Background.png'
import name from '../../images/cameron.png'


const HeroSection = () => {

    /*
        useState is here to update the offset variable every time that
        scrollbar position is changed. Used in composition with useEffect()
    */
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    /*
        useEffect with empty list means the effect will occur upon mounting the
        component. At component mount we want to add a scroll eventlistener.

        the return statement removes the eventlistener when the component is unmounted.
    */
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    return (
        <HeroContainer>
            <HeroWrapper>
                <Background src={background} offset={offsetY}/>
                <Middleground src={middleground} offset={offsetY}/>
                <Name src={name} offset={offsetY}/>
                <Foreground src={foreground} offset={offsetY}/>
            </HeroWrapper>
        </HeroContainer>
    )
}

export default HeroSection
