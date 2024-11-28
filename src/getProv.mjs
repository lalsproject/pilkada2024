export function getAllProv() {
    return fetch("https://sirekappilkada-obj-data.kpu.go.id/wilayah/pilkada/pkwkp/0.json")
    .then((res) => res.json())
    .then((data) => {
        // data.json()
        data.forEach(prov => {
            console.log(prov.nama)
        });
    })
    .catch((err) => console.error("Error fetching genres:", err));
}
// getAllProv()