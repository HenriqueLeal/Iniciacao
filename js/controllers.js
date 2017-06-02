angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $stateParams, $state, $ionicModal, $timeout, $ionicPopup, $http, $window) {

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

   //CARREGAMENTO DO COMBO DE CARRO
    $scope.newCarro = function () {
      $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
       $http.get("http://localhost/EstacionamentoInteligente/www/site/recuperaMotorista.php").then(function(response){
        $scope.motorista = response.data.details;
        console.log($scope.motorista);
      });
      $scope.modalCarro.show();
    }
    //FIM DO CARREGAMENTO DO COMBO DE CARRO

   //CADASTRO DE USUARIO
    $scope.User = {};
    $scope.doLogin = function () {

      $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
      $http({
        url: "http://localhost/EstacionamentoInteligente/www/site/insertUser.php",
        method: "POST",
        headers: "application/x-www-form-urlencoded; charset=UTF-8",
        data: {
          "codigo": $scope.User.codigo,
          "nome": $scope.User.nome,
          "cpf": $scope.User.cpf,
          "telefone": $scope.User.telefone,
          "email": $scope.User.email,
          "tipo":$scope.User.tipo
        }
      }).
        success(function (response) {
          $scope.codeStatus = response.data;
          console.log($scope.User.tipo);
        }).
        error(function (response) {
          $scope.codeStatus = response || "Request failed";
        });

      $timeout(function () {
        $scope.closeLogin();
      }, 200);
    };
    //FIM DO CADASTRO DE USUARIO


    //CADASTRO DE CARROS
    $scope.Car = {};
    $scope.doCarro = function () {
     $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
      $http({
        url: "http://localhost/EstacionamentoInteligente/www/site/insertCar.php",
        method: "POST",
        headers: "application/x-www-form-urlencoded; charset=UTF-8",
        data: {
          "placa": $scope.Car.placa,
          "modelo": $scope.Car.modelo,
          "motorista": $scope.Car.motorista,
          "montadora": $scope.Car.montadora
        }
      }).
        success(function (response) {
          $scope.codeStatus = response.data;
          console.log($scope.Car.motorista);
        }).
        error(function (response) {
          $scope.codeStatus = response || "Request failed";
        });

      $timeout(function () {
        $scope.closeCarro();
      }, 200);
    };
    //FIM CADASTRO DE CARROS


    //PESQUISA USUARIO - search.html
     $scope.doSearch = function(){
        console.log("Abriu Pesquisa");
        $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        $http.get("http://localhost/EstacionamentoInteligente/www/site/searchDriver.php").then(function(response){
            $scope.usuario = response.data.details;
            console.log($scope.usuario);
      });
     };
    //FIM DA PESQUISA DE USUARIO


    //LOGIN
    $scope.Login = {};
    $scope.validaLogin = function () {

      $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
      $http({
        url: "http://localhost/EstacionamentoInteligente/www/site/validaLogin.php",
        method: "POST",
        headers: "application/x-www-form-urlencoded; charset=UTF-8",
        data: {
          "nome": $scope.Login.nome,
          "senha": $scope.Login.senha
        }
      }).
        success(function (response) {

          $scope.codeStatus = response.data;
          console.log(response.data);
          $window.location.href = '/principal.html';
          //  $scope.showPrincipal();
        }).
        error(function (response) {
          $scope.codeStatus = response || "Request failed";
          var confirmPopup = $ionicPopup.show({
            title: "<div class='bar bar-header bar-assertive'> <h1 class='title'>Erro</h1></div>",
             buttons: [
                {
                    text: 'OK'
                }],
            template: "<p id='usuarioliberado'>Usuário ou senha incorretos</p>"
          });
        });
    }
    //FIM DO LOGIN


  })

  .controller('ControllerPrincipal', function ($scope) {

    console.log("abriu search");
  })

