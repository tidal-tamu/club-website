import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { waveState } from "../../lib/wave";

gsap.registerPlugin(ScrollTrigger);

/**
 * All the scroll-linked behaviour for the main page. Everything lives inside a
 * gsap.context scoped to the page root, so a single revert() on unmount tears
 * down every tween and ScrollTrigger — which also makes it safe under
 * StrictMode's double-invoked effects in development.
 *
 * `active` gates setup until the intro has finished, so triggers are measured
 * against the real, settled layout.
 */
export function useSiteMotion(rootRef: RefObject<HTMLElement>, active: boolean) {
    useEffect(() => {
        const root = rootRef.current;
        if (!active || !root) return;

        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const loops: gsap.core.Tween[] = [];
        let vel = 0;

        const ctx = gsap.context(() => {
            gsap.to(".nav", { opacity: 1, duration: 0.6 });

            // the about paragraph lights up word by word as you scroll past it
            const words = gsap.utils.toArray<HTMLElement>(".abouttext .w");
            if (words.length) {
                if (reduce) {
                    gsap.set(words, { color: "#1A1F29" });
                } else {
                    gsap.to(words, {
                        color: "#12161F",
                        ease: "none",
                        stagger: 1,
                        scrollTrigger: {
                            trigger: ".abouttext",
                            start: "top 82%",
                            end: "bottom 42%",
                            scrub: 0.4,
                        },
                    });
                }
            }

            gsap.utils.toArray<HTMLElement>(".rv").forEach((el) => {
                gsap.to(el, {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 90%", once: true },
                });
            });

            ScrollTrigger.create({
                start: 60,
                onToggle: (s) =>
                    root.querySelector(".nav")?.classList.toggle("solid", s.isActive),
            });

            if (!reduce) {
                // the chapter word drifts sideways as you cross into the team section
                gsap.fromTo(
                    ".chapter-word",
                    { xPercent: 6 },
                    {
                        xPercent: -6,
                        ease: "none",
                        scrollTrigger: {
                            trigger: ".team",
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 0.6,
                        },
                    }
                );

                // parallax on the shoreline drawing
                (["par-far", "par-mid", "par-near"] as const).forEach((cls, i) => {
                    const el = root.querySelector(`.shore-hero .${cls}`);
                    if (!el) return;
                    gsap.to(el, {
                        yPercent: [-4, -9, -16][i],
                        ease: "none",
                        scrollTrigger: {
                            trigger: ".surface",
                            start: "top top",
                            end: "bottom top",
                            scrub: true,
                        },
                    });
                });
            }

            // sponsor marquees; speed reacts to scroll velocity below
            loops.push(
                gsap.to(".marquee-a", {
                    xPercent: -50,
                    duration: 46,
                    ease: "none",
                    repeat: -1,
                })
            );
            loops.push(
                gsap.fromTo(
                    ".marquee-b",
                    { xPercent: -50 },
                    { xPercent: 0, duration: 56, ease: "none", repeat: -1 }
                )
            );

            ScrollTrigger.create({
                start: 0,
                end: "max",
                onUpdate: (s) => {
                    vel = s.getVelocity();
                },
            });
        }, rootRef);

        // Measured directly rather than via a ScrollTrigger range, so nothing can
        // flip the nav back to light once the descent has started — the footer included.
        const descent = root.querySelector(".descent");
        const syncDeep = () => {
            if (!descent) return;
            document.body.classList.toggle(
                "deep-mode",
                descent.getBoundingClientRect().top <= 72
            );
        };
        syncDeep();
        window.addEventListener("scroll", syncDeep, { passive: true });
        window.addEventListener("resize", syncDeep);

        // choppier water + faster marquees while scrolling
        const tick = () => {
            const target = Math.min(Math.abs(vel) / 3500, 1);
            waveState.chop += (target - waveState.chop) * 0.08;
            vel *= 0.9;
            if (!reduce) {
                const ts = 1 + waveState.chop * 3.2;
                loops.forEach((l) => l.timeScale(ts));
            }
        };
        gsap.ticker.add(tick);
        ScrollTrigger.refresh();

        return () => {
            gsap.ticker.remove(tick);
            window.removeEventListener("scroll", syncDeep);
            window.removeEventListener("resize", syncDeep);
            document.body.classList.remove("deep-mode");
            waveState.chop = 0;
            ctx.revert();
        };
    }, [rootRef, active]);
}
