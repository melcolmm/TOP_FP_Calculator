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
const disp = document.querySelector("#display");

let num1 = "";
let num2 = "";
let operator = "";
let operatorPressed = false;

operate(6,2,"+");

btnOne.addEventListener('click', () => {
    if (operatorPressed == false) {
        num1 = num1 + "1";
        console.log("num 1 = " + num1); 
    } 
});

btnTwo.addEventListener('click', () => {
    if (operatorPressed == false) {
        num1 = num1 + "2";
        console.log("num 1 = " + num1); 
    } 
});

btnThree.addEventListener('click', () => {
    if (operatorPressed == false) {
        num1 = num1 + "3";
        console.log("num 1 = " + num1); 
    } 
});

btnFour.addEventListener('click', () => {
    if (operatorPressed == false) {
        num1 = num1 + "4";
        console.log("num 1 = " + num1); 
    } 
});

btnFive.addEventListener('click', () => {
    if (operatorPressed == false) {
        num1 = num1 + "5";
        console.log("num 1 = " + num1); 
    } 
});

btnSix.addEventListener('click', () => {
    if (operatorPressed == false) {
        num1 = num1 + "6";
        console.log("num 1 = " + num1); 
    } 
});

btnSeven.addEventListener('click', () => {
    if (operatorPressed == false) {
        num1 = num1 + "7";
        console.log("num 1 = " + num1); 
    } 
});

btnEight.addEventListener('click', () => {
    if (operatorPressed == false) {
        num1 = num1 + "8";
        console.log("num 1 = " + num1); 
    } 
});

btnNine.addEventListener('click', () => {
    if (operatorPressed == false) {
        num1 = num1 + "9";
        console.log("num 1 = " + num1); 
    } 
});

btnZero.addEventListener('click', () => {
    if (operatorPressed == false) {
        num1 = num1 + "0";
        console.log("num 1 = " + num1); 
    } 
});

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

