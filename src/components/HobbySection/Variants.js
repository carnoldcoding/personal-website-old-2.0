export const ContainerVariants = (isMobile) => isMobile
    ?{
        hidden: {
            opacity: 0,
            x: "-10vw"
        },

        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 2,
                delay: .75
            }
        }

    }
    :{
        hidden: {
            opacity: 0,
            y: "20vh"
        },
        visible: {
            opacity: 1,
            y: 0,

            transition: {
                duration: 2,
                delay: .75
            }
        }
    }

export const TitleVariants = (isMobile) => isMobile
?{
    hidden: {
        opacity: 0,
        x: "-10vh"
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2
        }
    }
}
:{
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 2
        }
    }
}


export const CardVariants = (isMobile, i) => isMobile
    ?{
            hidden: {
                opacity: 0,
                x: '-20vw'
            },

            visible: {
                opacity: 1,
                x: 0,
                transition: {
                    delay: i,
                    duration: 2,
                    type: "spring"
                }
            }
        }
        :{
            hidden: {
                opacity: 0,
                y: '20vh'
            },

            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    delay: i,
                    duration: 2,
                    type: "spring"
                }
            }
        }