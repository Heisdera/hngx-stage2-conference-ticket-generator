import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--teal-43))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--teal-19))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--teal-18))",
        ring: "hsl(var(--teal-31))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },

        teal: {
          5: "hsl(var(--teal-5))",
          6: "hsl(var(--teal-6))",
          7: "hsl(var(--teal-7))",
          8: "hsl(var(--teal-8))",
          9: "hsl(var(--teal-9))",
          10: "hsl(var(--teal-10))",
          11: "hsl(var(--teal-11))",
          13: "hsl(var(--teal-13))",
          14: "hsl(var(--teal-14))",
          17: "hsl(var(--teal-17))",
          18: "hsl(var(--teal-18))",
          19: "hsl(var(--teal-19))",
          31: "hsl(var(--teal-31))",
          43: "hsl(var(--teal-43))",
        },
        neutral: {
          67: "hsl(var(--neutral-67))",
          85: "hsl(var(--neutral-85))",
          98: "hsl(var(--neutral-98))",
        },
        transparentBlack: {
          20: "hsl(var(--transparent-black-20))",
        },
        transparentTeal: {
          0: "hsl(var(--transparent-teal-0))",
          20: "hsl(var(--transparent-teal-20))",
          50: "hsl(var(--transparent-teal-50))",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
