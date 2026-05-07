

var dataTracking = {
    "2023001234": {
        nomorDO: "2023001234",
        nama: "Rina Wulandari",
        status: "Dalam Perjalanan",
        ekspedisi: "JNE",
        tanggalKirim: "2025-08-25",
        paket: "0JKT01",
        total: "Rp 180.000",
        perjalanan: [
            {
                waktu: "2025-08-25 10:12:20",
                keterangan: "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka"
            },
            {
                waktu: "2025-08-25 14:07:56",
                keterangan: "Tiba di Hub: TANGERANG SELATAN"
            },
            {
                waktu: "2025-08-25 10:12:20",
                keterangan: "Diteruskan ke Kantor Jakarta Selatan"
            },
        ]
    },
    "2023005678": {
        nomorDO: "2023005678",
        nama: "Agus Pranoto",
        status: "Dikirim",
        ekspedisi: "Pos Indonesia",
        tanggalKirim: "2025-08-25",
        paket: "0UPBJJBDG",
        total: "Rp 220.000",
        perjalanan: [
            {
                waktu: "2025-08-25 10:12:20",
                keterangan: "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka"
            },
            {
                waktu: "2025-08-25 14:07:56",
                keterangan: "Tiba di Hub: TANGERANG SELATAN"
            },
            {
                waktu: "2025-08-25 16:30:10",
                keterangan: "Diteruskan ke Kantor Kota Bandung"
            },
            {
                waktu: "2025-08-26 12:15:33",
                keterangan: "Tiba di Hub: Kota BANDUNG"
            },
            {
                waktu: "2025-08-26 15:06:12",
                keterangan: "Proses antar ke Cimahi"
            },
            {
                waktu: "2025-08-26 20:00:00",
                keterangan: "Selesai Antar. Penerima: Agus Pranoto"
            }
        ]
    }
};

// =========================
// TRACKING PAGE
// =========================
const trackingInput = document.getElementById("tracking-id");
const trackBtn = document.getElementById("track-btn");
const trackingResult = document.getElementById("tracking-result");
const trackingAlert = document.getElementById("tracking-alert");

if (trackingInput && trackBtn) {
    trackBtn.addEventListener("click", cariTracking);
    trackingInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            cariTracking();
        }
    });
}

function cariTracking() {
    const nomorDO = trackingInput.value.trim();
    const data = dataTracking[nomorDO];

    if (!nomorDO) {
        tampilkanAlert("Silakan masukkan nomor Delivery Order.", "error");
        trackingResult.style.display = "none";
        return;
    }

    if (!data) {
        tampilkanAlert("Nomor Delivery Order tidak ditemukan.", "error");
        trackingResult.style.display = "none";
        return;
    }

    trackingAlert.className = "tracking-alert";
    trackingAlert.style.display = "none";

    document.getElementById("tracking-name").textContent = data.nama;
    document.getElementById("tracking-no").textContent = data.nomorDO;
    document.getElementById("tracking-ekspedisi").textContent = data.ekspedisi;
    document.getElementById("tracking-tanggal-kirim").textContent = data.tanggalKirim;
    document.getElementById("tracking-jenis-paket").textContent = data.paket;
    document.getElementById("tracking-total").textContent = data.total;

    const statusBadge = document.getElementById("tracking-status-badge");
    statusBadge.textContent = data.status;
    statusBadge.className = "status-badge";

    const statusClass = data.status.toLowerCase().replace(/\s+/g, "-");
    statusBadge.classList.add(statusClass);

    const timelineList = document.getElementById("timeline-list");
    timelineList.innerHTML = "";

    data.perjalanan.forEach(function (item) {
        const timelineItem = document.createElement("div");
        timelineItem.className = "timeline-item";

        timelineItem.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-time">${item.waktu}</div>
          <div class="timeline-text">${item.keterangan}</div>
        </div>
      `;

        timelineList.appendChild(timelineItem);
    });

    trackingResult.style.display = "block";
}

function tampilkanAlert(pesan, tipe) {
    trackingAlert.textContent = pesan;
    trackingAlert.className = "tracking-alert " + tipe;
    trackingAlert.style.display = "block";
}