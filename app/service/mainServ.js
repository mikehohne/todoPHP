angular.module('todoApp').service('mainServ', function($http){

  this.getTodosServ = function(){
    return $http({
      method: "GET",
      url: "ajax/getTasks.php"
    }).then(function(response){
      return response.data;
    })
  }

  this.postTodosServ = function(task){
    return $http({
      method:"POST",
      url: "ajax/addTask.php",
      data: {
        newTask: task
      }
    }).then(function(response){
      return response.data;
    })
  }

  this.updateTodosServ = function(id,task){
    return $http({
      method: "PUT",
      url: "ajax/updateTask.php",
      data: {
        'updatedTask': task,
        'id': id
      }
    }).then(function(response){
      console.log(response);
    })
  }

  this.deleteTodosServ = function(id){
    return $http({
    method: "DELETE",
    url: "ajax/deleteTask.php",
    data: {
      'id': id
    }
  }).then(function(response){
    console.log(response);
  })
}

  this.clearAllTasksServ = function(){
    return $http({
      method: "DELETE",
      url: "ajax/clearTasks.php"
    })
  }


});
