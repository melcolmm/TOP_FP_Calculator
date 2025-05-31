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
disp.innerHTML = "0";

btnPlus.addEventListener('click', () => {
    operator = "+";
    operatorPressed = true;
    disp.innerHTML = "+";
});

btnMinus.addEventListener('click', () => {
    operator = "-";
    operatorPressed = true;
    disp.innerHTML = "-";
});

btnDivide.addEventListener('click', () => {
    operator = "/";
    operatorPressed = true;
    disp.innerHTML = "/";
});

btnMultiply.addEventListener('click', () => {
    operator = "x";
    operatorPressed = true;
    disp.innerHTML = "x";
});

btnOne.addEventListener('click', () => {
    if (operatorPressed == false) {
        num1 = num1 + "1";
        disp.innerHTML = num1;

    } else if (operatorPressed == true) {
        num2 = num2 + "1";
        disp.innerHTML = num2;
    }
});

btnTwo.addEventListener('click', () => {
    if (operatorPressed == false) {
        num1 = num1 + "2";
        disp.innerHTML = num1;
    } else if (operatorPressed == true) {
        num2 = num2 + "2";
        disp.innerHTML = num2;
    }
});

btnThree.addEventListener('click', () => {
    if (operatorPressed == false) {
        num1 = num1 + "3";
        disp.innerHTML = num1;
    } else if (operatorPressed == true) {
        num2 = num2 + "3";
        disp.innerHTML = num2;
    }
});

btnFour.addEventListener('click', () => {
    if (operatorPressed == false) {
        num1 = num1 + "4";
        disp.innerHTML = num1;
    } else if (operatorPressed == true) {
        num2 = num2 + "4";
        disp.innerHTML = num2;
    } 
});

btnFive.addEventListener('click', () => {
    if (operatorPressed == false) {
        num1 = num1 + "5";
        disp.innerHTML = num1;
    } else if (operatorPressed == true) {
        num2 = num2 + "5";
        disp.innerHTML = num2;
    }
});

btnSix.addEventListener('click', () => {
    if (operatorPressed == false) {
        num1 = num1 + "6";
        disp.innerHTML = num1; 
    } else if (operatorPressed == true) {
        num2 = num2 + "6";
        disp.innerHTML = num2;
    }
});

btnSeven.addEventListener('click', () => {
    if (operatorPressed == false) {
        num1 = num1 + "7";
        disp.innerHTML = num1; 
    } else if (operatorPressed == true) {
        num2 = num2 + "7";
        disp.innerHTML = num2;
    }
});

btnEight.addEventListener('click', () => {
    if (operatorPressed == false) {
        num1 = num1 + "8";
        disp.innerHTML = num1; 
    } else if (operatorPressed == true) {
        num2 = num2 + "8";
        disp.innerHTML = num2;
    }
});

btnNine.addEventListener('click', () => {
    if (operatorPressed == false) {
        num1 = num1 + "9";
        disp.innerHTML = num1; 
    } else if (operatorPressed == true) {
        num2 = num2 + "9";
        disp.innerHTML = num2;
    }
});

btnZero.addEventListener('click', () => {
    if (operatorPressed == false) {
        num1 = num1 + "0";
        disp.innerHTML = num1; 
    } else if (operatorPressed == true) {
        num2 = num2 + "0";
        disp.innerHTML = num2;
    }
});

btnEqual.addEventListener('click', () => {
    if ((num1 == "") & (num2 == "")) {
        disp.innerHTML = "0";
    } else if (num1 == "") {
        disp.innerHTML = num1;
    } else operate(num1, num2, operator);
});

btnClear.addEventListener('click', () => {
    clearAll();
})

function clearAll() {
    num1 = "";
    num2 = "";
    operator = "";
    operatorPressed = false;
    disp.innerHTML = "0";
}

function add(fnNum1, fnNum2) {
    result = parseInt(fnNum1) + parseInt(fnNum2);
    console.log(parseInt(fnNum1) + " + " + parseInt(fnNum2) + " = " + result);
    disp.innerHTML = result;
    return result;
}

function subtract(fnNum1, fnNum2) {
    result = parseInt(fnNum1) - parseInt(fnNum2);
    console.log(parseInt(fnNum1) + " - " + parseInt(fnNum2) + " = " + result);
    disp.innerHTML = result;
    return result;
}

function multiply(fnNum1, fnNum2) {
    result =  parseInt(fnNum1) * parseInt(fnNum2);
    console.log(parseInt(fnNum1) + " x " + parseInt(fnNum2) + " = " + result);
    disp.innerHTML = result;
    return result;
}

function divide(fnNum1, fnNum2) {
    if (fnNum2 == 0) {
        clearAll();
        disp.innerHTML = "You are an idiot";
        return;
    }
    result =  parseInt(fnNum1) / parseInt(fnNum2);
    console.log(parseInt(fnNum1) + " / " + parseInt(fnNum2) + " = " + result);
    disp.innerHTML = result;
    return result;
}

function operate(fnNum1, fnNum2, fnOperator) {
    switch (fnOperator) {
        case "+":
            add(fnNum1, fnNum2);
            break;
        case "-":
            subtract(fnNum1, fnNum2);
            break;
        case "x":
            multiply(fnNum1, fnNum2);
            break;
        case "/":
            divide(fnNum1, fnNum2);
            break;
    }
}

