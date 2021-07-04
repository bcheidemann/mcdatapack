const ShebangPlugin = require('webpack-shebang-plugin');

module.exports = function webpackConfig(config) {
    config.plugins.push(
        new ShebangPlugin(),
    );
    
    return config;
}