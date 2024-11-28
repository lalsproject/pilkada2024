function getAllProv() {
    return fetch("https://sirekappilkada-obj-data.kpu.go.id/wilayah/pilkada/pkwkp/0.json")
    .then((res) => res.json())
    .then((data) => {
        // data.json()
        let html = '<option value="">-- Pilih</option>';
        data.forEach(prov => {
            // console.log(prov.nama)
            html += `<option value="${prov.kode}">${prov.nama}</option>`;
        });
        $('#provSel').html(html);
        $('#provSel').removeAttr('disabled');
    })
    .catch((err) => console.error("Error fetching genres:", err));
}

document.addEventListener("DOMContentLoaded", () => {
    getAllProv();
});