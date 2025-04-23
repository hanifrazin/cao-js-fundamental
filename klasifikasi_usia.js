// load library prompt-sync
const prompt = require('prompt-sync')();

const kategori_usia = (x) => {
    let keterangan = ''
    switch (true) {
        case (x >= 0 && x <= 12):
            keterangan = 'Anak-anak';
            break;
        case (x >= 13 && x <= 17):
            keterangan = 'Remaja';
            break;
        case (x >= 18 && x <= 59):
            keterangan = 'Dewasa';
            break;
        default:
            keterangan = 'Lansia';
            break;
    }
    return keterangan
}

const klasifikasi = {
    "Anak-anak": 0,
    "Remaja": 0,
    "Dewasa": 0,
    "Lansia": 0
}

const anggota = Number(prompt('Masukkan jumlah anggota : '))

let usia = []
for(let i=0;i<anggota;i++){
    let value = Number(prompt(`Masukkan usia orang ke-${i+1} : `))
    usia.push(value)
}

usia.forEach((umur) => {
    let jenis = kategori_usia(umur)

    switch(jenis){
        case "Anak-anak":
            klasifikasi['Anak-anak']++
            break;
        case "Remaja":
            klasifikasi.Remaja++
            break;
        case "Dewasa":
            klasifikasi.Dewasa++
            break;
        default:
            klasifikasi.Lansia++
            break; 
    }
})

const result = `
============================================

Anak-anak: ${klasifikasi['Anak-anak']} orang
Remaja: ${klasifikasi.Remaja} orang
Dewasa: ${klasifikasi.Dewasa} orang
Lansia: ${klasifikasi.Lansia} orang
`

console.info(result)