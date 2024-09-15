// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Додано плагін для очищення
// const path = require('path');

// module.exports = {
//   mode: 'development',
//   entry: './src/js/script.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpg|jpeg|gif|svg)$/i,
//         use: [
//           { 
//             loader: 'file-loader',
//             options: {
//               name: '[name].[ext]',
//               outputPath: 'images/',
//             },
//           },
//         ],
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
//   plugins: [
//     new CleanWebpackPlugin(), // Додано плагін для очищення папки dist
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//       filename: 'index.html',
//     }),
//   ],
// };

// import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';

// export default {
//   mode: 'development',  // или 'production'
//   entry: './src/js/script.js',  // Главный файл JS, где импортируются стили и изображения
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve('dist'),  // Путь для выхода
//     clean: true,  // Очищает папку dist перед каждой сборкой
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpg|jpeg|gif|svg)$/i,  // Для изображений
//         type: 'asset/resource',  // Встроенная поддержка Webpack 5
//       },
//       {
//         test: /\.s?css$/,  // Для SCSS и CSS
//         use: [
//           'style-loader',  // Встраивает стили в HTML
//           'css-loader',    // Обрабатывает CSS
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html',  // Ваш HTML-файл
//       filename: 'index.html',
//     }),
//   ],
// };

// import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';

// export default {
//   mode: 'development',  // или 'production'
//   entry: './src/js/script.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve('dist'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,  // Для SCSS
//         use: [
//           'style-loader', // Внедряет стили в DOM
//           'css-loader',   // Преобразует CSS в JavaScript
//         ],
//       },
//       {
//         test: /\.css$/,  // Для CSS
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//       filename: 'index.html',
//     }),
//   ],
// };

// import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';

// export default {
//   mode: 'development',  // или 'production'
//   entry: './src/js/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve('dist'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpg|jpeg|gif|svg)$/i,  // Для изображений
//         type: 'asset/resource',  // Встроенная обработка изображений
//       },
//       {
//         test: /\.css$/,  // Для CSS
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//       filename: 'index.html',
//     }),
//   ],
// };


// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import path from 'path';

// export default {
//   mode: 'development', // или 'production'
//   entry: './src/js/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve('dist'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpg|jpeg|gif|svg)$/i,
//         type: 'asset/resource',
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html',  // Путь к index.html
//       filename: 'index.html',
//     }),
//   ],
// };


import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Убедитесь, что этот путь корректный
      filename: 'index.html',
    }),
  ],
};

