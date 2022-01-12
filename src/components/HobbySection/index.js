import React, {useEffect} from 'react'
import { useIsMobile } from '../../hooks'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HobbyContainer, LeftCardWrapper, CardTitle,
        MidCardWrapper, RightCardWrapper, CardsWrapper } from './HobbyStyles'
import { 
    LeftCardVariants, 
    MidCardVariants, 
    RightCardVariants,
    StaggerContainer } from './Variants'

const HobbySection = () => {
    const isMobile = useIsMobile()
    const controls = useAnimation()
    const { ref, inView } = useInView({});

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
        <HobbyContainer
            ref={ref}
            animate={controls}
            variants={StaggerContainer}>
            <LeftCardWrapper
            variants={LeftCardVariants(isMobile)}>
                <CardTitle>
                    Hello
                </CardTitle>
            </LeftCardWrapper>

            <MidCardWrapper
            variants={MidCardVariants(isMobile)}>
                <CardTitle>
                    Hello
                </CardTitle>
            </MidCardWrapper>

            <RightCardWrapper
            variants={RightCardVariants(isMobile)}>
                <CardTitle>
                    Hello
                </CardTitle>
            </RightCardWrapper>
        </HobbyContainer>
        </>
    )
}

export default HobbySection
