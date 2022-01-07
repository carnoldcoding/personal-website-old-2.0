import { useIsMobile } from '../../hooks'

export const headerVariants = (isMobile) => isMobile
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
                    type: "spring",
                    duration: 3
                }
            }
        }

export const codeBox = (isMobile) => isMobile
?{
    hidden:{
        opacity: 0,
        x: -200
    },
    visible:{
        opacity: 1,
        x: 0,
        transition:{
            duration: 3,
            type: "spring",
            staggerChildren: 1.2,
        }
    }
}
:{
    hidden:{
        opacity: 0,
        x: -700
    },
    visible:{
        opacity: 1,
        x: 0,
        transition:{
            duration: 3,
            type: "spring",
            staggerChildren: 1.2,
        }
    }
}

export const codeItems = (isMobile) => isMobile
?{
    hidden:{
        x:-200,
        opacity: 0
    },
    visible:{
        x: 0,
        opacity: 1,
        transition: {
            duration: 2
        }
    }
}
:{
    hidden:{
        x:-700,
        opacity: 0
    },
    visible:{
        x: 0,
        opacity: 1,
        transition: {
            duration: 2
        }
    }
}