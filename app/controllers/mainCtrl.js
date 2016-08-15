angular.module('todoApp').controller('mainCtrl', function($scope, mainServ){

  $scope.todos;

  $scope.getTodos = function(){
    mainServ.getTodosServ()
    .then(function(response){
      $scope.todos = response;
    })
  }

  $scope.postTodos = function(data){
    mainServ.postTodosServ(data)
    .then(function(response){
      console.log(response);
    })
  }

  $scope.updateTask = function(id,data){
    mainServ.updateTodosServ(id,data)
    .then(function(response){
      console.log(response);
    })
  }

  $scope.deleteTask = function(id){
    mainServ.deleteTodosServ(id)
    .then(function(response){
      console.log(response);
    })
  }


});
