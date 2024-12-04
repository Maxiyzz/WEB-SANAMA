// Menambahkan fitur interaktif (misalnya, alert ketika form dikirim)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Menampilkan alert ketika form dikirim
    alert('Terima kasih! Pesan Anda telah dikirim.');

    // Menghapus semua input dalam form (nama, email, pesan)
    document.querySelector('form').reset(); // Mengosongkan semua input di dalam form
});


document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const amountInput = document.getElementById("amount");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah pengiriman form default

        // Validasi sederhana
        if (!nameInput.value.trim()) {
            alert("Nama wajib diisi.");
            return;
        }

        if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
            alert("Masukkan email yang valid.");
            return;
        }

        if (!amountInput.value || amountInput.value < 10000) {
            alert("Jumlah donasi minimal Rp 10.000.");
            return;
        }

        // Tampilkan pesan sukses
        displaySuccessMessage();

        // Reset form setelah sukses
        form.reset();
    });

    // Fungsi validasi email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Fungsi untuk menampilkan pesan sukses
    function displaySuccessMessage() {
        const container = document.querySelector(".container");
        const successMessage = document.createElement("div");
        successMessage.className = "success-message";
        successMessage.innerHTML = `
            <h3>Terima kasih atas donasi Anda!</h3>
            <p>Donasi Anda telah diterima dan akan sangat membantu.</p>
        `;

        container.appendChild(successMessage);

        // Hapus pesan setelah 5 detik
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }
});
