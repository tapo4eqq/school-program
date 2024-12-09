document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Ваши данные отправлены успешно!");
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Вы записались на пробный урок!");
});