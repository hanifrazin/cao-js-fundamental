const prompt = require('prompt-sync')();
let jawab = 0
const hitung = (keterangan) => {
    let val1 = Number(prompt("Angka 1: "))
    let val2 = Number(prompt("Angka 2: "))
    let result = 0

    switch(keterangan){
        case 'Tambah':
            result = val1 + val2
            break;
        case 'Kurang':
            result = val1 - val2
            break;
        case 'Kali':
            result = val1 * val2
            break;
        case 'Bagi':
            result = val1 / val2
            break;
    }
    return result
}

do{
    // console.clear()
    console.info('============================================')
    console.info('Pilih operasi: ')
    console.info('1. Penjumlahan')
    console.info('2. Pengurangan')
    console.info('3. Perkalian')
    console.info('4. Pembagian')
    console.info('============================================')

    jawab = Number(prompt("Masukkan pilihan anda: "))

    switch(jawab){
        case 1:
            console.info('\nOperasi: Penjumlahan')
            console.info(`Hasil: ${hitung('Tambah')}\n`)
            break;
        case 2:
            console.info('\nOperasi: Pengurangan')
            console.info(`Hasil: ${hitung('Kurang')}\n`)
            break;
        case 3:
            console.info('\nOperasi: Perkalian')
            console.info(`Hasil: ${hitung('Kali')}\n`)
            break;
        case 4:
            console.info('\nOperasi: Pembagian')
            console.info(`Hasil: ${hitung('Bagi')}\n`)
            break;
        default:
            console.warn('Maaf pilihan anda salah\n\n')
            break;
    }
}while(jawab !== 0)