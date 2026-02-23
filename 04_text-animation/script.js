function breakText() {
  let h1 = document.querySelector("h1");
  let headingText = h1.textContent

  let splitText = headingText.split("");
  let halfValue = Math.floor(splitText.length/2)

  let clutter = "";

  splitText.forEach(function (val, idx) {
    if (idx < halfValue) {
      clutter += `<span class="left">${val}</span>`;
    } else {
      clutter += `<span class="right">${val}</span>`;
    }
  })
  

  h1.innerHTML = clutter;
}

breakText();

gsap.from(".left", {
  y: 70,
  duration: 0.7,
  opacity: 0,
  stagger: 0.3,
  // ease: "back.out(1.7)",
})
gsap.from(".right", {
  y: 70,
  duration: 0.7,
  opacity: 0,
  stagger: -0.3,
  // ease: "back.out(1.7)",
})
