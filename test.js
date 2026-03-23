const number = document.getElementById("num");
const firstScene = document.getElementById("firstScene");
const notif = document.getElementById("notif");

setTimeout(() => {
    notif.classList.add("show");
}, 2000);

setTimeout(() => {
    number.innerText = "6";

    number.classList.remove("animate");
    void number.offsetWidth;
    number.classList.add("animate");

}, 3500);

// أهم جزء 👇 (حل المشكلة نهائي)
setTimeout(() => {
    // بدل ما نخفيه فجأة، نعمل Fade
    firstScene.style.opacity = "0";
    notif.style.opacity = "0";

    // في نفس اللحظة نظهر النهاية
    document.getElementById("finalText").classList.add("show");
    document.querySelector(".btn").classList.add("show");

}, 5000);q
