<?php

  include './db.php';

  $data = json_decode(file_get_contents("php://input"));

  $task = mysql_real_escape_string($data -> tasks);

  $mysqli_query("INSERT INTO todo('tasks') VALUES ('$data')");

 ?>
