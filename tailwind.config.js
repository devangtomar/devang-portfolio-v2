/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                dyna: ['Roboto', 'sans-serif'],
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}