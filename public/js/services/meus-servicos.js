angular.module('meusServicos', ['ngResource'])
    .factory('recursoFoto', function($resource) { // recursoFoto nome que vai ser ingetado na minha controller

        return $resource('/v1/fotos/:fotoId', null, {
            'update': {
                method: 'PUT'
            }
        });
    })
    .factory("cadastroDeFotos", function(recursoFoto, $q) { //cadastroDeFotos serviço de validação do formulario de cadastroDeFotos
        var service = {};
        service.cadastrar = function(foto) {
            return $q(function(resolve, reject) {

                if (foto._id) {
                    recursoFoto.update({ fotoId: foto._id }, foto, function() {
                        resolve({
                            mensagem: 'Foto ' + foto.titulo + ' atualizada com sucesso',
                            inclusao: false
                        });
                    }, function(erro) {
                        console.log(erro);
                        reject({
                            mensagem: 'Não foi possível atualizar a foto ' + foto.titulo
                        });
                    });

                } else {
                    recursoFoto.save(foto, function() {
                        resolve({
                            mensagem: 'Foto ' + foto.titulo + ' incluída com sucesso',
                            inclusao: true
                        });
                    }, function(erro) {
                        console.log(erro);
                        reject({
                            mensagem: 'Não foi possível incluir a foto ' + foto.titulo
                        });
                    });
                }
            });
        };
        return service;
    });