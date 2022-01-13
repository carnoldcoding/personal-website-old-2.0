export const CardVariants = (isMobile, i) => isMobile
    ?{
            hidden: {

            },

            visible: {

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
                }
            }
        }