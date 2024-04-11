const animDelay = document.querySelectorAll(".projeto")
let count = 1;

animDelay.forEach( proj => {
    count += 0.8
    console.log(count);
    proj.style.animationDelay = count+'s';
})