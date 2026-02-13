// Netron Müşteri Yönetim Sistemi
const fs = require('fs');

const musteri = {
    isim: "Berat Kral",
    adres: "Akgedik A27 Daire 6",
    paket: "100 Mbps Gamer",
    durum: "AKTIF",
    tarih: "2026-02-14"
};

function internetiBaslat() {
    console.log("--- NETRON SISTEM BASLATILIYOR ---");
    console.log(`Musteri: ${musteri.isim}`);
    console.log(`Lokasyon: ${musteri.adres}`);
    console.log(`Durum: ${musteri.durum} - İnternet şu an veriliyor...`);
    console.log("----------------------------------");
}

internetiBaslat();
