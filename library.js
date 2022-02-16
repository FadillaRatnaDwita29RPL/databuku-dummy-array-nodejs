 
const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express()              //deklarasi variabel express
const port =  10000              //deklarasi port
 
app.use(bodyParser.urlencoded({extended:false}))
 
app.get('/', (req, res) => {       // endpoint '/'
    res.send("Hello Admin! Selamat datang di Bee Library!")  
})

app.post('/library', (req, res)=>{
    let namaBuku = req.body.nama
    let penerbit = req.body.penerbit
    let jumHalaman = req.body.jumHalaman
    let tahunTerbit = req.body.tahunTerbit
    let jenis = req.body.jenis
    let harga = req.body.harga
    res.end('Berhasil menambahkan data buku baru dengan namaBuku : ' + namaBuku)
})

app.post('/library-peminjaman/', (req, res)=>{
    let namaSiswa = req.body.namaSiswa
    let angkatan = req.body.angkatan
    let jurusan = req.body.jurusan
    let kelas = req.body.kelas
    let absen = req.body.absen
    let alamat = req.body.alamat
    let umur = req.body.umur
    let namaBuku = req.body.nama
    let penerbit = req.body.penerbit
    let jumHalaman = req.body.jumHalaman
    let tahunTerbit = req.body.tahunTerbit
    let jenis = req.body.jenis
    let harga = req.body.harga
    res.end('Berhasil menambahkan data peminjaman buku baru dengan siswa atas nama : ' + namaSiswa)
});

app.get('/library/:id', (req,res)=>{
    let id = req.params.id
    let namaBuku = req.body.nama
    let penerbit = req.body.penerbit
    let jumHalaman = req.body.jumHalaman
    let tahunTerbit = req.body.tahunTerbit
    let jenis = req.body.jenis
    let harga = req.body.harga

    let response= {
        IDBuku : id,
        NamaBuku : namaBuku,
        Penerbit : penerbit,
        TahunTerbit : tahunTerbit,
        JumlahHalaman : jumHalaman,
        Harga : harga,
        Jenis : jenis
    }
    res . json ( response )
})

app.get('/library-peminjaman/:id', (req,res)=>{
    let id = req.params.id
    let namaSiswa = req.body.namaSiswa
    let angkatan = req.body.angkatan
    let jurusan = req.body.jurusan
    let kelas = req.body.kelas
    let absen = req.body.absen
    let alamat = req.body.alamat
    let umur = req.body.umur
    let namaBuku = req.body.nama
    let penerbit = req.body.penerbit
    let jumHalaman = req.body.jumHalaman
    let tahunTerbit = req.body.tahunTerbit
    let jenis = req.body.jenis
    let harga = req.body.harga

    let response= {
        IDPeminjaman : id,
        NamaSiswa : namaSiswa,
        Angkatan : angkatan,
        Jurusan : jurusan,
        Kelas : kelas,
        Absen : absen,
        Alamat : alamat,
        Umur : umur,
        NamaBuku : namaBuku,
        Penerbit : penerbit,
        TahunTerbit : tahunTerbit,
        JumlahHalaman : jumHalaman,
        Harga : harga,
        Jenis : jenis
    }
    res . json ( response )
})

app.delete('/library-peminjaman/:id', (req, res) => {
    let id = req.params.id
    let namaSiswa = req.body.namaSiswa
    res.end('Data peminjaman dengan ID Peminjaman: ' + id + ' dan nama siswa ' + namaSiswa + ' telah dihapus')
});

app.delete('/library/:id', (req, res) => {
    let id = req.params.id
    let namaBuku = req.body.nama
    res.end('Buku dengan ID: ' + id + ' dan nama ' + namaBuku + ' telah dihapus')
});

app.put('/library/:id', (req, res) => {
    let id = req.params.id
    let namaSiswa = req.body.nama
    res.end('Buku dengan ID: ' + id + ' dan nama ' + namaSiswa + ' telah diupdate')
});

app.put('/library-peminjaman/:id', (req, res) => {
    let id = req.params.id
    let namaSiswa = req.body.namaSiswa
    res.end('Data peminjaman dengan ID Peminjaman: ' + id + ' dan nama ' + namaSiswa + ' telah diupdate')
});

app.listen(port, () => {            
    console.log(`Server di port ${port}`)
})

