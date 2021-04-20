const { screens } = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
    purge: ["./src/**/*.{ts,tsx}"],
    mode: "jit", // use just in time compiler
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                black: "#0F0F10",
                gray: {
                    light: "#8faeb9",
                    mid: "#37352f",
                    dark: "#151617",
                },
                amber: {
                    200: colors.amber["200"],
                    500: "#FA6739",
                    600: "#E54F2D",
                    700: "#CC3F1F",
                },
            },
        },
        screens: {
            xs: "414px",
            ...screens,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/line-clamp"),
        require("@tailwindcss/typography"),
    ],
}
