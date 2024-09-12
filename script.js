let loadingNumber = document.getElementById('loading-number');
let loadingScreen = document.querySelector('.loading-screen');
let container = document.querySelector('.container');
let counter = 0;

// Mulai animasi loading saat halaman diakses
window.addEventListener('load', function() {
    let loadingInterval = setInterval(() => {
        counter++;
        loadingNumber.textContent = counter + "%";

        if (counter >= 100) {
            clearInterval(loadingInterval);
            loadingScreen.style.display = 'none';  // Sembunyikan layar loading
            container.style.display = 'block';    // Tampilkan konten biodata
        }
    }, 30); // Interval setiap 30ms untuk mencapai 100% dengan cepat
});
