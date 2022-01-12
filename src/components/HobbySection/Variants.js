export const StaggerContainer = (isMobile) => isMobile
    ?{
            hidden: {
            },

            visible: {
            }
        }
        :{
            hidden: {
            },

            visible: {
                transition: {
                    staggerChildren: 2
                }
            }
        }

export const LeftCardVariants = (isMobile) => isMobile
    ?{
            hidden: {
            },

            visible: {
            }
        }
        :{
            hidden: {
                opacity: 0,
                y: '10vh'
            },

            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 2,
                }
            }
        }
export const MidCardVariants = (isMobile) => isMobile
    ?{
            hidden: {
            },

            visible: {
            }
        }
        :{
            hidden: {
                opacity: 0,
                y: '10vh'
            },

            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 2,
                }
            }
        }

export const RightCardVariants = (isMobile) => isMobile
    ?{
            hidden: {
            },

            visible: {
            }
        }
        :{
            hidden: {
                opacity: 0,
                y: '10vh'
            },

            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 2,
                }
            }
        }