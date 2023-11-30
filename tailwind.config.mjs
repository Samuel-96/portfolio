/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter Variable', 'sans-serif', ...defaultTheme.fontFamily.sans],
			  },
			colors: {
				verde: "#58d68d",
				especial: "#264653"
			},
		},
	},
	plugins: [],
}
