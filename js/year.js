const input = document.querySelector(".year__input");
const button = document.querySelector(".year__button")
const message = document.querySelector(".year__text");



button.addEventListener("click", (event) => {
    const birth = Number(input.value);

    if (isNaN(birth)) {
        message.textContent = "Будь ласка, введіть коректний рік!";
        message.style.color = "red";
        return;
    }

    if (birth % 400 === 0 || (birth % 100 !== 0 && birth % 4 === 0)) {
        message.textContent = `Ви народилися у високосний рік (${birth})!`;
        message.style.color = "green";
    } else {
        message.textContent = `Ви не народилися у високосний рік (${birth})!`;
        message.style.color = "red";
    }
})

