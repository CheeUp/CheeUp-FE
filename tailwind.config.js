/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ring: 'hsl(var(--ring))',
        background: 'var(--background)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        'table-header': 'var(--table-header)',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      textColor: {
        black: 'var(--black)',
        white: 'var(--white)',
        deepgray: 'var(--deepgray)',
        disabled: 'var(--disabled)',
      },
      fontSize: {
        heading1: 'var(--text-heading1)',
        heading2: 'var(--text-heading2)',
        heading3: 'var(--text-heading3)',
        heading4: 'var(--text-heading4)',
        body1: 'var(--text-body1)',
        body2: 'var(--text-body2)',
        detail: 'var(--text-detail)',
      },
      borderColor: {
        border: 'var(--border)',
        input: 'var(--border-input)',
        activate: 'var(--border-activate)',
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 4px)`,
        sm: 'calc(var(--radius) - 8px)',
      },
      backgroundColor: {
        background: 'var(--background)',
        modal: 'var(--modal-background)',
      },
      width: {
        base: 'var(--width-base)',
      },
    },
    fontFamily: {
      Pretendard: ['Pretendard'],
    },
  },
  plugins: [require('tailwindcss-animate')],
};
