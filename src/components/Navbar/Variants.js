export const container = {
    hidden: {
    },
    visible: {
        transition: {
            staggerChildren: .5
        }
    }
}

export const item = {
    hidden: {
        opacity: 0,
        y: '-5vh'
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .8
        }
    }
}