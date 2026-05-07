window.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const laporanMenu = document.getElementById('laporan-menu');
    const laporanLink = laporanMenu ? laporanMenu.querySelector('.menu-link') : null;
    const greetingMessage = document.getElementById('greeting-message');

    // Greeting
    if (greetingMessage) {
        const jam = new Date().getHours();
        let greeting = '';

        if (jam >= 5 && jam < 12) {
            greeting = 'Selamat Pagi';
        } else if (jam >= 12 && jam < 15) {
            greeting = 'Selamat Siang';
        } else if (jam >= 15 && jam < 18) {
            greeting = 'Selamat Sore';
        } else {
            greeting = 'Selamat Malam';
        }

        greetingMessage.textContent = greeting;
    }

    // Toggle sidebar mobile
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', function () {
            sidebar.classList.toggle('open');

            if (overlay) {
                overlay.classList.toggle('show');
            }
        });
    }

    // Klik overlay untuk menutup sidebar
    if (overlay && sidebar) {
        overlay.addEventListener('click', function () {
            sidebar.classList.remove('open');
            overlay.classList.remove('show');
        });
    }

    // Toggle submenu laporan
    if (laporanLink && laporanMenu) {
        laporanLink.addEventListener('click', function (e) {
            e.preventDefault();
            laporanMenu.classList.toggle('open');
        });
    }

    // Tutup sidebar kalau resize ke desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('open');
            if (overlay) {
                overlay.classList.remove('show');
            }
        }
    });
});