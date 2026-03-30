function main(){
    let answer = document.getElementById('result');
    let btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        let primeiroValor = parseFloat(document.getElementById('num1').value);
        let segundoValor = parseFloat(document.getElementById('num2').value);
        let operation = document.getElementById('operation').value;

        let result = calculator(
            primeiroValor, 
            segundoValor, 
            operation
        );

        answer.textContent = result;
        console.log(result);
    })
}

function calculator(a, b, operation) {
    switch (operation) {
        case 'sum': 
            return sum(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
    }
}

function sum(a, b) {
    return a + b;
}
function subtract (a ,b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

if(typeof document !== 'undefined') {
    main();
}

module.exports = {
    sum,
    subtract,
    multiply,
    divide
};
