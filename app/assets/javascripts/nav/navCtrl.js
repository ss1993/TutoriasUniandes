angular.module('tutoriasCEU')
    .controller('NavCtrl', [
        '$scope',
        'Auth',
        '$modal',
        '$state',
        function($scope, Auth, $modal, $state){

            $scope.state = $state;

            $scope.openLogin = function () {

                var modalInstance = $modal.open({
                    templateUrl: 'auth/_login.html',
                    controller: 'AuthCtrl'
                });
            };

            $scope.signedIn = Auth.isAuthenticated;
            $scope.logout = Auth.logout;

            Auth.currentUser().then(function (student){
                $scope.student = student;
            });

            $scope.$on('devise:new-registration', function (e, student){
                $scope.student = student;
            });

            $scope.$on('devise:login', function (e, student){
                $scope.student = student;
            });

            $scope.$on('devise:logout', function (e, student){
                $scope.student = {};
                $state.go('home');
            });

        }]);