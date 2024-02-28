/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ['"Inter", sans-serif;', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				background: "#E0D1C5",
			},
			gridTemplateAreas: {
				layout: ["title . image", "text . image"],
			},
			gridTemplateColumns: {
				layout: "7fr 1fr 4fr",
			},
			gridTemplateRows: {
				layout: "auto 1fr",
			},
		},
	},
	plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
