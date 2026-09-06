const PFP = "/images/officer-pictures/";
const DEFAULT_PFP = PFP + "default-pfp.png";

export const DISCORD_URL = "https://discord.gg/eQ8ScamG4H";
export const CONTACT_EMAIL = "tidaltamu@gmail.com";

export type Lead = {
    name: string;
    role: string;
    pfp: string;
};

export const leadership: Lead[] = [
    { name: "Zavier Vega-Yu", role: "President", pfp: PFP + "zavier.png" },
    { name: "Likith Kancharlapalli", role: "Internal Vice President", pfp: DEFAULT_PFP },
    { name: "Matthew Shi", role: "External Vice President", pfp: PFP + "matthew.jpg" },
];

export type Person = { name: string; role: "Lead" | "Officer"; pfp: string };
export type Department = { name: string; people: Person[] };

export const departments: Department[] = [
    {
        name: "Activities",
        people: [
            { name: "Isaac Chacko", role: "Lead", pfp: PFP + "isaac.jpg" },
            { name: "Jamie Moe", role: "Officer", pfp: DEFAULT_PFP },
            { name: "Tanvee Borikar", role: "Officer", pfp: DEFAULT_PFP },
        ],
    },
    {
        name: "Workshops",
        people: [
            { name: "Nicholas Botello", role: "Lead", pfp: PFP + "nico.jpg" },
            { name: "Vyom Dwivedi", role: "Officer", pfp: PFP + "vyom.jpeg" },
            { name: "Nathika Sivakumar", role: "Officer", pfp: DEFAULT_PFP },
        ],
    },
    {
        name: "Marketing",
        people: [
            { name: "Shruthika Naidu", role: "Lead", pfp: PFP + "shruthika.png" },
            { name: "Harshit Saini", role: "Officer", pfp: PFP + "harshit.jpg" },
        ],
    },
    {
        name: "Design",
        people: [
            { name: "Tiffany Yin", role: "Lead", pfp: PFP + "tiffany yin.png" },
            { name: "Lynn Yang", role: "Officer", pfp: DEFAULT_PFP },
        ],
    },
    {
        name: "Finance",
        people: [
            { name: "Harshitha Sudhakar", role: "Lead", pfp: PFP + "harshitha.png" },
            { name: "Mariam Siddiqui", role: "Officer", pfp: DEFAULT_PFP },
        ],
    },
    {
        name: "Development",
        people: [
            { name: "Balaram Palivela", role: "Officer", pfp: DEFAULT_PFP },
            { name: "Yash Kulkarni", role: "Officer", pfp: DEFAULT_PFP },
        ],
    },
];

export type HackEvent = {
    term: string;
    name: string;
    url: string;
    /** composed, theme-specific artwork */
    art?: "s25" | "f25";
    /** or a single image with a fit mode */
    img?: string;
    fit?: "cover" | "contain";
    /** stem height in px — seats each node at a different point on the wave */
    lift: number;
};

/** left to right = oldest to newest */
export const events: HackEvent[] = [
    {
        term: "S25",
        name: "TIDALHACK Spring 2025",
        url: "https://s25.tidaltamu.com",
        art: "s25",
        lift: 74,
    },
    {
        term: "F25",
        name: "TIDALHACK Fall 2025",
        url: "https://f25.tidaltamu.com",
        art: "f25",
        lift: 28,
    },
    {
        term: "S26",
        name: "TIDALHACK Spring 2026",
        url: "https://s26.tidaltamu.com",
        img: "/s26/header.jpg",
        fit: "cover",
        lift: 62,
    },
];

export type Sponsor = {
    name: string;
    logo: string;
    url: string;
    /** source art is solid black — keep it inverted on hover or it vanishes */
    keepWhite?: boolean;
    /** scale multiplier for wide wordmarks that are width-bound, not height-bound */
    scale?: number;
};

const C = "/icons/logos/companies/";

export const sponsors: Sponsor[] = [
    { name: "AWS", logo: C + "aws-light-logo.png", url: "https://aws.amazon.com/" },
    { name: "Blue Origin", logo: C + "bo-logo.png", url: "https://www.blueorigin.com/" },
    { name: "NVIDIA", logo: C + "nvidia-white.png", url: "https://www.nvidia.com/" },
    { name: "Google", logo: C + "google-color.png", url: "https://about.google/" },
    { name: "Jane Street", logo: C + "jane-street-blue.png", url: "https://www.janestreet.com/" },
    { name: "Chevron", logo: C + "chevron-logo.png", url: "https://www.chevron.com/" },
    { name: "Phillips 66", logo: C + "phillips66-logo.png", url: "https://www.phillips66.com/", scale: 1.5 },
    { name: "PNNL", logo: C + "pnnl.png", url: "https://www.pnnl.gov/" },
    { name: "Slalom", logo: C + "slalom-logo.png", url: "https://www.slalom.com/" },
    { name: "Pariveda", logo: C + "pariveda-logo.png", url: "https://www.parivedasolutions.com/" },
    { name: "Wolfram", logo: C + "wolfram-logo-white.png", url: "https://www.wolfram.com/" },
    { name: "ElevenLabs", logo: C + "elevenlabs.png", url: "https://elevenlabs.io", keepWhite: true },
    { name: "Celsius", logo: C + "celsius.png", url: "https://www.celsius.com", keepWhite: true },
];

export type Pillar = { index: string; title: string; body: string };

export const pillars: Pillar[] = [
    {
        index: "01",
        title: "Workshops",
        body: "Learn something new every week. Past topics include an AWS cloud workshop and reinforcement learning.",
    },
    {
        index: "02",
        title: "Socials",
        body: "Get to know industry professionals, club officers, and fellow students.",
    },
    {
        index: "03",
        title: "Company Talks",
        body: "Network and learn about companies.",
    },
];
