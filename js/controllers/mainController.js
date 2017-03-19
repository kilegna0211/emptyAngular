// MAIN CONTROLLER
function mainController($scope) {
    $scope.users = [];
    $scope.addUser = function(){
    var insert = {};
    insert.lastname   =  $scope.lastname;
    insert.firstname =  $scope.firstname;
    insert.email    =  $scope.email;
    $scope.users.push(insert);
    $scope.lastname   = "";
    $scope.firstname = "";
    $scope.email    = "";
    $scope.deleteUser = function($index){
    $scope.users.splice($index,1);
   };
 };
}
