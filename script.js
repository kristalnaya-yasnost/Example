// script.js - простая логика открытия модального окна и мок-логин (клиентская часть)
// Не храните реальные пароли или ключи в JS — это только оболочка.
// Для реального продукта: аутентификация должна быть на сервере (HTTPS) и с безопасным хранилищем сессий.

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("login-modal");
    const openLinks = [
        document.getElementById("open-login"),
        document.getElementById("open-login-cta"),
    ];
    const closeBtn = document.getElementById("close-login");
    const form = document.getElementById("login-form");

    openLinks.forEach(
        (el) =>
            el &&
            el.addEventListener("click", function (e) {
                if (localStorage.getItem("login")) {
                    window.location.assign("profile.html");
                } else {
                    e.preventDefault();
                    modal.setAttribute("aria-hidden", "false");
                    document.body.style.overflow = "hidden";
                }
            })
    );

    closeBtn.addEventListener("click", function () {
        closeModal();
    });
    modal.addEventListener("click", function (e) {
        if (e.target === modal) closeModal();
    });

    function closeModal() {
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const user = document.getElementById("username").value.trim();
        const pass = document.getElementById("password").value;

        if (user === "admin" && pass === "password") {
            window.location.assign("profile.html");
            localStorage.setItem("login", true);
            closeModal();
        } else {
            alert("Неверный логин или пароль.");
        }
    });
});
