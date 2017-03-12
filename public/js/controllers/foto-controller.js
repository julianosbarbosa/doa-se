//<!--fotos controller é da principal-->
angular.module('doa-se')
	.controller('FotoController', function($scope, recursoFoto, $routeParams, cadastroDeFotos) {

		$scope.foto = {};
		$scope.mensagem = '';

		if($routeParams.fotoId) { //pega o curinga fotoId do modulo main
			recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) { //se for passado id o get busca pelo id q foi passado
				$scope.foto = foto; //a foto é substituida
			}, function(erro) {
				console.log(erro);	
				$scope.mensagem = 'Não foi possível obter a foto'
			});
		}

		$scope.submeter = function() { //após o click do usuario no submit da view foto o ng-submit="submeter()" chama essa funçao

			if ($scope.formulario.$valid) { //verifica se o formulario ta valido antes de cadastrar a foto
				cadastroDeFotos.cadastrar($scope.foto)
				.then(function(dados) {
					$scope.mensagem = dados.mensagem;
					if (dados.inclusao) $scope.foto = {};
				})
				.catch(function(erro) {
					$scope.mensagem = erro.mensagem;
				});
			}
		};
	});