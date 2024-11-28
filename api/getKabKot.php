<?php
if(isset($_GET['wil'])){
    // echo $_GET['wil'];
    $res = file_get_contents("https://sirekappilkada-obj-data.kpu.go.id/wilayah/pilkada/pkwkp/".$_GET['wil'].".json");
    echo $res;
}else{
    http_response_code(404);
    echo json_encode(array('msg'=>'error'));
}