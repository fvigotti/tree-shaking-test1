
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: "development",
  //mode: "production",
  //devtool: "none",
  entry: {
    "entry1-call-nothing" : "./src/entry1-call-nothing.ts",
    "entry2-call-everything" : "./src/entry2-call-everything.ts",
    "entry3-call-sub" : "./src/entry3-call-sub.ts",

  } ,
  devtool: "none", // none= more readable output code when not minified, less debuggable in browser runtime maybe
  // optimization: {
  //   usedExports: true,
  // },
  stats: {
    usedExports: true
  },
  plugins: [
    new CleanWebpackPlugin(),

  ],
  module: {
    //usedExports: true,
    rules: [
      {
        test: /\.(js|tsx?)$/,
        exclude: /node_modules/,
        use: [
          {

            // We are piping through babel to get Webpack 4 Tree Shaking support with { 'sideEffects' : false }
            loader: 'babel-loader',

            options: {
              "presets": [
                [
                  "@babel/preset-env",
                ]
              ],
              plugins: ['minify-dead-code-elimination']
            }
          },
          {
            loader: 'ts-loader',
            options: ({
              transpileOnly: true,

              // Since we are piping trough babel we have to target es2016
              compilerOptions: {
                target: "es2016",
                module: "es6",
              },
            })
          }]

      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },

  //  optimization: {
  //         namedModules: true,
  //       namedChunks: true,
  //       nodeEnv: 'development',
  //       flagIncludedChunks: false,
  //       occurrenceOrder: false,
  //       concatenateModules: false,
  //       splitChunks: {
  //       hidePathInfo: false,
  //           minSize: 10000,
  //           maxAsyncRequests: Infinity,
  //           maxInitialRequests: Infinity,
  //         },
  //   noEmitOnErrors: false,
  //       checkWasmTypes: false,
  //       minimize: false,
  //       removeAvailableModules: false
  // },
  output: {
    //filename: "bundle.js",
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    //path: path.resolve(__dirname, 'dist/trackers'),
  },
  optimization: {
    usedExports: true,
    minimizer: [ //
      new TerserPlugin({
        extractComments: 'all',
        terserOptions: {
          compress: {
          },
          output: {
            beautify: true,
            preamble: "/* minified */"
          }
        },
      }),
    ],
  }
};

//export default config;
