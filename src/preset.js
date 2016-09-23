module.exports = {
    plugins: [
        require('babel-plugin-transform-es2015-modules-commonjs'),
        require('babel-plugin-transform-async-to-generator'),
        require('babel-plugin-transform-decorators-legacy').default,
        require('babel-plugin-transform-class-properties'),
        require('babel-plugin-transform-es2015-destructuring'),
        require('babel-plugin-transform-object-rest-spread'),
    ]
}
