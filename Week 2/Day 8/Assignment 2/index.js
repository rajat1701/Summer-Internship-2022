const animation = {
    transform: "rotate(360deg)"
}

const animationsConfig = {
    duration: 1000,
    iterations: 3,
    fill: 'forwards'
}
const animationsConfig2 = {
    duration: 1000,
    iterations: 3,
    fill: 'backwards'
}
const img1 = document.querySelector("#img1")
const img2 = document.querySelector("#img2")
const img3 = document.querySelector("#img3")


const start = async ()=> {

    let anim1 = img1.animate(animation, animationsConfig)
    let stop1= await anim1.finished
    let anim2 = await img2.animate(animation, animationsConfig2)
    let stop2= await anim2.finished
    let anim3 = img3.animate(animation, animationsConfig)
    
}
start();
