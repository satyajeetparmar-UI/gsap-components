function page1Animation() {
  let tl = gsap.timeline()

  tl.from("nav h1, nav h4, nav button", {
    y: -40,
    opacity: 0,
    delay: 1,
    duration: 0.7, 
    stagger: 0.15
  })

  tl.from(".slider-left h1", {
    x: -300,
    opacity: 0,
    duration: 0.5
  })

  tl.from(".slider-left p", {
    x: -200,
    opacity: 0,
    duration: 0.4
  })

  tl.from(".slider-left button", {
    opacity: 0,
    duration: 0.4
  })

  tl.from(".slider-right img", {
    opacity: 0,
    duration: 0.4,
    x: 200
  }, "-=1") // -=1 ka mtlb hota hai aniamtion timeline me hi chalega but 1 second pahle start ho jayega parent ke animtion se

  // partner section start 
  tl.from(".partner img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.5
  })

}

// page1Animation();

function page2Animation() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "section-two",
      sroller: "body",
      start: "top 50%",
      // markers: true,
      // end: "top -50%",
      scrub: 2,
    }
  })
  
  tl.from(".services", {
    x: -300,
    opacity: 0,
    duration: 0.5,
  })
  
  // line 1
  tl.from(".line1.elem.left", {
    x: -300,
    opacity: 0,
    duration: 1,
  }, "tg")
  tl.from(".line1.elem.right", {
    x: 300,
    opacity: 0,
    duration: 1,
  }, "tg")
  
  // line 2
  tl.from(".line2.elem.left", {
    x: -300,
    opacity: 0,
    duration: 1,
  }, "tg2")
  tl.from(".line2.elem.right", {
    x: 300,
    opacity: 0,
    duration: 1,
  }, "tg2")
}

page1Animation();
page2Animation();
