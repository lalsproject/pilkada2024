<?php
$pas = json_decode(file_get_contents('https://sirekappilkada-obj-data.kpu.go.id/pilkada/paslon/pkwkk.json'),true);


if(isset($_GET['wil'])) {
    $wil = $_GET['wil'];
    $suara = json_decode(file_get_contents('https://raw.githubusercontent.com/razanfawwaz/pilkada-scrap/refs/heads/main/pkwkk/'.substr($wil,0,2).'/'.$wil.'.json'),true);
    $data = array();
    
    $kec = json_decode(file_get_contents('https://sirekappilkada-obj-data.kpu.go.id/wilayah/pilkada/pkwkk/'.substr($wil,0,2).'/'.$wil.'.json'),true);

    $data_kec = array();

    
    foreach ($pas[$wil] as $p => $value) {

        foreach ($kec as $k) {
            $data_kec[$p][] = array(
                'kode'=>$k['kode'],
                'nama'=>$k['nama'],
                'suara'=>number_format($suara['tungsura']['table'][$k['kode']][$p]),
                'progres'=>number_format($suara['tungsura']['table'][$k['kode']]['progres']['persen'])
            );
        }

        $data[] = array(
            'id'=>$p,
            'nama'=>$pas[$wil][$p]['nama'],
            'nomor_urut'=>$pas[$wil][$p]['nomor_urut'],
            'tungsura'=>number_format($suara['tungsura']['chart'][$p]),
            'warna'=>$pas[$wil][$p]['warna'],
            'ts' => $suara['ts'],
            'wil' => $wil,
            'perwil'=>$data_kec[$p]
        );
    }
    echo json_encode($data,JSON_PRETTY_PRINT);
} else {
    http_response_code(404);
}