/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",        // All App Router
    "./components/**/*.{js,ts,jsx,tsx}", // All Component
    "./lib/**/*.{js,ts,jsx,tsx}"         // Library
  ],
  theme: {
    extend: {
      colors: {
        // CSS Variable dynamic theme (dark/light)
        primaryVar: "var(--primary)",
        foregroundVar: "var(--foreground)",
        backgroundVar: "var(--background)",
        cardVar: "var(--card)",
        cardForegroundVar: "var(--card-foreground)",
        popoverVar: "var(--popover)",
        popoverForegroundVar: "var(--popover-foreground)",
        secondaryVar: "var(--secondary)",
        secondaryForegroundVar: "var(--secondary-foreground)",
        mutedVar: "var(--muted)",
        mutedForegroundVar: "var(--muted-foreground)",
        accentVar: "var(--accent)",
        accentForegroundVar: "var(--accent-foreground)",
        destructiveVar: "var(--destructive)",
        borderVar: "var(--border)",
        inputVar: "var(--input)",
        ringVar: "var(--ring)",
        chart1Var: "var(--chart-1)",
        chart2Var: "var(--chart-2)",
        chart3Var: "var(--chart-3)",
        chart4Var: "var(--chart-4)",
        chart5Var: "var(--chart-5)",
        sidebarVar: "var(--sidebar)",
        sidebarForegroundVar: "var(--sidebar-foreground)",
        sidebarPrimaryVar: "var(--sidebar-primary)",
        sidebarPrimaryForegroundVar: "var(--sidebar-primary-foreground)",
        sidebarAccentVar: "var(--sidebar-accent)",
        sidebarAccentForegroundVar: "var(--sidebar-accent-foreground)",
        sidebarBorderVar: "var(--sidebar-border)",
        sidebarRingVar: "var(--sidebar-ring)",

        // branding / accent
        primary: "#1c1c22",
        accentNeon: {
          accentNeon: "var(--accent-neon)",
          "accentNeon-hover": "var(--accent-neon)",
        },
      },
      fontFamily: {
        primary: "var(--font-primary)",
      },
      borderRadius: {
        sm: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
        xl: "calc(var(--radius) + 4px)",
      },
      container: {
        center: true,
        padding: "15px",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
  darkMode: "class", // Dark mode
};