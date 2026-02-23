// gsap.from("#page1 #box", {
//   scale: 0,
//   duration: 1,
//   delay: 1, 
//   rotate: 360,
// })

// gsap.from("#page2 #box", {
//   scale: 0,
//   duration: 2,
//   rotate: 360,
//   scrollTrigger: {
//     trigger: "#page2 #box",
//     scroller: "body",
//     markers: true,
//     scrub: 2 // scrub scroll ke sath animate krta hai  aur smoth scroll ke liye value 1 se 5 de sakte hain
//   }
// })


// text moving on scroll 
gsap.to("#page2 h1", {
  x: "-150%",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    scrub: 2, 
    start: "top 0%",
    end: "top -100%",
    pin: true
  }
})