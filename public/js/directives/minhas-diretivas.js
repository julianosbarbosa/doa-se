angular.module('minhasDiretivas', [])
    //modulo minhasDiretivas chamado no modulo principal
    .directive('meuPainel', function() {
        //directive tem 2 aparametros nome camelcase que vai ser usado no nome com ifen html e uma função
        var ddo = {};
        //toda diretiva tem que devolver um ddo que é a diretiva  configurada
        ddo.restrict = "AE";
        //primeiro passa restrições AE Atributo e Elementos
        ddo.transclude = true;
        //ddo.transclude faz com que a diretiva reconheça os elementos filhos no html

        ddo.scope = {
            titulo: '@'
        };

        ddo.templateUrl = 'js/directives/meu-painel.html'; //templateUrl usa o html fora do javascript

        return ddo;
        //toda diretiva tem que devolver um ddo que é a diretiva  configurada
    })
    .directive('minhaFoto', function() {

        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            //ddo.scope encpsula as informaçoes dentro da diretiva para poder ser usadas em outas views
            titulo: '@',
            url: '@'
                //titulo: '@' url: '@' é como eu passo informaçoes de string para dentro da minha diretiva
        };

        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';
        //  ddo.template é p html que vai ser substituido pela minha diretiva
        return ddo;
    })
    .directive('meuBotaoPerigo', function() {
        var ddo = {};
        ddo.restrict = "E";
        ddo.scope = {
            nome: '@',// @ é uma copia
            acao: '&' // & é uma expresão a ser avaliada pelo controller
        }
        ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()"><i class="material-icons left">delete</i>{{nome}}</button>';

        return ddo;
    });