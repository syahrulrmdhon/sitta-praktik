// Sample data for Bahan Ajar
const dataBahanAjar = [
    {
        kodeLokasi: "0TMP01",
        kodeBarang: "ASIP4301",
        namaBarang: "Pengantar Ilmu Komunikasi",
        jenisBarang: "BMP",
        edisi: "2",
        stok: 548,
        cover: "img/pengantar_komunikasi.jpg"
    },
    {
        kodeLokasi: "0JKT01",
        kodeBarang: "EKMA4216",
        namaBarang: "Manajemen Keuangan",
        jenisBarang: "BMP",
        edisi: "3",
        stok: 392,
        cover: "img/manajemen_keuangan.jpg"
    },
    {
        kodeLokasi: "0SBY02",
        kodeBarang: "EKMA4310",
        namaBarang: "Kepemimpinan",
        jenisBarang: "BMP",
        edisi: "1",
        stok: 278,
        cover: "img/kepemimpinan.jpg"
    },
    {
        kodeLokasi: "0MLG01",
        kodeBarang: "BIOL4211",
        namaBarang: "Mikrobiologi Dasar",
        jenisBarang: "BMP",
        edisi: "2",
        stok: 165,
        cover: "img/mikrobiologi.jpg"
    },
    {
        kodeLokasi: "0UPBJJBDG",
        kodeBarang: "PAUD4401",
        namaBarang: "Perkembangan Anak Usia Dini",
        jenisBarang: "BMP",
        edisi: "4",
        stok: 204,
        cover: "img/paud_perkembangan.jpeg"
    }
];

// Function to dynamically create stock cards
function loadStockData() {
    const stockList = document.getElementById("stock-list");
    stockList.innerHTML = ""; // Clear existing content

    dataBahanAjar.forEach(item => {
        const stockCard = document.createElement("div");
        stockCard.classList.add("stock-card");

        stockCard.innerHTML = `
            <img src="${item.cover}" alt="${item.namaBarang}">
            <h3>${item.namaBarang}</h3>
            <p>Stok: ${item.stok}</p>
        `;

        stockCard.addEventListener("click", () => showStockDetail(item));

        stockList.appendChild(stockCard);
    });
}

// Function to display stock details in a modal
function showStockDetail(item) {
    const modal = document.getElementById("add-stock-modal");
    modal.style.display = "block";

    // Fill in stock details
    document.getElementById("kode-lokasi").value = item.kodeLokasi;
    document.getElementById("kode-barang").value = item.kodeBarang;
    document.getElementById("nama-barang").value = item.namaBarang;
    document.getElementById("jenis-barang").value = item.jenisBarang;
    document.getElementById("stok").value = item.stok;
    document.getElementById("cover").value = item.cover;
}

// Close modal
function closeModal() {
    document.getElementById("add-stock-modal").style.display = "none";
}

// Add event listener to the "Add Stock" button
document.getElementById("add-stock").addEventListener("click", function () {
    document.getElementById("add-stock-modal").style.display = "block";
});

// Initial loading of stock data
window.onload = function () {
    loadStockData();
};