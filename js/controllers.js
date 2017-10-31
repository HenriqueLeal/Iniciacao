angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $stateParams, $state, $ionicModal, $timeout, $ionicPopup, $http, $window) {

    $scope.showAlert = function (sucesso) {
      if (sucesso) {
         var alertPopup = $ionicPopup.alert({
                title: "<div class='bar bar-header bar-balanced'> <h1 class='title'>Liberação Confirmada</h1></div>",
                template: "<p id='usuarioliberado'>Usuário Liberado!</p>",
                buttons: [{
                     text: 'OK',
                     type: 'button-royal'
                }]
             }) 
      }
      else{
         var alertPopup = $ionicPopup.alert({
                title: "<div class='bar bar-header bar-assertive'> <h1 class='title'>Liberação Negada</h1></div>",
                template: "<p id='usuarioliberado'>Usuário Não Encontrado</p>",
                buttons: [{
                     text: 'OK',
                     type: 'button-royal'
                }]
             }) 
      }
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

    //VERIFICACAO DO ARQUIVO
      $scope.Automatica = {};
      $scope.doAutomatica = function(){

         Tesseract.recognize(url).then(function(result) {
                  $scope.Automatica.placa = result.text;
                });

       /*  $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
         $http({
             url: "http://localhost/EstacionamentoInteligente/www/site/liberaAutomatica.php",
             method: "POST",
             headers: "application/x-www-form-urlencoded; charset=UTF-8",
             data: {
              "url": $scope.Automatica.placa
             }
          }).
        success(function (response) {
          $scope.codeStatus = response.data;
          console.log($scope.User.tipo);
        }).
        error(function (response) {
          $scope.codeStatus = response || "Request failed";
        });  */       
    };
    //FIM DA VERIFICACAO DO ARQUIVO
    
   //INSERÇÃO DE CANCELA
    $scope.Cancela = {};
    $scope.doCancela = function(){
        console.log($scope.Cancela.user);
        $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        $http({
          url: "http://localhost/EstacionamentoInteligente/www/site/liberaPortaria.php",
           method: "POST",
           headers: "application/x-www-form-urlencoded; charset=UTF-8",
           data: {
              "user": $scope.Cancela.user,
              "tipo": $scope.Cancela.tipo
          }
        }).
        success(function (response) {
          console.log(response);
          if (response == "true") {
            $scope.showAlert(true);
          }
          else{
             $scope.showAlert(false);
          }
        })
    }
    //FIM DA INSERÇÃO DE CANCELA

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

    //RELATÓRIO DE ENTRADA E SAÍDA - report.html
    $scope.Report = {};
    $scope.doReport = function(){
       console.log("Abriu Report");
        $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
         $http({
        url: "http://localhost/EstacionamentoInteligente/www/site/Report.php",
        method: "POST",
        headers: "application/x-www-form-urlencoded; charset=UTF-8",
        data: {
          "DtInicio": $scope.Report.DtInicio,
          "DtFim": $scope.Report.DtFim
        }
      })
    }

    //FIM DO RELATÓRIO

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

