angular.module('doa-se').controller('FotosController', function($scope, recursoFoto) {
    // chama o module principal e no controller tem 2 parametros o nome quem é um camelcase com letras maiusculas que define o seu controller e uma function
    //$scope deixa a variavel visisvel para a view
    $scope.fotos = [];
    //$scope.filtro = '' le os dados da view com o objeto fotos  
    $scope.filtro = '';
    //$scope.filtro = '' recebe dados do que é prenchido na veiw com a propriedade filter:filtro e devolve o ng-repeat filtrado
    $scope.mensagem = '';

    recursoFoto.query(function(fotos) {
        $scope.fotos = fotos;
    }, function(erro) {
        console.log(erro);
    });

    $scope.remover = function(foto) {

        recursoFoto.delete({ fotoId: foto._id }, function() {
            var indiceDaFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceDaFoto, 1);
            $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
        });
    };

});