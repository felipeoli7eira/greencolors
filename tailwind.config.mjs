/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#0E3221",
				secondary: "#00FC7E",
				gray: {
					100: "#333333",
					200: "#4F4F4F",
					300: "#828282",
					400: "#BDBDBD",
					500: "#E0E0E0",
					600: "#F2F2F2",
				},
				bluegray: '#4B5D68',
			},
		}
	},
	plugins: [],
};
