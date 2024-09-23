/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
			dropShadow: {
				"glow-md": ["0 0px 4px rgba(255,255, 255, 0.35)", "0 0px 4px rgba(255, 255,255, 0.2)"],
				"glow-sm": ["0 0px 2px rgba(255,255, 255, 0.35)", "0 0px 2px rgba(255, 255,255, 0.2)"],
			},
			backgroundImage: {
				stars: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png)",
				twinkling: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png)",
				clouds: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/clouds_repeat.png)",
			},
			animation: {
				background: "background linear infinite",
			},
			keyframes: {
				background: {
					"0%": {
						transform: "translate3d(0px, 0px, 0px)",
						"-webkit-transform": "translate3d(0px, 0px, 0px)",
					},
					"100%": {
						transform: "translate3d(1000px, 0px, 0px)",
						"-webkit-transform": "translate3d(1000px, 0px, 0px)",
					},
				},
			},
		},
	},
	plugins: [],
	corePlugins: {
		animation: false,
	},
};
