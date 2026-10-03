import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navLinks } from "../../data/tidal";

gsap.registerPlugin(ScrollTrigger);

/**
 * All the scroll-linked behaviour for the main page. Everything lives inside a
 * gsap.context scoped to the page root, so a single revert() on unmount tears
 * down every tween and ScrollTrigger, which also makes it safe under
 * StrictMode's double-invoked effects in development.
 *
 * Nothing here sets React state: classes and styles are written straight to
 * the DOM, so scrolling never re-renders a component.
 *
 * `active` gates setup until the intro has revealed the page, so triggers are
 * measured against the real, settled layout.
 */
export function useSiteMotion(rootRef: RefObject<HTMLElement>, active: boolean) {
    useEffect(() => {
        const root = rootRef.current;
        if (!active || !root) return;

        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const ctx = gsap.context(() => {
            const nav = root.querySelector<HTMLElement>(".nav");
            if (reduce) gsap.set(".nav", { opacity: 1 });
            else gsap.to(".nav", { opacity: 1, duration: 0.6 });

            // hairline under the nav once the page has moved
            ScrollTrigger.create({
                start: 40,
                onEnter: () => nav?.classList.add("is-solid"),
                onLeaveBack: () => nav?.classList.remove("is-solid"),
            });

            // mark the section currently under the middle of the viewport
            navLinks.forEach(({ id }) => {
                const section = root.querySelector(`#${id}`);
                const link = root.querySelector(`.navlinks a[data-section="${id}"]`);
                if (!section || !link) return;
                ScrollTrigger.create({
                    trigger: section,
                    start: "top 50%",
                    end: "bottom 50%",
                    onToggle: (s) => {
                        link.classList.toggle("is-current", s.isActive);
                        if (s.isActive) link.setAttribute("aria-current", "true");
                        else link.removeAttribute("aria-current");
                    },
                });
            });

            // reduced motion: CSS already shows everything in its final state
            if (reduce) return;

            gsap.utils.toArray<HTMLElement>(".rv").forEach((el) => {
                gsap.to(el, {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 90%", once: true },
                });
            });

            // the about statement lights up word by word as it scrolls past
            const words = gsap.utils.toArray<HTMLElement>(".statement .w");
            if (words.length) {
                gsap.to(words, {
                    color: "#0B0E13",
                    ease: "none",
                    stagger: 1,
                    scrollTrigger: {
                        trigger: ".statement",
                        start: "top 85%",
                        end: "bottom 50%",
                        scrub: 0.4,
                    },
                });
            }

            // parallax on the shoreline: nearer layers move a little faster, which
            // only ever widens the gaps between layers, so the drawing never crosses itself
            (
                [
                    ["par-mid", -10],
                    ["par-near", -24],
                ] as const
            ).forEach(([cls, y]) => {
                gsap.to(`.shore .${cls}`, {
                    y,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".stage",
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            });
        }, rootRef);

        ScrollTrigger.refresh();

        return () => ctx.revert();
    }, [rootRef, active]);
}
