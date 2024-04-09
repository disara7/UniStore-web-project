const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point for your application
    output: {
      path: path.resolve(__dirname, 'dist'), // Output directory for the bundled code
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, // Matches JavaScript and JSX files
          exclude: /node_modules/, // Excludes files in node_modules
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
            test: /\.(css|scss)$/, // Matches CSS and SCSS files
            use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg)$/, // Matches image file extensions
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]', // Output file name format
                },
              },
            ],
          },
      ],
    },
  };
  