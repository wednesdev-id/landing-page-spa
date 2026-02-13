/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mara: {
          primary: '#0F3D3E',
          secondary: '#E8DCCB',
          accent: '#C6A86D',
          background: '#F8F6F2',
          text: '#2E2E2E',
          white: '#FFFFFF',
        },
        // Keep these for backward compatibility if needed, or remove if unused elsewhere
        'teal-wedding': '#0F3D3E',
        'cream-wedding': '#F8F6F2',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: '#2E2E2E', // mara-text
            a: {
              color: '#0F3D3E', // mara-primary
              '&:hover': {
                color: '#0d3536', // dark hover
              },
            },
            h1: { color: '#0F3D3E' },
            h2: { color: '#0F3D3E' },
            h3: { color: '#0F3D3E' },
            h4: { color: '#0F3D3E' },
            strong: { color: '#0F3D3E' },
            blockquote: {
              borderLeftColor: '#C6A86D', // mara-accent
              fontStyle: 'italic',
              color: '#555'
            },
            code: { color: '#C6A86D' }, // mara-accent
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
