<?php
header('Access-Control-Allow-Origin: *');

header("Access-Control-Allow-Headers: Content-Type");
if(!empty($_POST)){
    include "./function/Function.php";
    include "./function/Database.php";
    include "./function/jwt.php";
    $db = new Database;
    $token = "";
    foreach($_POST as $key => $item){
        $key = json_decode($key);
        if($key->username == "" || $key->password == ""){
            $status = false;
            $messages = "khong duoc bo trong";
        }
        else {
            $user = $db->countTable('users' , ['username' => $key->username , 'password' => $key->password]);
            if($user <= 0) {
                $status = false;
                $messages = "Not found User";
            }
            else {
                $status = true;
                $messages = "Login success";
                $info_user = $db->total("Select * from `users` where `username` = '{$key->username}'");
                $token = JWT::encode($info_user , 'Bi_mat');
            }
        }
    }
    echo json_encode(['status' => $status , 'messages' => $messages , 'token' => $token]);
}
else {
    echo "vo tinh minh lac mat nhau";
}