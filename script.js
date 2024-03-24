const inputBtns = document.querySelectorAll("form div input");
const displayScreen = document.querySelectorAll("form div input")[0];

console.log(inputBtns[19].value);


for (let i = 3; i < inputBtns.length - 1; i++) {
    inputBtns[i].addEventListener("click", () => {
        displayScreen.value += inputBtns[i].value;
    });
}

inputBtns[1].addEventListener("click", () => {
    displayScreen.value = "";
});

inputBtns[2].addEventListener("click", () => {
    let currentText = displayScreen.value;
    displayScreen.value = "";

    for (let i = 0; i < currentText.length - 1; i++) {
        displayScreen.value += currentText[i];
    }
});

inputBtns[19].addEventListener("click", () => {
    displayScreen.value = eval(displayScreen.value);
})