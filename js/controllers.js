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

     $scope.User = {};

     $scope.doLogin = function () {
      $scope.User.codigo = 1;

      console.log($scope.User.codigo);
      console.log($scope.User.nome);
      console.log($scope.User.cpf);
      console.log($scope.User.telefone);
      console.log($scope.User.email);

     $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
     $http({
       url: "http://localhost/EstacionamentoInteligente/www/site/insertUser.php",
       method: "POST",
       headers: "application/x-www-form-urlencoded; charset=UTF-8", 
       data:{
        "codigo":$scope.User.codigo, 
        "nome":$scope.User.nome, 
        "cpf":$scope.User.cpf,
        "telefone":$scope.User.telefone,
        "email":$scope.User.email
       }
     }).
        success(function(response) {
            $scope.codeStatus = response.data;
        }).
        error(function(response) {
            $scope.codeStatus = response || "Request failed";
        }); 

      $timeout(function () {
        $scope.closeLogin();
      }, 200);
    };

    $scope.doCarro = function () {
      $timeout(function () {
        $scope.closeCarro();
      }, 200);
    };

    $scope.Login = {};
    $scope.validaLogin = function() {

      console.log($scope.Login.senha);

      $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
      $http({
       url: "http://localhost/EstacionamentoInteligente/www/site/validaLogin.php",
       method: "POST",
       headers: "application/x-www-form-urlencoded; charset=UTF-8", 
       data:{
        "nome":$scope.Login.nome, 
        "senha":$scope.Login.senha
       }
     }).
        success(function(response) {
            $scope.codeStatus = response.data;
        }).
        error(function(response) {
            $scope.codeStatus = response || "Request failed";
        }); 

    }


  })



  .controller('ControllerPrincipal', function ($scope) {
  })

