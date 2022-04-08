// let state;
let displayValue = "";
const display = document.getElementById("result");;
let number1 = "";
// let number2 = 0;
let operator = "";
// let operatorActive = false;
let result;
let tempValue = "";

// let del = document.getElementById("delete");
// del.addEventListener('click', delete);

// function delete() {

// }

let buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
    btn.addEventListener('click', test);
    // console.log(btn.innerHTML);
    // console.log(btn);
})

function test(e) {
    // console.log("hello");
    // console.log(e.path[0].innerHTML);
    // console.log(typeof (e.path[0].innerHTML));
    let digit = e.path[0].innerHTML;
    console.log(digit);

    if (digit == "=") {
        // result = Number(number1) + Object(operator) + Number(tempValue);
        if (operator == "+") {
            result = Number(number1) + Number(tempValue);
            displayValue = result;
            number1 = "";
            tempValue = "";
            operator = "";
            display.innerText = displayValue;
            displayValue = "";
            return;
        } else if (operator == "-") {
            result = Number(number1) - Number(tempValue);
            displayValue = result;
            number1 = "";
            tempValue = "";
            operator = "";
            display.innerText = displayValue;
            displayValue = "";
            return;
        } else if (operator == "*") {
            result = Number(number1) * Number(tempValue);
            displayValue = result;
            number1 = "";
            tempValue = "";
            operator = "";
            display.innerText = displayValue;
            displayValue = "";
            return;
        } else if (operator == "/") {
            if (tempValue == "0") {
                displayValue = "NO WAY";
                number1 = "";
                tempValue = "";
                operator = "";
                display.innerText = displayValue;
                displayValue = "";
                return;
            } else {
                result = Number(number1) / Number(tempValue);
                displayValue = result;
                number1 = "";
                tempValue = "";
                operator = "";
                display.innerText = displayValue;
                displayValue = "";
                return;
            }

        }

    }

    if (digit == "+" || digit == "-" || digit == "*" || digit == "/") {
        operator = digit;
        number1 = tempValue;
        tempValue = "";
        displayValue += digit;
        display.innerText = displayValue;
    } else if (digit == "CE") {
        displayValue = "";
        number1 = "";
        tempValue = "";
        operator = "";
        display.innerText = 0;
        console.log(display.innerText);
    } else {
        displayValue += digit;
        tempValue += digit;
        display.innerText = displayValue;
        // console.log(displayValue);
    }
    // console.log(e.target.getAttribute("id"));
    // console.log(e.textContent);

}

function storeDisplayValues() {

}

function execute() {

}