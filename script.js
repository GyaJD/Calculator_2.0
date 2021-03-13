const input = document.getElementById("text_input");

//input.value = "Dima eats children";

const numbers = document.getElementsByClassName("numbers")[0];
console.log(numbers);

const operations = document.getElementsByClassName("operations")[0];
console.log(operations);

function addNumber(e) {
    let number = e.target.value;
    if (number != undefined) {
    input.value = input.value + number;
    }
}

numbers.addEventListener("click", (e) => addNumber (e));

function addOperation(e) {
    let operation = e.target.textContent;
    if (operation != undefined) {
    input.value = input.value + operation;
    }
}

operations.addEventListener("click", (e) => addOperation (e));