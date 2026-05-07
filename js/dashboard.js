window.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggle-sidebar");

    // Pastikan tombol toggle ada
    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            // Toggle class untuk sidebar
            sidebar.classList.toggle('open');

            // Apply transform untuk menampilkan/menyembunyikan sidebar
            if (sidebar.classList.contains('open')) {
                sidebar.style.transform = 'translateX(0)'; // Menampilkan sidebar
            } else {
                sidebar.style.transform = 'translateX(-100%)'; // Menyembunyikan sidebar
            }
        });
    }

    // Update greeting berdasarkan waktu
    const greetingMessage = document.getElementById('greeting-message');
    if (greetingMessage) {
        const hours = new Date().getHours();
        let greeting = "";

        if (hours >= 6 && hours < 12) {
            greeting = "Selamat Pagi";
        } else if (hours >= 12 && hours < 18) {
            greeting = "Selamat Siang";
        } else if (hours >= 18 && hours < 24) {
            greeting = "Selamat Sore";
        } else {
            greeting = "Selamat Malam";
        }

        greetingMessage.textContent = greeting;
    }

    // Toggle submenu 'Laporan'
    const laporanMenu = document.querySelector('.sidebar-nav ul li.has-submenu > a.menu-item');
    const submenu = laporanMenu.nextElementSibling;

    if (laporanMenu) {
        laporanMenu.addEventListener('click', function (event) {
            event.preventDefault();
            laporanMenu.parentElement.classList.toggle('open');
        });
    }
});