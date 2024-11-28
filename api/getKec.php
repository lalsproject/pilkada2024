<?php


if(isset($_GET['wil'])) {
    $wil = $_GET['wil'];
    $kec = json_decode(file_get_contents('https://sirekappilkada-obj-data.kpu.go.id/wilayah/pilkada/pkwkk/'.substr($wil,0,2).'/'.$wil.'.json'),true);
    $suara = json_decode(file_get_contents('https://raw.githubusercontent.com/razanfawwaz/pilkada-scrap/refs/heads/main/pkwkk/'.substr($wil,0,2).'/'.$wil.'.json'),true);

    // echo json_encode($kec,JSON_PRETTY_PRINT);
} else {
    http_response_code(404);
}
// 