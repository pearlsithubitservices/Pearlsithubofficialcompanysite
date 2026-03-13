export const fadeUp = {
initial:{opacity:0,y:60},
animate:{opacity:1,y:0},
transition:{duration:0.8}
}

export const staggerContainer = {
animate:{
transition:{
staggerChildren:0.15
}
}
}

export const scaleHover = {
whileHover:{scale:1.05},
whileTap:{scale:0.95}
}

export const card3D = {
whileHover:{
rotateX:10,
rotateY:-10,
scale:1.05
}
}