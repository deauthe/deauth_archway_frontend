import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#f97316",
				"primary-content": "#ffedd5",
				secondary: "#ef4444",
				"secondary-content": "#fee2e2",
				accent: "#facc15",
				"accent-content": "#fef9c3",
				neutral: "#d1d5db",
				"neutral-content": "#374151",
				"base-100": "#fff7f6",
				"base-200": "#ded7d6",
				"base-300": "#beb7b7",
				"base-content": "#161515",
				info: "#a8a29e",
				"info-content": "#0a0a09",
				success: "#bef264",
				"success-content": "#0d1403",
				warning: "#fdba74",
				"warning-content": "#160d05",
				error: "#fca5a5",
				"error-content": "#160a0a",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 100% , var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#f97316",
					"primary-content": "#ffedd5",
					secondary: "#ef4444",
					"secondary-content": "#fee2e2",
					accent: "#facc15",
					"accent-content": "#fef9c3",
					neutral: "#d1d5db",
					"neutral-content": "#374151",
					"base-100": "#fff7f6",
					"base-200": "#ded7d6",
					"base-300": "#beb7b7",
					"base-content": "#161515",
					info: "#a8a29e",
					"info-content": "#0a0a09",
					success: "#bef264",
					"success-content": "#0d1403",
					warning: "#fdba74",
					"warning-content": "#160d05",
					error: "#fca5a5",
					"error-content": "#160a0a",
				},
			},
		],
	},
};
export default config;
