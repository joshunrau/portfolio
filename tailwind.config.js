import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: ['selector', '[data-mode="dark"]'],
  plugins: [containerQueries],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '4rem',
        md: '3rem',
        sm: '2rem'
      }
    },
    extend: {
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'var(--background)',
        border: 'var(--border)',
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)'
        },
        foreground: 'var(--foreground)',
        input: 'var(--input)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)'
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)'
        },
        ring: 'var(--ring)',
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)'
        }
      },
      spacing: {
        26: '6.5rem',
        112: '28rem',
        128: '32rem'
      }
    }
  }
}

