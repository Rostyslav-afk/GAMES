const button = document.querySelector(".number__button");
const input = document.querySelector(".number__input");
const text = document.querySelector(".number__text");

button.addEventListener("click", (event) => {
    const userTry = Number(input.value);
    const randomNumber = Math.floor(Math.random() * 100);
    if (userTry === randomNumber) {
        text.textContent = `Вітаю, ви вгадали число! (${randomNumber})`;
    } else {
        text.textContent = `Нажаль, ви не вгадали число! (${randomNumber})`;
        text.style.color = "red";
    }

    if (userTry > 100) {
        text.textContent = "Введіть число в межах 100!";
        text.style.color = "red";
    }
});