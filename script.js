const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });

// Loader
gsap.to(".progress", { width: "100%", duration: 2, onComplete: () => {
    gsap.to(".loader", { yPercent: -100, duration: 1, ease: "expo.inOut" });
}});

// Cursor
const cursor = document.querySelector("#cursor");
document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
});

// Horizontal
const wrapper = document.querySelector(".horizontal-wrapper");
gsap.to(wrapper, {
    xPercent: -50,
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontal-section",
        pin: true,
        scrub: 1,
        end: () => "+=" + wrapper.offsetWidth
    }
});

// Reveal images
gsap.utils.toArray('.reveal').forEach(img => {
    gsap.to(img, {
        opacity: 1, y: 0, duration: 1,
        scrollTrigger: { trigger: img, start: "top 80%" }
    });
});
