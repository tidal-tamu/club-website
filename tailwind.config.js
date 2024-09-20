/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            spacing: {
                '60': '15rem',  // Adds a spacing value of 60, equivalent to 15rem
                '70': '17.5rem',
                '80': '20rem',
                '90': '22.5rem',
                '100': '25rem',
                '110': '27.5rem',
                '120': '30rem',
            },
            fontFamily: {
                mont: ["Montserrat", "sans-serif"],
            },
            fontWeight: {
                light: 300,
                normal: 400,
                medium: 500,
                semibold: 600,
                bold: 700,
            },
            colors: {
                navy: "#005174",
                lightBlue: "#C5EDFF",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-5%)" },
                },
            },
            animation: {
                float: "float 2s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
