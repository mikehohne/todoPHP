angular.module('todoApp').service('mainServ', function($http){

  this.getTodosServ = function(){
    return $http({
      method: "GET",
      url: "ajax/getTasks.php"
    }).then(function(response){
      return response.data;
    })
  }

  this.postTodosServ = function(){
    return $http({
      method:"POST",
      url: "ajax/addTask.php",
      data: data
    }).then(function(response){
      console.log(response);
    })
  }

  this.updateTodosServ = function(id){
    return $http({
      method: "PUT",
      url: "ajax/updateTask.php" + id,
      data: data
    }).then(function(response){
      console.log(response);
    })
  }

  this.deleteTodosServ = function(id){
    return $http({
    method: "DELETE",
    url: "ajax/deleteTask.php" + id
  }).then(function(response){
    console.log(response);
  })
}


});
