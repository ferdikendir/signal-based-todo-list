import type { Config } from 'tailwindcss';
const { addIconSelectors } = require("@iconify/tailwind");

const config: Config = {
    content: [
        './src/**/*.{html,ts}', // Angular component ve HTML dosyaları
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#AE6D47',
                'secondary': '#F5F5F5',
            },
        },
    },
    plugins: [addIconSelectors(["mdi", "mdi-light", "material-symbols", "charm", "hugeicons"])],
};

export default config;