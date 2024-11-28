function getAllKot(prov='') {
    $('#kabKotSel').attr('disabled','');
    if (prov != '') {
        return fetch(`https://sirekappilkada-obj-data.kpu.go.id/wilayah/pilkada/pkwkp/${prov}.json`)
        .then((res) => res.json())
        .then((data) => {
            // data.json()
            let html = '<option value="">-- Pilih</option>';
            data.forEach(kot => {
                html += `<option value="${kot.kode}">${kot.nama}</option>`;
            });
            $('#kabKotSel').html(html);
            $('#kabKotSel').removeAttr('disabled');
        })
        .catch((err) => console.error("Error fetching genres:", err));
    }
}