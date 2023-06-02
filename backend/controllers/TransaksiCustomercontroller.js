const TransaksiPelanggan = require("../model/TransaksiCustomermodel");
const RiwayatPesananPelanggan = require("../model/Riwayatpesananmodel");
const Customer = require("../model/Customermodel");
const KeranjangPelanggan = require("../model/Keranjangmodel");
const KeranjangController = require("../controllers/Keranjangcontroller");


exports.getTransaksiPelanggan = async (req, res, next) => {
    const idPelanggan = req.params.idPelanggan;
    
    TransaksiPelanggan.find({idPelanggan: `${idPelanggan}`})
    .then(result => {
        res.status(200).json({
            message: 'Data transaksi berhasil dipanggil',
            data: result
        })
    })
    .catch(err => {
        next(err);
    })
}

exports.getDetailTransaksiPelanggan = async (req, res, next) => {
    const idPelanggan = req.params.idPelanggan;
    const idTransaksi = req.params.idTransaksi;

    let findQtyHarga = await TransaksiPelanggan.findOne({idPelanggan: `${idPelanggan}`, idTransaksi: `${idTransaksi}`});
    
    TransaksiPelanggan.find({idPelanggan: `${idPelanggan}`, idTransaksi: `${idTransaksi}`})
    .then((result) => {
        let objek = findQtyHarga.toObject();
        var totalHarga = 0;
        const len = objek.dataPesanan.length;

        for (var i = 0; i<len; i++) {
            totalHarga = totalHarga + (objek.dataPesanan[i].hargaMenu * objek.dataPesanan[i].qty)
        }  

        return res.status(200).json({
            message: 'Data transaksi pelanggan berhasil dipanggil',
            data: {result, totalHarga}
        })      
        
    })
    .catch(err => {
        next(err);
    })
}

exports.postTransaksiPelanggan = async (req, res, next) => {
    //check data berdasarkan request idKeranjang req url
    var idKeranjangCheck = req.params.idKeranjang;

    //query cari data keranjang berdasarkan id yang direquest pada url dan menjadikan object
    let checkKeranjangByParams = await KeranjangPelanggan.findOne({idKeranjang: `${idKeranjangCheck}`});
    let obyekKeranjang = checkKeranjangByParams.toObject();

    //sign data ke variable yang akan dijadikan data insert keranjang
    var idKeranjangSign = obyekKeranjang.idKeranjang;
    var idPelangganSign = obyekKeranjang.idPelanggan;
    var namaPelangganSign = obyekKeranjang.name;
    var dataPesananSign = obyekKeranjang.dataPesanan;

    //var untuk menampung total harga
    var totalHarga = 0;
    
    //looping untuk mengambil total harga data pesanan
    const len = obyekKeranjang.dataPesanan.length;
    // console.log(obyekKeranjang.dataPesanan);
    for (var i = 0; i<len; i++) {
        totalHarga = totalHarga + (obyekKeranjang.dataPesanan[i].hargaMenu * obyekKeranjang.dataPesanan[i].qty)
    }

    const insertTransaksi = new TransaksiPelanggan({
        idTransaksi: idKeranjangSign,
        idPelanggan: idPelangganSign,
        namaPelanggan: namaPelangganSign,
        tanggal: Date.now(),
        noMeja: 8,
        dataPesanan: dataPesananSign,
        totalHarga: totalHarga,
        statusBayar: "Belum bayar"
    })
        
    insertTransaksi.save().then(result => {
        res.status(200).json({
            message: "Transaksi disimpan, selesaikan pembayaran agar pesanan diproses ya",
            data: result
        })
    }).catch(err => {
        next(err);
    });

    KeranjangPelanggan.deleteOne(({idKeranjang: `${idKeranjangCheck}`}))
    .catch(err => {
        next(err);
    })
}