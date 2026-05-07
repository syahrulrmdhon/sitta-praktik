// Fungsi untuk menampilkan modal
function showModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

// Fungsi untuk menutup modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Fungsi untuk reset password
function resetPassword() {
  const resetEmail = document.getElementById("reset-email").value;
  alert(`Link reset password dikirim ke ${resetEmail}`);
  closeModal('forgot-password-modal');
}

// Fungsi untuk proses registrasi akun baru
function registerAccount() {
  alert("Akun baru berhasil dibuat!");
  closeModal('register-modal');
}

var dataPengguna = [
  {
    id: 1,
    nama: "Rina Wulandari",
    email: "rina@ut.ac.id",
    password: "rina123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Jakarta"
  },
  {
    id: 2,
    nama: "Agus Pranoto",
    email: "agus@ut.ac.id",
    password: "agus123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Makassar"
  },
  {
    id: 3,
    nama: "Siti Marlina",
    email: "siti@ut.ac.id",
    password: "siti123",
    role: "Puslaba",
    lokasi: "Pusat"
  },
  {
    id: 4,
    nama: "Doni Setiawan",
    email: "doni@ut.ac.id",
    password: "doni123",
    role: "Fakultas",
    lokasi: "FISIP"
  },
  {
    id: 5,
    nama: "Admin SITTA",
    email: "admin@ut.ac.id",
    password: "admin123",
    role: "Administrator",
    lokasi: "Pusat"
  }
];

// Fungsi untuk menampilkan alert
function showAlert(message) {
  const alertBox = document.getElementById("login-alert");
  const alertMessage = document.getElementById("alert-message");
  alertMessage.textContent = message;
  alertBox.style.display = "block";
}

window.addEventListener('DOMContentLoaded', function () {
  // Handle login
  const loginForm = document.getElementById("login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const user = dataPengguna.find(u => u.email === email && u.password === password);

      if (user) {
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect to dashboard after login
      } else {
        showAlert("Email/password yang Anda masukkan salah.");
      }
    });
  }
});