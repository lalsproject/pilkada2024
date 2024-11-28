function getPaslon(wil='',id='') {
    return fetch("https://sirekappilkada-obj-data.kpu.go.id/pilkada/paslon/pkwkk.json")
    .then((res) => res.json())
    .then((data) => {
        // console.log(data[`${wil}`]);
        const pas = data[`${wil}`];

        pas.forEach(kot => {
            console.log(kot);
            // html += `<option value="${kot.kode}">${kot.nama}</option>`;
        });

        // data.forEach(element => {
        //     console.log(element)
        // });
    })
    .catch((err) => console.error("", err));
}


function getDataWali(wil='') {
    getPaslon(wil);
}