import type { SocialIcon } from "../../data/tidal";

type P = { className?: string };

export function ArrowUpRight({ className }: P) {
    return (
        <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
                d="M5 11 11 5M6 5h5v5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function ArrowRight({ className }: P) {
    return (
        <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function ArrowUp({ className }: P) {
    return (
        <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
                d="M8 13V3M4 7l4-4 4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

const PATHS: Record<SocialIcon, JSX.Element> = {
    discord: (
        <path
            fill="currentColor"
            d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3l-.3.5a15 15 0 0 1 4.3 2.2 17.6 17.6 0 0 0-15 0A15 15 0 0 1 8.9 3.5L8.6 3a19.8 19.8 0 0 0-4.9 1.4C.6 9 0 13.4.3 17.8a19.9 19.9 0 0 0 6 3l1.2-1.7a13 13 0 0 1-2-1l.5-.4a14.2 14.2 0 0 0 12 0l.5.4a13 13 0 0 1-2 1l1.2 1.7a19.9 19.9 0 0 0 6-3c.4-5.1-.6-9.5-3.4-13.4ZM8.1 15.3c-1.2 0-2.1-1.1-2.1-2.4s.9-2.4 2.1-2.4 2.2 1.1 2.2 2.4-1 2.4-2.2 2.4Zm7.8 0c-1.2 0-2.1-1.1-2.1-2.4s.9-2.4 2.1-2.4 2.2 1.1 2.2 2.4-1 2.4-2.2 2.4Z"
        />
    ),
    github: (
        <path
            fill="currentColor"
            d="M12 1.8a10.2 10.2 0 0 0-3.2 19.9c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.3-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10.2 10.2 0 0 0 12 1.8Z"
        />
    ),
    linkedin: (
        <path
            fill="currentColor"
            d="M4.9 3.2a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3.2 8.8h3.4v11.9H3.2V8.8Zm5.6 0h3.3v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.2 2.4 4.2 5.4v6.8h-3.4v-6c0-1.4 0-3.3-2-3.3s-2.3 1.6-2.3 3.2v6.1H8.8V8.8Z"
        />
    ),
    instagram: (
        <g fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
            <circle cx="12" cy="12" r="4.1" />
            <circle cx="17.3" cy="6.7" r="0.4" fill="currentColor" />
        </g>
    ),
    email: (
        <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3.5 6 8.5 7 8.5-7" />
        </g>
    ),
};

export function SocialGlyph({ icon, className }: P & { icon: SocialIcon }) {
    return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
            {PATHS[icon]}
        </svg>
    );
}
