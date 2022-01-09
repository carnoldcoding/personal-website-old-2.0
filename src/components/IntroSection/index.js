import React, { useEffect } from 'react'
import {IntroContainer, HeaderWrapper, Header, Color,
CodeWrapper, Code, CodeBox, TabCode } from './IntroStyles'
import { useIsMobile } from '../../hooks'
import { useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { codeBox, headerVariants, codeItems } from './Variants'



const IntroSection = () => {
    /*
        Mediaquery hook to make animations responsive on mobile devices
        ScrollY to store window scroll value
    */
    const isMobile = useIsMobile()

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
                <Header
                ref={ref}
                animate={controls}
                variants={headerVariants(isMobile)}>
                    .
                    <Color color="var(--lightblue)">About</Color>
                    <Color color="var(--magenta)">(</Color>
                    me
                    <Color color="var(--magenta)">)</Color>
                </Header>
            </HeaderWrapper>
            <CodeWrapper>
                <CodeBox ref={ref} animate={controls} variants={codeBox(isMobile)}>
                    <Code variants={codeItems(isMobile)}>
                        <Color color='var(--lightpink)'>Education</Color>
                        : 
                        <Color color='var(--magenta)'>{' {'}</Color>
                    </Code>
                    <TabCode variants={codeItems(isMobile)}>
                        <Color color="var(--purple)">College: </Color>
                        "Ithaca College", <br/> <br/>
                        <Color color="var(--purple)">Degree: </Color>
                        "B.S in Computer Science", <br/><br/>
                        <Color color="var(--purple)">Minor: </Color>
                        "Web Development"
                    </TabCode>
                    <Code variants={codeItems(isMobile)}>
                        <Color color="var(--magenta)">{'}'}</Color>
                    </Code>
                </CodeBox>
            </CodeWrapper>

        </IntroContainer>
        </>
    )
}

export default IntroSection
