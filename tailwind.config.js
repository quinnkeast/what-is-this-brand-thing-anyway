module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      gridTemplateColumns: {
        'body': '1fr 34rem 1fr',
        'md-body': 'minmax(1fr, 34rem) 12rem'
      },
      spacing: {
        'content': '34rem'
      }
    },
  },
  variants: {},
  plugins: [],
}
