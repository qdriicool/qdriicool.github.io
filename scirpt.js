let loadingNumber = document.getElementById('loading-number');
let counter = 0;

let loadingInterval = setInterval(() => {
    counter++;
    loadingNumber.textContent = counter + "%";
    
    if(counter >= 100) {
        clearInterval(loadingInterval);
        // Optional: Add some action after loading completes
        loadingNumber.textContent = "Loading Complete!";
    }
}, 50); // Interval setiap 50ms untuk mencapai 100% dalam 5 detik
