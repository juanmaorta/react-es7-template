/* global module */
module.exports = function (config) {
  'use strict';
  config.set({
    plugins: [
       'karma-jspm',
       'karma-jasmine',
       'karma-phantomjs-launcher',
       'karma-babel-preprocessor'
    ],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js'
    ],
    preprocessors: {
        'src/!(*spec).js': ['babel', 'sourcemap', 'coverage']
    },
    babelPreprocessor: {
        options: {
            sourceMap: 'inline',
            blacklist: ['useStrict']
        },
        sourceFileName: function(file) {
            return file.originalPath;
        }
    },
    autoWatch: true,
    singleRun: true,
    frameworks: ['jspm', 'jasmine'],
    preprocessors: {
      // Remember to include both the source and test files
      'src/*.jsx?': ['babel'],
      'spec/*spec.jsx': ['babel'],
    },
    browsers: ['PhantomJS'],
    reporters: ['progress']
  });
};
