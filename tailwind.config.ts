import type { Config } from 'tailwindcss';
const { addIconSelectors } = require("@iconify/tailwind");

const config: Config = {
    content: [
        './src/**/*.{html,ts}', // Angular component ve HTML dosyaları
    ],
    theme: {
        extend: {
            colors: {
                'primary': 'rgb(47 119 189)',
                // 'primary': '#8EACCD',
                'secondary': '#FEF9D9',
                'card': '#D2E0FB',
                'secondary-card': '#F8EDE3',
                'header': '#DEE5D4',
                'secondary-header': '#DFD3C3',
                'hint': 'rgba(0, 0, 0, .38)',
                'hint-light': 'rgba(255, 255, 255, .5)',
                'base': 'rgb(245, 245, 248)',
                'black': 'rgba(0, 0, 0, .87)',
                'white': 'white',
                'navigation': '#ffffff',
                'secondary-text': '#85586F',
                'pending': '#FBC687',
                'completed': '#729762',
                'delete': '#F46060'
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