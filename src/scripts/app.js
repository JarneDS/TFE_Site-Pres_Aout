"use strict";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* GSAP */
function initGSAPAnimations() {
    ScrollTrigger.matchMedia({

        // Desktop uniquement (≥ 900px)
        "(min-width: 900px)": function() {

            document.querySelectorAll(".col__img--left, .col--left").forEach(el => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                    },
                    xPercent: -100,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    clearProps: "transform"
                });
            });

            document.querySelectorAll(".col__img--right, .col--right").forEach(el => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                    },
                    xPercent: 100,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    clearProps: "transform"
                });
            });

            document.querySelectorAll(".ajoutApp__card").forEach(el => {

                let config = {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 95%",
                    },
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    clearProps: "transform"
                };

                if (el.classList.contains("ajoutApp__cardleft")) {
                    config.xPercent = -100;
                }

                if (el.classList.contains("ajoutApp__cardright")) {
                    config.xPercent = 100;
                }

                if (el.classList.contains("ajoutApp__cardmiddel")) {
                    config.yPercent = -100;
                    config.scrollTrigger.start = "top 20%";
                }

                if (el.classList.contains("ajoutApp__cardmiddel2")) {
                    config.yPercent = 100;
                    config.scrollTrigger.start = "top 120%";
                }

                gsap.from(el, config);
            });
        },

        // Mobile (< 900px)
        "(max-width: 899px)": function() {

            document.querySelectorAll(".col__img--left, .col--left").forEach(el => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 100%",
                    },
                    xPercent: -50,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power3.out",
                });
            });

            document.querySelectorAll(".col__img--right, .col--right").forEach(el => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 100%",
                    },
                    xPercent: 50,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power3.out",
                });
            });

            document.querySelectorAll(".ajoutApp__card").forEach(el => {

                let config = {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 100%",
                    },
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                };

                if (el.classList.contains("ajoutApp__cardleft")) {
                    config.xPercent = -50;
                }

                if (el.classList.contains("ajoutApp__cardright")) {
                    config.xPercent = 50;
                }

                if (el.classList.contains("ajoutApp__cardmiddel")) {
                    config.yPercent = -50;
                }

                if (el.classList.contains("ajoutApp__cardmiddel2")) {
                    config.yPercent = 50;
                }

                gsap.from(el, config);
            });
        }
    });


    let mockups = document.querySelector(".mockups");

    gsap.from(mockups, {
        yPercent: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "transform"
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initGSAPAnimations();
});

/* MENU */

var menuBtn = document.querySelector(".menu__btn");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    var menu = document.querySelector(".menu");
    menu.classList.toggle("menu--open");
};

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".sideNav a");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const link = document.querySelector(`.sideNav a[href="#${id}"]`);

        if (entry.isIntersecting) {
            navLinks.forEach(a => a.classList.remove("active"));

            if (link) link.classList.add("active");
        }
    });
}, {
    threshold: 0.5
});

sections.forEach(section => observer.observe(section));
