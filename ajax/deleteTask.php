<?php

  include './db.php';

  $data = json_decode(file_get_contents("php://input"));

  $deleteId = $data -> id;

  $sql = "DELETE FROM todo WHERE id=" . $deleteId;

  mysqli_query($con,$sql);


 ?>
