<?php
include "./function/jwt.php";

$name = "Bool";
$token = [
    'id' => 10,
    'name' => 'Bool',
    'email' => 'bool#gmail.com',
];
$json = JWT::encode($token , 'Bi_mat');
echo JsonHelper::getJson("token" , $json);