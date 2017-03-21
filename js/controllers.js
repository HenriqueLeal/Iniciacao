angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $ionicPopup) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

      // An alert dialog
        $scope.showAlert = function () {
          var alertPopup = $ionicPopup.alert({
          title: "<div class='bar bar-header bar-royal'> <h1 class='title'>Liberação</h1></div>",
          template: "<p id='usuarioliberado'>Usuário Liberado!</p>",
          buttons: [
         {
        text: 'OK',
        type: 'button-royal'}]
        }) };
      
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

      $scope.newCarro = function(){
        $scope.modalCarro.show();
      }


      $scope.doLogin = function () {
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

 