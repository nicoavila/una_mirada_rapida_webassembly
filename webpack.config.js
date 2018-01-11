module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/build',
      libraryTarget: 'var',
      library: 'UnaMiradaRapidaWebAssembly'
    },
    module: {
      rules: [
        {
          test: /\.rs$/,
          use: {
            loader: 'rust-wasm-loader',
            options: {
              path: 'build',
              release: true
            }
          }
        }
      ]
    },
    externals: {
      'fs': true,
      'path': true,
    }
  }