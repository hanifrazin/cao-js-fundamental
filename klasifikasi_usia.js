// load library prompt-sync
const prompt = require('prompt-sync')();

const klasifikasi = (x) => {
    let keterangan = ''
    switch (true) {
        case x >= 0 && x <= 12:
            keterangan = 'Anak-anak';
            break;
        case x >= 13 && x <= 17:
            keterangan = 'Remaja';
            break;
        case x >=18 && x <= 59:
            keterangan = 'Dewasa';
        default:
            keterangan = 'Lansia';
            break;
    }
    return keterangan
}

const anggota = Number(prompt('Masukkan jumlah anggota (angka) : '))

let usia = []
for(let i=0;i<anggota;i++){
    let data = Number(prompt(`Masukkan usia orang ke-${i+1} : `))
    usia.push(data)
}

usia.sort()

for(const umur of usia){
    const jenis = klasifikasi(umur)
    let counter = 0
    if(klasifikasi === 'Anak-anak'){
        counter++
    }
}