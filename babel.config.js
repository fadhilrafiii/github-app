module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          Screens: './Screens',
          Components: './Components',
          Shared: './Shared',
        },
      },
    ],
  ],
};
