var elixir = require('laravel-elixir');

require('laravel-elixir-postcss');

config.publicPath = '.';
config.assetsPath = '.';
config.css.sass.folder = './css/sass';

elixir(function(mix) {
    mix.postcss('app.css', {
        plugins: [
            require('postcss-import'),
            require('postcss-cssnext'),
            require('lost'),
            require('autoprefixer')
        ],
        srcDir: './css/postcss/',
        output: './css/'
    });

    mix.browserSync({ proxy: 'btlstyle.dev' });
});