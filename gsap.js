gsap.registerPlugin(ScrollTrigger);

gsap.from(".greek", {
  // delay: ,
  duration: 1.4,
  y: "60%",
  ease: "ease out",
});

gsap.to(".parent", {
  // delay: 1,
  duration: 1.6,
  height: "0px",
  ease: "ease out",
});


gsap.from(".headers", {
  delay: 1.4,
  duration: 1,
  opacity: "0",
  y: "20%",
  ease: "ease in",
});

gsap.from(".stoneCarve", {
  delay: 1.6,
  duration: 1,
  opacity: "0",
  y: "10%",
  ease: "ease out",
});

gsap.from(".line", {
  delay: 1.6,
  duration: 1.4,
  width: "0",
  ease: "ease in",
});

gsap.from(".development", {
  scrollTrigger: {
    trigger: ".development",
    start: "top 60%",
    toggleActions: "play none none none",
  },
  duration: 1.5,
  opacity: "0",
  y: "20%",
  ease: "ease in",
});

gsap.from(".development1", {
  scrollTrigger: {
    trigger: ".development1",
    start: "top 60%",
    toggleActions: "play none none none",
  },
  duration: 1.5,
  opacity: "0",
  y: "20%",
  ease: "ease in",
});

gsap.from(".process", {
  scrollTrigger: {
    trigger: ".process",
    start: "top 60%",
    toggleActions: "play none none none",
  },
  duration: 1.4,
  opacity: "0",
  y: "20%",
  ease: "ease in",
});

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    // scrub: true,
    // markers: true,  
    trigger: panel,
    start: "top top", 
    // end: "center center",
    pin: true, 
    pinSpacing: false 
  });
});

gsap.utils.toArray(".display").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "center center", 
    pin: true, 
    pinSpacing: false,
  });
});

gsap.to('.first', {
  scrollTrigger: {
    trigger: '.wrap',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true
  },
  backgroundColor: 'black',
  ease: 'none',
});

