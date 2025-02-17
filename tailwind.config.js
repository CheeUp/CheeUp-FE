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
          light: 'var(--primary-light)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        complementary: {
          darksalmon: 'var(--darksalmon)',
          boogerbuster: 'var(--boogerbuster)',
          mediumpurple: 'var(--mediumpurple)',
          skyblue: 'var(--skyblue)',
          lightcrimson: 'var(--lightcrimson)',
          lightgreen: 'var(--lightgreen)',
          aquamarine: 'var(--aquamarine)',
          action: {
            DEFAULT: 'var(--warning)',
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
        calender: {
          header: 'var(--calendar-header)',
          border: 'var(--calendar-border)',
        },
        stepper: {
          DEFAULT: 'var(--stepper-inactive)',
          active: 'var(--primary)',
        },
      },
      textColor: {
        black: 'var(--text-black)',
        white: 'var(--text-white)',
        deepgray: 'var(--text-deepgray)',
        disabled: 'var(--text-disabled)',
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
        xl: 'calc(var(--radius) + 0.75rem)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 0.25rem)',
        sm: 'calc(var(--radius) - 0.5rem)',
      },
      outlineColor: {
        activate: 'var(--border-activate)',
      },
      backgroundColor: {
        background: 'var(--background)',
        deepgray: 'var(--background-deepgray)',
        modal: 'var(--modal-background)',
      },
      width: {
        base: 'var(--width-base)',
      },
      dropShadow: {
        modal: 'var(--shadow-modal)',
      },
    },
    fontFamily: {
      Pretendard: ['Pretendard'],
    },
    plugins: [require('tailwindcss-animate')],
  },
};
