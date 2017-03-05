/**
 * Created by ben.kl on 3/4/2017.
 */

import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry:[
    path.resolve(__dirname,'src/index')
  ],
  target: 'web',
  output:{
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {test: /\.js$/, exclude: /node_modules/,loaders:['babel']},
      {test: /\.css$/, exclude: /node_modules/,loaders: ['style','css']}
    ]
  }
}
