angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $stateParams, $state, $ionicModal, $timeout, $ionicPopup, $http) {
//.controller('AppCtrl',['$scope', '$stateParams', '$state', '$http', '$ionicModal', '$timeout', '$ionicPopup', 
  //          function($scope, $stateParams, $state, $http, $ionicModal, $ionicPopup, $timeout){

    $scope.showAlert = function () {
      var alertPopup = $ionicPopup.alert({
        title: "<div class='bar bar-header bar-balanced'> <h1 class='title'>Liberação</h1></div>",
        template: "<p id='usuarioliberado'>Usuário Liberado!</p>",
        buttons: [
          {
            text: 'OK',
            type: 'button-royal'
          }]
      })
    };

    $scope.exclusao = function () {
      var confirmPopup = $ionicPopup.confirm({
        title: "<div class='bar bar-header bar-balanced'> <h1 class='title'>Confirmação</h1></div>",
        template: "<p id='usuarioliberado'>Deseja realmente apagar este motorista?</p>"
      });

      confirmPopup.then(function (res) {
        if (res) {
          history.back();
        }
      });
    };

    $ionicModal.fromTemplateUrl("templates/newUser.html", {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $ionicModal.fromTemplateUrl("templates/newCarro.html", {
      scope: $scope
    }).then(function (modalCarro) {
      $scope.modalCarro = modalCarro;
    });

    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    $scope.closeCarro = function () {
      $scope.modalCarro.hide();
    };

    $scope.login = function () {
      $scope.modal.show();
    };

    $scope.newCarro = function () {
      $scope.modalCarro.show();
    }


    $scope.doLogin = function () {
     $http({
       url: "http://localhost/EstacionamentoInteligente/www/site/insertUser.php",
       method: "POST",
       data:{
        "codigo":$scope.codigo, 
        "nome":$scope.nome, 
        "cpf":$scope.cpf,
        "telefone":$scope.telefone,
        "email":$scope.email
       }
     })

      $timeout(function () {
        $scope.closeLogin();
      }, 200);
    };

    $scope.doCarro = function () {
      $timeout(function () {
        $scope.closeCarro();
      }, 200);
    };
  })

  .controller('ControllerPrincipal', function ($scope) {
  })

