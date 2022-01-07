import React, {useEffect} from 'react'
import {IntroContainer,
        HeaderWrapper, Header,
    SubtitleWrapper, Subtitle, ColorChange,
    SubtitleTab, CodeBox} from './IntroStyles'
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
                x: -700,
                opacity: 0
            },
            visible: {
                x: 0,
                opacity: 1,
                transition: {
                    duration: 2
                }
            }
        }
        :{
            hidden: {
                x: -700,
                opacity: 0
            },
            visible: {
                x: 0,
                opacity: 1,
                transition: {
                    duration: 2
                }
            }
        }

        const subtitleVariants = isMobile
        ? {
            hidden: {
                x: -300,
                opacity: 0
            },
            visible: {
                x: 0,
                opacity: 1,
                transition: {
                    duration: 2,
                    delay: 1
                }
            }
        }
        :{
            hidden: {
                x: -700,
                opacity: 0
            },
            visible: {
                x: 0,
                opacity: 1,
                transition: {
                    delay: 1.5, 
                    duration: 2
                }
            }
        }

        const tabVariants = isMobile
        ? {
            hidden: {
                x: -300,
                opacity: 0
            },
            visible: {
                x: 0,
                opacity: 1,
                transition: {
                    duration: 2,
                    delay: 3
                }
            }
        }
        :{
            hidden: {
                x: -700,
                opacity: 0
            },
            visible: {
                x: 0,
                opacity: 1,
                transition: {
                    delay: 3, 
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
                        .
                        <ColorChange color="var(--lightblue)">About</ColorChange>
                        <ColorChange color="var(--magenta)">(</ColorChange>
                        me
                        <ColorChange color="var(--magenta)">)</ColorChange>
                    </Header>
                </HeaderWrapper>

                <SubtitleWrapper>
                    <CodeBox>
                        <Subtitle 
                        ref={ref}
                        animate={controls}
                        variants={subtitleVariants}>
                        <ColorChange color="var(--lightpink)">Education: </ColorChange>
                        <ColorChange color="var(--magenta)">{'{'} </ColorChange>
                        </Subtitle>
                        <SubtitleTab
                        ref = {ref}
                        animate={controls}
                        variants={tabVariants}
                        >
                            <ColorChange color="var(--purple)">College:</ColorChange> "Ithaca College",
                            <br/>
                            <br />
                            <ColorChange color="var(--purple)">Degree:</ColorChange> "B.S in Computer Science",
                            <br />
                            <br />
                            <ColorChange color="var(--purple)">Minor:</ColorChange> "Web Development",
                            <br/>
                            <br/>
                            <ColorChange color="var(--magenta)">{'}'} </ColorChange>
                        </SubtitleTab>
                    </CodeBox>
                </SubtitleWrapper>
            </IntroContainer>
        </>
    )
}

export default IntroSection
