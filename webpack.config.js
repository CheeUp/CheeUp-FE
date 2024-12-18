{
  test: /\.svg$/;
  use: [
    {
      loader: '@svgr/webpack',
      options: {
        svgoConfig: {
          plugins: [
            { removeViewBox: false }, // Keep viewBox attributes
            { cleanupIDs: false }, // Prevent ID conflicts
          ],
        },
      },
    },
  ];
}
