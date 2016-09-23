module.exports = {
    plugins: [
        'babel-plugin-transform-es2015-modules-commonjs',
        'babel-plugin-transform-async-to-generator',
        'babel-plugin-transform-decorators-legacy',
        'babel-plugin-transform-class-properties',
        'babel-plugin-transform-es2015-destructuring',
        'babel-plugin-transform-object-rest-spread',
    ].map(require)
}
