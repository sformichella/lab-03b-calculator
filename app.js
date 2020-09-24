//Getting all those doc elements

let firstNumber = document.getElementById('first-number');
let secondNumber = document.getElementById('second-number');
let calculateButton = document.getElementById('calculate-button');
let result = document.getElementById('result');

//Button function. Outputs 'Please enter two numbers!' if at least one of the inputs is empty.

calculateButton.addEventListener('click', () => {
    let number1 = firstNumber.value;
    let number2 = secondNumber.value;
    
    if (number1 === '' || number2 === '') {
        result.textContent = 'Please enter two numbers!'
    }
    else {
        answer = Number(number1) + Number(number2);
        result.textContent = answer;
    }
})