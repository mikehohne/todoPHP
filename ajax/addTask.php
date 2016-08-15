<?php

  include './db.php';

  $data = file_get_contents('php://input');

  $resultData = json_decode($data);

  $newTodo = $resultData -> newTask;

  $sql = "INSERT INTO todo(tasks) VALUES('$newTodo')";

  mysqli_query($con,$sql);


  // $sql = "INSERT INTO todo(tasks) VALUES('$resultData')";




 ?>
