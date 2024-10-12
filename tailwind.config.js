/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			// Variabel custom font, agar Tailwind bisa mengenali font yang kita gunakan
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				instrument: ['Instrument Serif', 'serif'],
			},
			// Variabel custom warna
			colors: {
				custred: '#df4a3c',
				custorange: '#f9a15d'
			},
		},
	},
	plugins: [],
};
