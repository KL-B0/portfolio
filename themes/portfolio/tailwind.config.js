module.exports = {
  content: ['content/**/*.md', 'layouts/**/*.html'],
  theme: {
    colors: {
      'primary': '#588157',
      'secondary': '#3A5A40',
      'text': '#344E41',
      'container': '#A3B18A',
      'background': '#DAD7CD'
    },
    extend: {
      boxShadow: {
        'menu': '0 -1px 20px rgba(0, 0, 0, 0.15)',
      },
      spacing: {
        'menu': '-20rem',
      }
    },
  },
  plugins: [],
}
