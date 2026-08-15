/* =========================================================
   GSAP
========================================================= */

gsap.registerPlugin(ScrollTrigger);



/* =========================================================
   HERO INTRO
========================================================= */

const heroTimeline = gsap.timeline();


heroTimeline

    .from(".hero-small-text", {

        opacity: 0,

        y: 25,

        duration: 0.7,

        ease: "power3.out"

    })

    .from(".hero-name", {

        opacity: 0,

        y: 50,

        duration: 1,

        ease: "power3.out"

    }, "-=0.35")

    .from(".hero-role", {

        opacity: 0,

        y: 25,

        duration: 0.7,

        ease: "power3.out"

    }, "-=0.45")

    .from(".hero-description", {

        opacity: 0,

        y: 25,

        duration: 0.7,

        ease: "power3.out"

    }, "-=0.35")

    .from(".hero-buttons", {

        opacity: 0,

        y: 20,

        duration: 0.7,

        ease: "power3.out"

    }, "-=0.35")

    .from(".hero-socials", {

        opacity: 0,

        y: 15,

        duration: 0.6,

        ease: "power3.out"

    }, "-=0.35")

    .from(".profile-image-wrapper", {

        opacity: 0,

        scale: 0.75,

        y: 40,

        duration: 1.1,

        ease: "back.out(1.5)"

    }, "-=1")

    .from(".profile-ring", {

        opacity: 0,

        scale: 0.5,

        duration: 0.9,

        stagger: 0.15,

        ease: "power3.out"

    }, "-=0.8")

    .from(".profile-badge", {

        opacity: 0,

        scale: 0.5,

        duration: 0.6,

        stagger: 0.15,

        ease: "back.out(1.7)"

    }, "-=0.5")

    .from(".scroll-indicator", {

        opacity: 0,

        y: 15,

        duration: 0.5

    }, "-=0.2");



/* =========================================================
   TYPING EFFECT
========================================================= */

const typingText =
    document.getElementById("typing-text");


const roles = [

    "Python & Full Stack Developer",

    "Django Developer",

    "AI & ML Enthusiast",

    "Problem Solver"

];


let roleIndex = 0;

let characterIndex = 0;

let isDeleting = false;


function typeRole() {

    const currentRole =
        roles[roleIndex];


    if (!isDeleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentRole.length
        ) {

            isDeleting = true;

            setTimeout(
                typeRole,
                1500
            );

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            isDeleting = false;

            roleIndex =
                (roleIndex + 1) %
                roles.length;

        }

    }


    setTimeout(
        typeRole,
        isDeleting ? 40 : 75
    );

}


typeRole();



/* =========================================================
   PROFILE FLOATING ANIMATION
========================================================= */

gsap.to(".profile-image-wrapper", {

    y: -8,

    duration: 3,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

});


gsap.to(".profile-badge-top", {

    y: -10,

    duration: 2.3,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

});


gsap.to(".profile-badge-bottom", {

    y: 10,

    duration: 2.7,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut",

    delay: 0.4

});



/* =========================================================
   ROTATING RINGS
========================================================= */

gsap.to(".profile-ring-one", {

    rotation: 360,

    duration: 25,

    repeat: -1,

    ease: "none"

});


gsap.to(".profile-ring-two", {

    rotation: -360,

    duration: 35,

    repeat: -1,

    ease: "none"

});



/* =========================================================
   PROFILE GLOW
========================================================= */

gsap.to(".profile-glow", {

    scale: 1.2,

    opacity: 0.25,

    duration: 3,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

});



/* =========================================================
   BACKGROUND GLOW
========================================================= */

gsap.to(".hero-glow-one", {

    x: 50,

    y: 30,

    scale: 1.15,

    duration: 5,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

});


gsap.to(".hero-glow-two", {

    x: -40,

    y: -30,

    scale: 1.15,

    duration: 6,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

});



/* =========================================================
   ABOUT ANIMATION
========================================================= */

gsap.from(".about-section .section-heading", {

    scrollTrigger: {

        trigger: "#about",

        start: "top 80%",

        toggleActions:
            "play none none reverse"

    },

    opacity: 0,

    y: 50,

    duration: 0.8,

    ease: "power3.out"

});


