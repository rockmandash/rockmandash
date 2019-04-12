export default [
  {
    input: './build/esm/development.js',
    output: [
      {
        file: './build/umd.development.js',
        name: '_',
        format: 'umd'
      }
    ]
  },
  {
    input: './build/esm/production.js',
    output: [
      {
        file: './build/umd.production.js',
        name: '_',
        format: 'umd'
      }
    ]
  }
];
