<?php
header('Access-Control-Allow-Origin: *');

include "./function/Function.php";
include "./function/Database.php";
$db = new Database;
$productAll = [];
if(isset($_REQUEST['product'])){
    $productTabel = $_REQUEST['product'];
    $table = $db->num_row("SHOW TABLES LIKE '{$productTabel}'");
    if($table > 0){
        $productAll = $db->fetchAll($productTabel);
    }
    else {
        $productAll = [];
    }
    echo json_encode(["data" => $productAll , "totalItem" => sizeof($productAll) , "title" => $productTabel]);
}