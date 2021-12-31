import React, {useState, useEffect} from 'react'
import {HeroContainer, HeroTitle, Image} from './HeroStyles'
import CC from '../../images/CC-Glow.png'


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
        <>
            <HeroContainer>
                
                <Image src={CC} offset={offsetY}/>
                <HeroTitle>
                    Cameron Arnold
                </HeroTitle>
            </HeroContainer>
        </>
    )
}

export default HeroSection
