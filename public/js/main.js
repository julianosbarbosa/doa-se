angular.module('doa-se', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
    //modulo principal usa o objeto global>>angular. tem 2 parametros primeiro o nome do app e o segundo é um arrey com os modulos que vao ser usados
    .config(function($routeProvider, $locationProvider) { //a funçao $routeProvider do ngRoute cnfigura rotas
$locationProvider.html5Mode(true);
//$locationProvider faz com que a url nao apareça o #
        $routeProvider.when('/fotos', { //quando tiver no browser /fotos
            templateUrl: 'partials/principal.html',  //chama o template partials/principal.html
            controller: 'FotosController' //e o controller que esta sendo usado 
        });

        $routeProvider.when('/fotos/new', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        $routeProvider.when('/fotos/edit/:fotoId', { // :fotoId é um curinga da acesso ao controller o id que vai ser alterado  
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        $routeProvider.otherwise({ redirectTo: '/fotos' }); //otherwise caso suario use uma rota que nao exite ele faz um redirectTo p /fotos

    });