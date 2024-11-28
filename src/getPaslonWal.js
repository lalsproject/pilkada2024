function getPaslon(wil='',id='') {
    return fetch("https://sirekappilkada-obj-data.kpu.go.id/pilkada/paslon/pkwkk.json")
    .then((res) => res.json())
    .then((data) => {
        // console.log(data[`${wil}`]);
        const pas = data[`${wil}`];

        pas.forEach(kot => {
            console.log(kot);
        });
    })
    .catch((err) => console.error("", err));
}


function getDataWali(wil='') {
    getPaslon(wil);
}