"use strict";

let allButtons = document.querySelectorAll('button');
for(let button of allButtons) {
    button.addEventListener('mousedown', (event) => {
        event.target.classList.add('active');
    })

    button.addEventListener('mouseup', (event) => {
        event.target.classList.remove('active');
    })
}


// Add to display;
let allNumbers = document.querySelectorAll('.number');
let allOperators = document.querySelectorAll('.operator');
let displayArea = document.querySelector('.display');
let equalBtn = document.querySelector('.equal');
let dataValue = [];
let display = [];
let output = '0';
let totalVal = '';

for(let button of allNumbers) {
    button.addEventListener('click', (e) => {
        totalVal = '';
        display.push(e.target.innerText);
        dataValue.push(e.target.getAttribute('data-value'));
        displayValue();
    })
}

for(let operator of allOperators) {
    operator.addEventListener('click', (e) => {
        totalVal = '';
        let operatorValue = e.target.innerText;
        let lastArr = display[display.length - 1];
        let operatorDataVale = e.target.getAttribute('data-value');


        if(lastArr >= 0 && lastArr <= 9) {
            display.push(operatorValue);
            dataValue.push(operatorDataVale);
            displayValue();
        } else {
            display = display.slice(0, -1);
            dataValue = dataValue.slice(0, -1);
            display.push(operatorValue);
            dataValue.push(operatorDataVale);
            displayValue();
        }
        
    })
}

let displayValue = () => {
    output = display.join('');
    displayArea.innerHTML = output;
}

// Clear display;
let clear = () => {
    display = [];
    dataValue = [];
    displayArea.innerHTML = '0';
}

let clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    clear();
})

// Total calculate;
let calculateTotal = (dataValueArr) => {
    let outputTotal = dataValueArr.join('');
    let totalCalculate = eval(outputTotal);
    totalVal += totalCalculate != undefined ? totalCalculate : '';
    clear();
    displayArea.innerHTML = totalVal;
}

equalBtn.addEventListener('click', () => {
    let lastArr = dataValue[dataValue.length - 1];
    if(lastArr >= 0 && lastArr <= 9) {
        calculateTotal(dataValue);
    } else {
        calculateTotal(dataValue.slice(0, -1));
    }
})




