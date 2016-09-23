babel-preset-labs42
===================

This package provides babel preset accepted and used in labs42 projects.

Requirements
------------

 * NodeJS 4+ and npm installed

Installation
------------

 * ``$ npm install babel-preset-labs42 --save-dev``

Usage
-----

Add the following code to your ``.babelrc`` file
```
{
  "ignore": "**/node_modules/**/*.js",
  "sourceMaps": "inline",
  "presets": [ "labs42" ]
}
```
