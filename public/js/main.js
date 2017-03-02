angular.module('doa-se', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
    //modulo principal usa o objeto global>>angular. tem 2 parametros primeiro o nome do app e o segundo é um arrey com os modulos que vao ser usados
    .config(function($routeProvider, $locationProvider) {

        $routeProvider.when('/fotos', {
            templateUrl: 'partials/principal.html',
            controller: 'FotosController'
        });

        $routeProvider.when('/fotos/new', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        $routeProvider.when('/fotos/edit/:fotoId', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        $routeProvider.otherwise({ redirectTo: '/fotos' });

    });