<?php
include "./function/jwt.php";
$token = $_GET['token'];
$js = JWT::decode($token , "Bi_mat" , true);
echo json_encode($js);