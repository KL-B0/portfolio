module.exports = {
  content: ['content/**/*.md', 'layouts/**/*.html', 'assets/js/**/*.js'],
  theme: {
    colors: {
      'primary': '#E63946',
      'secondary': '#F1FAEE',
      'text': '#A8DADC',
      'card': '#457B9D',
      'background': '#1D3557'
    },
    extend: {
      gridTemplateColumns: {
        'journey': 'max-content 1fr',
        'journey-md': '1fr max-content 1fr'
      },
      boxShadow: {
        'menu': '0 -1px 20px rgba(0, 0, 0, 0.15)',
      },
      spacing: {
        'menu': '-20rem',
      },
      transitionDelay: {
        '1200': '1200ms',
        '2000': '2000ms'
      }
    },
  },
  plugins: [],
}
