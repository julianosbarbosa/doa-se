//<!--fotos controller é da principal-->
angular.module('doa-se').controller('FotosController', function($scope, recursoFoto) {
    // chama o module principal e no controller tem 2 parametros o nome quem é um camelcase com letras maiusculas que define o seu controller e uma function
    //$scope deixa a variavel visisvel para a view
    $scope.fotos = [];
    //$scope.filtro = '' le os dados da view com o objeto fotos  
    $scope.filtro = '';
    //$scope.filtro = '' recebe dados do que é prenchido na veiw com a propriedade filter:filtro e devolve o ng-repeat filtrado
    $scope.mensagem = '';

    recursoFoto.query(function(fotos) {//.query ele faz o v1/fotos
        $scope.fotos = fotos;
    }, function(erro) {
        console.log(erro);
    });

    $scope.remover = function(foto) {//função  que remove a foto

        recursoFoto.delete({ fotoId: foto._id }, function() {
            var indiceDaFoto = $scope.fotos.indexOf(foto); //o indece da foto que vai ser removida
            $scope.fotos.splice(indiceDaFoto, 1);// $scope.fotos.splice remove a foto e passa 1 no pararmetro
            $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';//mensagem para o usuario
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;//mensagem para o usuario
        });
    };

});