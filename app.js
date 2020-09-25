
    // Addition Inputs

let additionFirstNumber = document.getElementById('add-first-number');

let additionSecondNumber = document.getElementById('add-second-number');

let sumButton = document.getElementById('sum-calc');

let result = document.getElementById('sum');



    // Addition Calc

sumButton.addEventListener('click', () => {
    let number1 = additionFirstNumber.value;
    let number2 = additionSecondNumber.value;
    
    if (number1 === '' || number2 === '') {
        result.textContent = 'Please enter two numbers!'
    }
    else {
        answer = Number(number1) + Number(number2);
        result.textContent = answer;
    }
})









    // Subtract Inputs

let subFirstNumber = document.getElementById('subtract-first-number');

let subSecondNumber = document.getElementById('subtract-second-number');

let differenceButton = document.getElementById('difference-calc');

let difference = document.getElementById('difference');



    // Subtract Calc

differenceButton.addEventListener('click', () => {
    let number1 = subFirstNumber.value;
    let number2 = subSecondNumber.value;
    
    if (number1 === '' || number2 === '') {
        difference.textContent = 'Please enter two numbers!'
    }
    else {
        answer = Number(number1) - Number(number2);
        difference.textContent = answer;
    }
})









    // Multiply Inputs

let multFirstNumber = document.getElementById('multiply-first-number');

let multSecondNumber = document.getElementById('multiply-second-number');

let productButton = document.getElementById('product-calc');

let product = document.getElementById('product');



    // Multiply Calc

productButton.addEventListener('click', () => {
    let number1 = multFirstNumber.value;
    let number2 = multSecondNumber.value;
    
    if (number1 === '' || number2 === '') {
        product.textContent = 'Please enter two numbers!'
    }
    else {
        answer = Number(number1) * Number(number2);
        product.textContent = answer;
    }
})









    // Divide Inputs

let divideFirstNumber = document.getElementById('divide-first-number');

let divideSecondNumber = document.getElementById('divide-second-number');

let quotientButton = document.getElementById('quotient-calc');

let quotient = document.getElementById('quotient');



    // Divide Calc

quotientButton.addEventListener('click', () => {
    let number1 = divideFirstNumber.value;
    let number2 = divideSecondNumber.value;
    
    if (number1 === '' || number2 === '') {
        quotient.textContent = 'Please enter two numbers!'
    }
    else {
        answer = Number(number1) / Number(number2);
        quotient.textContent = answer;
    }
})