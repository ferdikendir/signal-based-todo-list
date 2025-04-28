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
                'hint': 'rgba(0, 0, 0, .38)',
                'hint-light': 'rgba(255, 255, 255, .5)',
                'card': '#ffffff',
                'base': 'rgb(245, 245, 248)',
                'black': 'rgba(0, 0, 0, .87)',
                'white': 'white',
                'navigation': '#ffffff'
            },
            boxShadow: (utils) => ({
                '2xl': '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.87)',
                '3xl': '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.87)'
            }),
            height: {
                'navigation': '64px'
            },
            spacing: {
                'gutter': '1.5rem'
            }
        },
    },
    plugins: [addIconSelectors(["mdi", "mdi-light", "material-symbols", "charm", "hugeicons"])],
};

export default config;