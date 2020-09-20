# my-viz

## Description

A prototype data vizualization web site for illustrating machine learning concepts

## Code

The code source is written in typescript and is in the `\src` folder
The html and css source is in the `\public` folder
A nodejs express web server is used to serve the static files. It is written in typescript and is in the `\server` folder


## Installing

Run `npm i` to restore the libraries used by the application

## Using

Run `npm run start:dev` to start the express web server and serve the static html files on `http://localhost:4000`

## Developing

1.  Run `npm run build:dev` to run rollup.js which bundles the transpiled typescript into a single file in `public\js`
2.  Run `npm run buildserver` to transpile the server code
3.  Run `npm run watch:dev` to start the express web server and serve the static html files on `http://localhost:4000`

## Acknowledgements

Based on [Tensorflow Playground](https://github.com/tensorflow/playground)