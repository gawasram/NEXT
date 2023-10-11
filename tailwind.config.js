/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      './components/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      // any other paths where your components are defined
    ]
  },
  theme: {
    extend: {
      backgroundImage: theme => ({
        'navbar-pattern': "url('/path-to-your/navbar-image.jpg')",
        'one-third-pattern': "url('/rightsidebar.jpg')",
        'two-thirds-index': "url('/homeport.jpg')",
        'two-thirds-landtiles': "url('/path-to-your/landtiles-image.jpg')",
        'two-thirds-myholding': "url('/path-to-your/myholding-image.jpg')",
        // Add more background images as needed
      })
    },
    
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
  "extends": [
    "plugin:jsx-a11y/recommended"
  ]
}
