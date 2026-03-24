// 1. Инициализация плавного скролла (Lenis)
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

// 2. Прелоадер
const tl = gsap.timeline();
tl.to(".progress", { width: "100%", duration: 1.5, ease: "power2.inOut" })
  .to(".loader", { yPercent: -100, duration: 1, ease: "expo.inOut" });

// 3. Кастомный курсор
const cursor = document.querySelector("#cursor");
document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
});

// 4. Горизонтальный скролл (Collection)
const sections = document.querySelector(".horizontal-wrapper");
gsap.to(sections, {
    xPercent: -50,
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontal-section",
        pin: true,
        scrub: 1,
        end: () => "+=" + sections.offsetWidth
    }
});

// 5. Параллакс Hero
gsap.to(".main-img", {
    y: 50,
    scrollTrigger: {
        trigger: ".hero",
        scrub: true
    }
});

// 6. Анимация текста Manifesto
gsap.from(".reveal-text", {
    opacity: 0,
    y: 100,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".manifesto",
        start: "top 80%"
    }
});

// 7. Появление картинок в Lookbook
gsap.utils.toArray('.reveal').forEach(img => {
    gsap.to(img, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: img,
            start: "top 90%",
            toggleActions: "play none none none"
        }
    });
});

// Увеличение курсора на кнопках, лого и карточках
document.querySelectorAll("a, .p-card, .logo, .progress-bar").forEach(el => {
    el.onmouseenter = () => cursor.style.transform = "scale(5)";
    el.onmouseleave = () => cursor.style.transform = "scale(1)";
});