gsap.from(".about-text p", {

    scrollTrigger: {

        trigger: "#about",

        start: "top 75%",

        toggleActions:
            "play none none reverse"

    },

    opacity: 0,

    y: 30,

    duration: 0.7,

    stagger: 0.15,

    ease: "power3.out"

});


gsap.from(".highlight-card", {

    scrollTrigger: {

        trigger: ".about-highlight",

        start: "top 80%",

        toggleActions:
            "play none none reverse"

    },

    opacity: 0,

    x: 40,

    duration: 0.7,

    stagger: 0.15,

    ease: "power3.out"

});



/* =========================================================
   SKILLS ANIMATION
========================================================= */

gsap.from(".skill-card", {

    scrollTrigger: {

        trigger: "#skills",

        start: "top 75%",

        toggleActions:
            "play none none reverse"

    },

    opacity: 0,

    y: 50,

    scale: 0.92,

    duration: 0.65,

    stagger: 0.08,

    ease: "power3.out"

});



/* =========================================================
   EXPERIENCE ANIMATION
========================================================= */

gsap.from(".timeline-card", {

    scrollTrigger: {

        trigger: "#experience",

        start: "top 75%",

        toggleActions:
            "play none none reverse"

    },

    opacity: 0,

    x: 80,

    duration: 1,

    ease: "power3.out"

});


gsap.from(".timeline-dot", {

    scrollTrigger: {

        trigger: "#experience",

        start: "top 75%",

        toggleActions:
            "play none none reverse"

    },

    scale: 0,

    duration: 0.6,

    ease: "back.out(2)"

});



/* =========================================================
   PROJECT ANIMATION
========================================================= */

gsap.from(".project-card", {

    scrollTrigger: {

        trigger: "#projects",

        start: "top 75%",

        toggleActions:
            "play none none reverse"

    },

    opacity: 0,

    y: 70,

    scale: 0.93,

    duration: 0.8,

    stagger: 0.15,

    ease: "power3.out"

});



/* =========================================================
   EDUCATION ANIMATION
========================================================= */

gsap.from(".education-card", {

    scrollTrigger: {

        trigger: "#education",

        start: "top 75%",

        toggleActions:
            "play none none reverse"

    },

    opacity: 0,

    y: 60,

    duration: 0.8,

    stagger: 0.15,

    ease: "power3.out"

});



/* =========================================================
   CERTIFICATION ANIMATION
========================================================= */

gsap.from(".certificate-card", {

    scrollTrigger: {

        trigger: "#certifications",

        start: "top 75%",

        toggleActions:
            "play none none reverse"

    },

    opacity: 0,

    y: 50,

    scale: 0.95,

    duration: 0.7,

    stagger: 0.12,

    ease: "power3.out"

});



/* =========================================================
   CONTACT ANIMATION
========================================================= */

gsap.from(".contact-section .section-title", {

    scrollTrigger: {

        trigger: "#contact",

        start: "top 80%",

        toggleActions:
            "play none none reverse"

    },

    opacity: 0,

    scale: 0.8,

    duration: 1,

    ease: "back.out(1.7)"

});


gsap.from(".contact-buttons", {

    scrollTrigger: {

        trigger: "#contact",

        start: "top 70%",

        toggleActions:
            "play none none reverse"

    },

    opacity: 0,

    y: 30,

    duration: 0.8,

    delay: 0.25,

    ease: "power3.out"

});



/* =========================================================
   NAVBAR
========================================================= */

const navbar =
    document.getElementById("navbar");

const menuToggle =
    document.getElementById("menu-toggle");

const navMenu =
    document.getElementById("nav-menu");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 50) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    }
);



/* =========================================================
   MOBILE MENU
========================================================= */

menuToggle.addEventListener(
    "click",
    () => {

        menuToggle.classList.toggle(
            "active"
        );

        navMenu.classList.toggle(
            "open"
        );

    }
);


navLinks.forEach(
    link => {

        link.addEventListener(
            "click",
            () => {

                menuToggle.classList.remove(
                    "active"
                );

                navMenu.classList.remove(
                    "open"
                );

            }
        );

    }
);



/* =========================================================
   ACTIVE NAV LINK
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";


        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop - 160;

                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            link => {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);