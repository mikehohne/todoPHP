<?php

include "./db.php";

  $data = file_get_contents("php://input");

  $resultData = json_decode($data);

  $updateTask = $resultData -> updatedTask;

  $dataId = $resultData -> id;


  $sql = "UPDATE todo SET tasks='$updateTask' WHERE id='$dataId'";


  mysqli_query($con,$sql);


 ?>
