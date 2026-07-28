/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Todas apuntan a variables CSS definidas en src/styles/global.css
        // para poder re-brandear por cliente cambiando solo el CSS.
        paper: 'var(--color-paper)',
        'paper-dark': 'var(--color-paper-dark)',
        ink: 'var(--color-ink)',
        accent: 'var(--color-accent)',
        'accent-soft': 'var(--color-accent-soft)',
        muted: 'var(--color-muted)',
        line: 'var(--color-line)',
        price: 'var(--color-price)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      letterSpacing: {
        tightest2: '-0.03em',
      },
    },
  },
  plugins: [],
};