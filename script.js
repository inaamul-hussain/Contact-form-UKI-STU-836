
document.getElementById("ContactUs").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
});





const phoneRegex = /^\+94\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
