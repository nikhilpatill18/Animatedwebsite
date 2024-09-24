const lenis = new Lenis({
    duration: 1
})

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
function page1Animation() {
    let tl = gsap.timeline();
    tl.from("section nav h1 , section nav .part2 h4 , section nav .part2 button", {
        opacity: 0,
        y: -40,
        duration: 0.5,
        delay: 1.5,
        stagger: 0.2
    })
    tl.from(".center-part-1 h1", {
        x: -200,
        opacity: 0,
        duration: 1
    })
    tl.from(".center-part-1 p", {
        x: -100,
        opacity: 0,
        duration: 0.7
    })
    tl.from(".center-part-1 button", {
        opacity: 0,
        duration: 0.7
    })
    tl.from(".center-part-2 img", {

        opacity: 0,
        duration: 0.5,
    }, "-=1")
    gsap.from(".section1bottom ", {
        opacity: 0,
        transform: "translateX(100%)",
        duration: 15,
        delay: 1,
        repeat: -1,
        yoyo: true
    })

}
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        start: "top 50%",
        scrub: 1,
        end: "top 0%"
    }
})
page1Animation()

function page2animation() {
    tl2.from(".services", {
        y: 50,
        opacity: 0,
        duration: 0.5,
    })
    tl2.from(".elem-1", {
        x: -200,
        opacity: 0,
        duration: 5,
        delay: 0.2,
    }, "anim")
    tl2.from(".elem-2", {
        x: 200,
        opacity: 0,
        duration: 5,
        delay: 0.2,
    }, "anim")
    tl2.from(".elem-3", {
        x: -200,
        opacity: 0,
        duration: 5,
        delay: 0.2,
    }, "anim2")
    tl2.from(".elem-4", {
        x: 200,
        opacity: 0,
        duration: 5,
        delay: 0.2,
    }, "anim2")
}
page2animation()
