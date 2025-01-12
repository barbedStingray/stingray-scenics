export const displaySpring = {
    type: "spring",
    stiffness: 200,
    damping: 15,
}

export const slideVariants = {
    enter: (direction) => ({
        opacity: 0,
        y: direction > 0 ? 15 : -15,
    }),
    center: {
        opacity: 1,
        y: 0,
    },
    exit: (direction) => ({
        opacity: 0,
        y: direction > 0 ? -15 : 15,
    })
}

export const sectionVariants = {
    enter: (direction) => ({
        rotateY: direction > 0 ? -90 : 90,
        rotateX: 3,
        transformOrigin: "50% 50%",
    }),
    center: {
        rotateY: 0,
        transformOrigin: "50% 50%"
    },
    exit: (direction) => ({
        rotateY: direction > 0 ? 90 : -90,
        rotateX: 3,
        transformOrigin: "50% 50%",
    })
}