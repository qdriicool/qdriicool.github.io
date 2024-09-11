function changeBackground() {
    const input = document.getElementById("input").value.toLowerCase();
    let color;

    switch(input) {
        case '1':
            color = '#3498db'; // Blue
            break;
        case '2':
            color = '#e74c3c'; // Red
            break;
        case '3':
            color = '#2ecc71'; // Green
            break;
        case '4':
            color = '#f1c40f'; // Yellow
            break;
        case '5':
            color = '#9b59b6'; // Purple
            break;
        default:
            color = input; // Assume it's a valid color name or hex code
    }

    document.body.style.backgroundColor = color;
}
