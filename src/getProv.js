function getAllProv() {
    return fetch("api/getProv.php")
    .then((res) => res.json())
    .then((data) => {
        // const obj = JSON.parse(data);
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