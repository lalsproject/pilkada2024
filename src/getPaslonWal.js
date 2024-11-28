function getPaslon(wil='') {
    if(wil != '') {
        return fetch("api/getPaslon.php?wil="+wil)
        .then((res) => res.json())
        .then((data) => {
            console.log(wil)
            let col = 12 / data.length;
            if(col <= 3) {
                col = 3;
            }
            let html='';
            let tbody='';

            data.forEach(pas => {
                // console.log(pas['nama']);
                let nama = pas['nama'].split("-");

                html += `
                    <div class="col-md-${col} mb-3">
                        <div class="card card-sm">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-auto">
                                    <span class="bg-primary text-white avatar" style="background: ${pas['warna']} !important; ">${pas['nomor_urut']}</span>
                                    </div>
                                    <div class="col">
                                    <div class="font-weight-medium">
                                        <strong>${pas['tungsura']} Suara</strong> 
                                    </div>
                                    <div class="text-secondary">
                                        ${nama[0]}<br>
                                        ${nama[1]}
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body" id="tableDetail">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Kecamatan</th>
                                            <th>Suara</th>
                                            <th>Progres</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbodyKecamatan-${pas['id']}">`;


                pas.perwil.forEach(perwil => {
                    console.log(perwil)
                    html += `
                        <tr>
                            <td>${perwil['nama']}</td>
                            <td>${perwil['suara']}</td>
                            <td></td>
                        </tr>
                    `;
                });

                html+=`</tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                `;
            });
            // getTableDetail(wil);
            $('#updateTime').html('Terakhir di Update = '+data[0]['ts']);
            $('#resData').html(html);
            $('#dataView').show();
            
        })
        .catch((err) => console.error("", err));
    } else {
        
        $('#dataView').hide();
    }
}

function getDataWali(wil='') {
    getPaslon(wil);
}

function getTableDetail(wil = '') {
    return fetch("api/getKec.php?wil="+wil)
        .then((res) => res.json())

        .then((data) => {
            console.log(data);
            
            
            
        })
        .catch((err) => console.error("", err));
}
