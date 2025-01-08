module.exports = {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader', // Injects CSS into the DOM
            'css-loader', // Translates CSS into CommonJS
            {
              loader: 'postcss-loader', // Applies PostCSS transformations
              options: {
                postcssOptions: {
                  plugins: [
                    require('autoprefixer'),
                  ],
                },
              },
            },
            {
              loader: 'resolve-url-loader', // Resolves relative paths in SCSS
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader', // Compiles SCSS to CSS
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
  };
  