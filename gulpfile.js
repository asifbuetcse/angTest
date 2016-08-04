var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
    var assetPath = 'public/assets';
    var assetsCopy = [
        ['resources/assets/angular-rateit/', '/angular-rateit'],
        ['resources/assets/javascripts/', '/js'],
        ['node_modules/jquery/dist', '/js'],
        ['node_modules/angular/angular.min.js', '/js'],
        ['node_modules/angular-route/angular-route.min.js', '/js'],
        ['node_modules/angular-ui-router/release/angular-ui-router.min.js', '/js'],
        ['node_modules/angular-translate/dist/angular-translate.min.js', '/js'],
        ['node_modules/angular-translate/dist/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js', '/js'],
        ['resources/assets/angular/', '/angular'],
        ['node_modules/bootstrap-sass/assets/fonts', '/fonts'],
        ['node_modules/font-awesome/fonts', '/font-awesome/fonts'],
        ['node_modules/font-awesome/css', '/font-awesome/css'],
        ['node_modules/ionicons/fonts', '/ionicons/fonts'],
        ['node_modules/ionicons/css', '/ionicons/css'],
        ['vendor/almasaeed2010/adminlte/dist', '/adminlte'],
        ['vendor/almasaeed2010/adminlte/plugins', '/adminlte/plugins'],
        ['design/images', '/images'],
    ];

    for (var i = 0; i < assetsCopy.length; i++) {
        mix.copy(assetsCopy[i][0], assetPath + assetsCopy[i][1]);
    }

    mix.sass('app.scss',  assetPath + '/css');
});

