/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        content: 'rgb(var(--color-content) / <alpha-value>)',
        primary: 'rgb(var(--color-button-primary) / <alpha-value>)',
        primaryHover: 'rgb(var(--color-button-primary-hover) / <alpha-value>)',
        edit: 'rgb(var(--color-button-edit) / <alpha-value>)',
        editHover: 'rgb(var(--color-button-edit-hover) / <alpha-value>)',
        delete: 'rgb(var(--color-button-delete) / <alpha-value>)',
        deleteHover: 'rgb(var(--color-button-delete-hover) / <alpha-value>)',
        select: 'rgb(var(--color-button-select) / <alpha-value>)',
        selectHover: 'rgb(var(--color-button-select-hover) / <alpha-value>)',
      },
    },
  },
  plugins: [],
  important: true,
}
