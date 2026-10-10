/**
 * Everything on the main page that changes from term to term lives here:
 * links, meeting details, numbers, hackathons, community photos, officers and
 * sponsors. Components only lay this data out.
 */

/* ------------------------------------------------------------------ links */

export const DISCORD_URL = "https://discord.gg/eQ8ScamG4H";
export const DISCORD_MEMBERS = "1,400+";
export const CONTACT_EMAIL = "tidaltamu@gmail.com";

export type SocialIcon = "discord" | "github" | "linkedin" | "instagram" | "email";
export type Social = { name: string; href: string; icon: SocialIcon };

export const socials: Social[] = [
    { name: "Discord", href: DISCORD_URL, icon: "discord" },
    { name: "GitHub", href: "https://github.com/tidal-tamu/", icon: "github" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/tidaltamu", icon: "linkedin" },
    { name: "Instagram", href: "https://www.instagram.com/tidaltamu/", icon: "instagram" },
    { name: "Email", href: `mailto:${CONTACT_EMAIL}`, icon: "email" },
];

/** In-page sections, in scroll order. Ids must match the section elements. */
export const navLinks = [
    { id: "about", label: "About" },
    { id: "hackathons", label: "Hackathons" },
    { id: "community", label: "Community" },
    { id: "team", label: "Team" },
    { id: "sponsors", label: "Sponsors" },
] as const;

/* ------------------------------------------------------------- hero + about */

export const tagline = "AI/ML at Texas A&M";

/** Lit up word by word as it scrolls past. */
export const statement =
    "We learn AI by building it. Weekly workshops, real compute, and TIDALHACK.";

export const meeting = ["Thursdays 7 PM", "MSC 2406A", "All majors"];

export const award = "Adair Student Organization of the Year 2025";

export type Metric = { value: string; label: string };

export const metrics: Metric[] = [
    { value: "1,400+", label: "Members" },
    { value: "35+", label: "Workshops" },
    { value: "$33,000+", label: "In prizes" },
    { value: "500+", label: "Hackers per event" },
];

/* ------------------------------------------------------------- hackathons */

export type Hackathon = {
    id: string;
    title: string;
    theme: string;
    dates: string;
    venue?: string;
    prizes?: string;
    /** live event site */
    site?: string;
    register?: string;
    devpost?: string;
    /** 16:10 cover art; editions without one get a question-mark panel */
    cover?: string;
    upcoming?: boolean;
    currently?: boolean;
};

/** Left to right, oldest to newest. Dates and venues match each Devpost listing. */
export const hackathons: Hackathon[] = [
    {
        id: "s25",
        title: "Spring 2025",
        theme: "",
        dates: "Mar 22–23, 2025",
        venue: "Texas A&M Rec Center",
        prizes: "$8,000+",
        site: "https://s25.tidaltamu.com",
        devpost: "https://tidal-hackathon-spring-2025.devpost.com/",
        cover: "/log/s25.webp",
    },
    {
        id: "f25",
        title: "Fall 2025",
        theme: "",
        dates: "Oct 25, 2025",
        venue: "MSC Bethancourt Ballroom",
        prizes: "$10,000+",
        site: "https://f25.tidaltamu.com",
        devpost: "https://tidaltamu.devpost.com/",
        cover: "/log/f25.webp",
    },
    {
        id: "s26",
        title: "Spring 2026",
        theme: "",
        dates: "Feb 7–8, 2026",
        venue: "MSC Bethancourt Ballroom",
        prizes: "$15,000+",
        site: "https://s26.tidaltamu.com",
        devpost: "https://tidalhack-26.devpost.com/",
        cover: "/log/s26.webp",
    },
    {
        id: "f26",
        title: "tidalBYTE 26",
        theme: "",
        dates: "Nov 21, 2026",
        venue: "MSC 2304",
        site: "https://f26.tidaltamu.com",
        register: "https://portal.tidaltamu.com",
        cover: "/log/f26.png",
        currently: true,
    },
];

/* -------------------------------------------------------------- community */

export type Snapshot = { src: string; alt: string };

/**
 * The community mood board. Workshops sit in the corner of one big L-shaped
 * hackathon collage, which grows to fit however many photos are listed here,
 * so adding a photo is just adding a line. Newest first.
 */
export const board: { workshops: Snapshot[]; hackathons: Snapshot[] } = {
    workshops: [
        {
            src: "/field/workshop-night.webp",
            alt: "A tiered lecture hall of students with laptops open during a TIDAL workshop",
        },
        {
            src: "/board/general-meeting.webp",
            alt: "A full lecture hall at a TIDAL general meeting",
        },
        {
            src: "/board/wicys-collab.webp",
            alt: "TIDAL and TAMU Women in Cybersecurity members together after a joint event",
        },
    ],
    hackathons: [
        {
            src: "/field/crew-f25.webp",
            alt: "Group photo of about twenty students in front of a TIDAL banner",
        },
        {
            src: "/field/demo-table.webp",
            alt: "A student wearing a VR headset while teammates demo their project",
        },
        {
            src: "/board/hack-f24-crew.webp",
            alt: "Organizers holding the TIDAL Hackathon banner for October 19 to 20",
        },
        {
            src: "/field/heads-down.webp",
            alt: "Students coding at long tables with pizza boxes beside their laptops",
        },
        {
            src: "/field/hack-sprint.webp",
            alt: "A large room of hackers at round tables while the problem statement is presented",
        },
        {
            src: "/field/fuel.webp",
            alt: "Officers in gloves serving pizza to a line of hackers",
        },
        {
            src: "/board/hack-f23-officers.webp",
            alt: "Officers in matching TIDAL polos lined up in front of the event screen",
        },
        {
            src: "/board/hack-s23-closing.webp",
            alt: "Hackers gathered in an auditorium for the closing photo",
        },
    ],
};

/* --------------------------------------------------------------- officers */

const DIR = "/directory/";

export type Person = {
    name: string;
    role: string;
    /** omitted when we don't have a photo yet; the masthead shows initials */
    photo?: string;
};

export type Department = { name: string; people: Person[] };

export const leadership: Person[] = [
    { name: "Zavier Vega-Yu", role: "President", photo: DIR + "zavier-vega-yu.webp" },
    { name: "Likith Kancharlapalli", role: "Internal VP", photo: DIR + "likith-kancharlapalli.webp" },
    { name: "Matthew Shi", role: "External VP", photo: DIR + "matthew-shi.webp" },
];

export const departments: Department[] = [
    {
        name: "Activities",
        people: [
            { name: "Isaac Chacko", role: "Lead", photo: DIR + "isaac-chacko.webp" },
            { name: "Jamie Moe", role: "Officer", photo: DIR + "jamie-moe.webp" },
            { name: "Tanvee Borikar", role: "Officer", photo: DIR + "tanvee-borikar.webp" },
        ],
    },
    {
        name: "Workshops",
        people: [
            { name: "Nicholas Botello", role: "Lead", photo: DIR + "nicholas-botello.webp" },
            { name: "Vyom Dwivedi", role: "Officer", photo: DIR + "vyom-dwivedi.webp" },
            { name: "Nathika Sivakumar", role: "Officer", photo: DIR + "nathika-sivakumar.webp" },
        ],
    },
    {
        name: "Marketing",
        people: [
            { name: "Shruthika Naidu", role: "Lead", photo: DIR + "shruthika-naidu.webp" },
            { name: "Harshit Saini", role: "Officer", photo: DIR + "harshit-saini.webp" },
        ],
    },
    {
        name: "Design",
        people: [
            { name: "Tiffany Yin", role: "Lead", photo: DIR + "tiffany-yin.webp" },
            { name: "Lynn Yang", role: "Officer", photo: DIR + "lynn-yang.webp" },
        ],
    },
    {
        name: "Finance",
        people: [
            { name: "Harshitha Sudhakar", role: "Lead", photo: DIR + "harshitha-sudhakar.webp" },
            { name: "Mariam Siddiqui", role: "Officer", photo: DIR + "mariam-siddiqui.webp" },
        ],
    },
    {
        name: "Development",
        people: [
            { name: "Balaram Palivela", role: "Officer", photo: DIR + "balaram-palivela.webp" },
            { name: "Yash Kulkarni", role: "Officer", photo: DIR + "yash-kulkarni.webp" },
        ],
    },
];

/* --------------------------------------------------------------- sponsors */

export type Sponsor = {
    name: string;
    /** single-colour silhouette, recoloured in CSS */
    logo: string;
    url: string;
    /** intrinsic size, so the rail reserves space before the image loads */
    w: number;
    h: number;
};

const LOGO = "/underwriters/";

export const sponsors: Sponsor[] = [
    { name: "AWS", logo: LOGO + "aws.webp", url: "https://aws.amazon.com/", w: 301, h: 180 },
    { name: "NVIDIA", logo: LOGO + "nvidia.webp", url: "https://www.nvidia.com/", w: 560, h: 107 },
    { name: "Google", logo: LOGO + "google.webp", url: "https://about.google/", w: 547, h: 180 },
    { name: "Jane Street", logo: LOGO + "jane-street.webp", url: "https://www.janestreet.com/", w: 400, h: 156 },
    { name: "Blue Origin", logo: LOGO + "blue-origin.webp", url: "https://www.blueorigin.com/", w: 273, h: 180 },
    { name: "Chevron", logo: LOGO + "chevron.webp", url: "https://www.chevron.com/", w: 161, h: 180 },
    { name: "PNNL", logo: LOGO + "pnnl.webp", url: "https://www.pnnl.gov/", w: 432, h: 180 },
    { name: "ElevenLabs", logo: LOGO + "elevenlabs.webp", url: "https://elevenlabs.io", w: 560, h: 73 },
    { name: "Slalom", logo: LOGO + "slalom.webp", url: "https://www.slalom.com/", w: 347, h: 89 },
    { name: "Pariveda", logo: LOGO + "pariveda.webp", url: "https://www.parivedasolutions.com/", w: 426, h: 62 },
    { name: "Wolfram", logo: LOGO + "wolfram.webp", url: "https://www.wolfram.com/", w: 274, h: 180 },
    { name: "Celsius", logo: LOGO + "celsius.webp", url: "https://www.celsius.com", w: 526, h: 180 },
    { name: "STATA", logo: LOGO + "stata-logo-blue.png", url: "https://www.stata.com/", w: 735, h: 271 },
];
