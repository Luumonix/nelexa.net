/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'50': '#F5F3FF',
  				'100': '#EDE9FE',
  				'200': '#DDD6FE',
  				'300': '#C4B5FD',
  				'400': '#A78BFA',
  				'500': '#8B5CF6',
  				'600': '#7C3AED',
  				'700': '#6D28D9',
  				'800': '#5B21B6',
  				'900': '#4C1D95',
  				'950': '#2E1065',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'50': '#FAF5FF',
  				'100': '#F3E8FF',
  				'200': '#E9D5FF',
  				'300': '#D8B4FE',
  				'400': '#C084FC',
  				'500': '#A855F7',
  				'600': '#9333EA',
  				'700': '#7E22CE',
  				'800': '#6B21A8',
  				'900': '#581C87',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				'50': '#FDF4FF',
  				'100': '#FAE8FF',
  				'200': '#F5D0FE',
  				'300': '#F0ABFC',
  				'400': '#E879F9',
  				'500': '#D946EF',
  				'600': '#C026D3',
  				'700': '#A21CAF',
  				'800': '#86198F',
  				'900': '#701A75',
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			gray: {
  				'50': '#F9FAFB',
  				'100': '#F3F4F6',
  				'200': '#E5E7EB',
  				'300': '#D1D5DB',
  				'400': '#9CA3AF',
  				'500': '#6B7280',
  				'600': '#4B5563',
  				'700': '#374151',
  				'800': '#1F2937',
  				'900': '#111827',
  				'950': '#030712'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'ui-sans-serif',
  				'system-ui',
  				'sans-serif'
  			],
  			heading: [
  				'Inter',
  				'ui-sans-serif',
  				'system-ui',
  				'sans-serif'
  			],
  			mono: [
  				'JetBrains Mono',
  				'ui-monospace',
  				'monospace'
  			]
  		},
  		borderRadius: {
  			sm: 'calc(var(--radius) - 4px)',
  			md: 'calc(var(--radius) - 2px)',
  			lg: 'var(--radius)',
  			xl: '0.75rem',
  			'2xl': '1rem'
  		},
  		maxWidth: {
  			container: '1280px'
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.5s ease-in-out',
  			'slide-up': 'slideUp 0.5s ease-in-out',
  			'slide-down': 'slideDown 0.5s ease-in-out',
  			'slide-left': 'slideLeft 0.5s ease-in-out',
  			'slide-right': 'slideRight 0.5s ease-in-out',
  			bounce: 'bounce 2s infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'gradient': 'gradient 8s linear infinite'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': { opacity: '0' },
  				'100%': { opacity: '1' }
  			},
  			slideUp: {
  				'0%': { transform: 'translateY(20px)', opacity: '0' },
  				'100%': { transform: 'translateY(0)', opacity: '1' }
  			},
  			slideDown: {
  				'0%': { transform: 'translateY(-20px)', opacity: '0' },
  				'100%': { transform: 'translateY(0)', opacity: '1' }
  			},
  			slideLeft: {
  				'0%': { transform: 'translateX(20px)', opacity: '0' },
  				'100%': { transform: 'translateX(0)', opacity: '1' }
  			},
  			slideRight: {
  				'0%': { transform: 'translateX(-20px)', opacity: '0' },
  				'100%': { transform: 'translateX(0)', opacity: '1' }
  			},
  			bounce: {
  				'0%, 100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-10px)' }
  			},
  			gradient: {
  				'0%, 100%': { 'background-position': '0% 50%' },
  				'50%': { 'background-position': '100% 50%' }
  			},
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			}
  		}
  	}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
      require("tailwindcss-animate")
],
}
