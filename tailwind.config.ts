import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				aurora: {
					primary: 'hsl(var(--aurora-primary))',
					secondary: 'hsl(var(--aurora-secondary))',
					accent: 'hsl(var(--aurora-accent))',
					glow: 'hsl(var(--aurora-glow))'
				},
				ai: {
					engineering: 'hsl(var(--ai-engineering))',
					medical: 'hsl(var(--ai-medical))',
					language: 'hsl(var(--ai-language))',
					processor: 'hsl(var(--ai-processor))',
					general: 'hsl(var(--ai-general))'
				}
			},
			fontFamily: {
				rajdhani: ['Rajdhani', 'sans-serif'],
			},
			backgroundImage: {
				'aurora-gradient': 'var(--gradient-aurora)',
				'ai-engineering': 'var(--gradient-ai-engineering)',
				'ai-medical': 'var(--gradient-ai-medical)',
				'ai-language': 'var(--gradient-ai-language)',
				'ai-processor': 'var(--gradient-ai-processor)',
			},
			boxShadow: {
				'aurora': 'var(--shadow-aurora)',
				'ai-glow': 'var(--shadow-ai-glow)',
				'card-dark': 'var(--shadow-card)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'aurora-flow': 'aurora-flow 8s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 6s ease-in-out infinite',
				'float': 'float 15s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;