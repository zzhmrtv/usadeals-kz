// anim.js — глобальная анимация переходов

// плавное появление страницы
window.addEventListener("load", () => {
  document.body.classList.add("show");
});

// универсальный переход
window.goTo = function (url) {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = url;
  }, 300);
};