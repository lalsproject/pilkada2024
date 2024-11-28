<?php
$pas = json_decode(file_get_contents('https://sirekappilkada-obj-data.kpu.go.id/pilkada/paslon/pkwkk.json'),true);
if(isset($_GET['wil']) AND isset($_GET['id'])) {
    $wil = $_GET['wil'];
    $id = $_GET['id'];
    $data = array(
        'id'=>$id,
        'nama'=>$pas[$wil][$id]['nama'],
        'nomor_urut'=>$pas[$wil][$id]['nomor_urut'],
        'warna'=>$pas[$wil][$id]['warna']
    );
    echo json_encode($data,JSON_PRETTY_PRINT);
} else {
    http_response_code(404);
}