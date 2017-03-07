
    //Inicializa a aplicação em AngularJS
    angular.module("controleAtividades", ['jkuri.datepicker']);
    
    //Inicializa a controller da lista de atividades
    angular.module("controleAtividades").controller("controleAtividadesCtrl", function($scope) {

      //Array de atividades
      $scope.atividadesLista = [];

      //Array de status
      $scope.statusLista = [
        {nome : "Concluído"},
        {nome : "Em andamento"},
        {nome : "Não concluído"},
        {nome : "Stand-by"}
      ];

      //Adiciona atividade da base de dados
      $scope.addAtividade = function(atividade) {
        $scope.atividadesLista.push(atividade);
        delete $scope.atividade;
        $scope.atividadeForm.$setPristine();
      };

      //Exclui atividade da base de dados
      $scope.delAtividade = function(atividadesLista) {
        $scope.atividadesLista = atividadesLista.filter( function(atividade) {
          if (!atividade.selecionado) return atividade;
        });
      };

    });