const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");
const btnThree = document.querySelector("#btnThree");
const btnFour = document.querySelector("#btnFour");
const btnFive = document.querySelector("#btnFive");
const btnSix = document.querySelector("#btnSix");
const btnSeven = document.querySelector("#btnSeven");
const btnEight = document.querySelector("#btnEight");
const btnNine = document.querySelector("#btnNine");
const btnZero = document.querySelector("#btnZero");
const btnClear = document.querySelector("#btnClear");
const btnBckSpc = document.querySelector("#btnBckSpc");
const btnPlus = document.querySelector("#btnPlus");
const btnMinus = document.querySelector("#btnMinus");
const btnMultiply = document.querySelector("#btnMultiply");
const btnDivide = document.querySelector("#btnDivide");
const btnEqual = document.querySelector("#btnEqual");

let num1 = "";
let num2 = "";
let operator = "";




operate(6,2,"+");

function add(num1, num2) {
    result = parseInt(num1) + parseInt(num2);
    console.log(parseInt(num1) + " + " + parseInt(num2) + " = " + result);
    return result;
}

function subtract(num1, num2) {
    result = parseInt(num1) - parseInt(num2);
    console.log(parseInt(num1) + " - " + parseInt(num2) + " = " + result);
    return result;
}

function multiply(num1, num2) {
    result =  parseInt(num1) * parseInt(num2);
    console.log(parseInt(num1) + " x " + parseInt(num2) + " = " + result);
    return result;
}

function divide(num1, num2) {
    result =  parseInt(num1) / parseInt(num2);
    console.log(parseInt(num1) + " / " + parseInt(num2) + " = " + result);
    return result;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "x":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
    }
}