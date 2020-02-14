const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './src/**/*.{html,jsx}',
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});
const cssnano = require('cssnano')('cssnano-advanced-preset');

module.exports = {
    "plugins": [
        require('stylelint')('./stylelint.config.js'),
        require("postcss-import"),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production' ? [purgecss, cssnano] : []
    ]
}