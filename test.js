const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Canvas full screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Characters
const letters = "0101010101010101";
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);

// Drops array
const drops = Array(columns).fill(1);

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#33ff00";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(draw, 33);

// **Fade in both message and button together after 5 seconds**
setTimeout(() => {
    document.getElementById("message").style.opacity = 1;
    document.querySelector(".form-container").style.opacity = 1;
}, 5000);

// Adjust canvas on resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});