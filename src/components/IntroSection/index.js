import React, {useEffect} from 'react'
import {IntroContainer,
        HeaderWrapper, Header} from './IntroStyles'
import { useIsMobile } from '../../hooks'
import {useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const IntroSection = () => {
    /*
        Mediaquery hook to make animations responsive on mobile devices
        ScrollY to store window scroll value
    */
    const isMobile = useIsMobile()
    /*
        Variants are used in framer motion to responsively change animations across
        different mediums in conjunction with a mediaQuery.
    */
        const headerVariants = isMobile
        ?{
            hidden: {
                scale: 0
            },
            visible: {
                scale: 1,
                transition: {
                    duration: 2
                }
            }
        }
        :{
            hidden: {
                x: -700
            },
            visible: {
                x: 0,
                transition: {
                    duration: 2
                }
            }
        }

    /*
        controls are framer motions way of controlling animations
        the useInView hook in conjunction with controls allow us to start
            animations when they are in view
    */

    const controls = useAnimation();
    const { ref, inView } = useInView({
    });

    useEffect(() => {
        console.log(inView)
        if (inView){
            controls.start('visible');
        }
        if (!inView){
            controls.start('hidden');
        }
    }, [controls, inView])

    

    return (
        <>
        
            <IntroContainer>
                <HeaderWrapper>
                    <Header ref={ref} 
                    animate={controls} 
                    variants={headerVariants}>
                        Software Engineer | Web Developer
                    </Header>
                </HeaderWrapper>
            </IntroContainer>
        </>
    )
}

export default IntroSection
