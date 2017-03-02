angular.module('doa-se')
    .controller('GruposController', function($scope, $http) {
        //$http é um serviço do angular de fazer requisição ajax e encadeia promecess
        $http.get('/v1/grupos')
            .success(function(grupos) {
                $scope.grupos = grupos;
            })
            .error(function(erro) {
                console.log(erro);
            });
    });