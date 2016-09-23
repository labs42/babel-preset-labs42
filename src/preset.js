module.exports = {
    plugins: [
        'transform-es2015-modules-commonjs',
        'transform-async-to-generator',
        'transform-decorators-legacy',
        'transform-class-properties',
        'transform-es2015-destructuring',
        'transform-object-rest-spread',
    ].map(require)
}