<?php
  include './db.php';

  $sql = "DELETE FROM todo";

  mysqli_query($con,$sql);


 ?>
