<?php

$DB_HOST = '127.0.01';
$DB_USER = 'root';
$DB_PASS = 'MyNewPass';
$DB_NAME = 'northtodo';

$con = mysqli_connect($DB_HOST,$DB_USER, $DB_PASS, $DB_NAME);

if(!$con){
  die('Connection fail: ' . mysqli_connect_error());
}



 ?>
