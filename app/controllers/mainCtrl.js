angular.module('todoApp').controller('mainCtrl', function($scope, mainServ){

  $scope.todos;
  $scope.id;
  $scope.hide = true;
  $scope.show = true;

  $scope.getTodos = function(){
    mainServ.getTodosServ()
    .then(function(response){
      console.log(response);
      $scope.todos = response;
    })
  }

  $scope.postTodos = function(task){
    mainServ.postTodosServ(task)
    .then(function(response){
      $scope.getTodos();
      console.log(response);
    })
  }

  $scope.updateTask = function(id,data){
    mainServ.updateTodosServ(id,data)
    .then(function(response){
      $scope.getTodos();
      $scope.hide = true;
    })
  }

  $scope.deleteTask = function(id){
    mainServ.deleteTodosServ(id)
    .then(function(response){
      $scope.getTodos();
      console.log(response);
    })
  }

  $scope.showUpdateFields = function(){
    $scope.show = false;
    $scope.hide = false;
    console.log("working?");
  }


});
