module.exports = {
  content: ['content/**/*.md', 'layouts/**/*.html'],
  theme: {
    colors: {
      'primary': '#E63946',
      'secondary': '#F1FAEE',
      'text': '#A8DADC',
      'card': '#457B9D',
      'background': '#1D3557'
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
