export const COLORS = {
    darktone: '#2D3E4E',
    highlight: '#EFEFEF',
    blue: '#98B7B9',
    green: '#9FB998',
    orange: '#E19F50',
    grey: '#57636E',
}

export const easing = [0.6, -0.5, 0.01, 0.99]

export const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing,
        },
    },
}

export const fadeInLeft = {
    initial: {
        x: 120,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing,
        },
    },
}


export const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.05,
        },
    },
}