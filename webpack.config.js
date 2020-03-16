const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: './dist',
    },
    node: {
        fs: 'empty',
        child_process: 'empty'
    },
    module: {
        rules: [
          {
            test: [/.js$/],
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                    [
                      '@babel/preset-env',
                      {
                        targets: {
                          esmodules: true,
                        },
                      },
                    ],
                ],
              }
            }
          },
        ]
    },
  }