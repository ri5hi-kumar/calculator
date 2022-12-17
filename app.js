// functions for basic mathmatical operations

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return (a / b).toFixed(3);
}


function operate(operator, a, b){
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return add(a, b);
    
        case '-':
            return subtract(a, b);

        case '/':
            return divide(a, b);

        case '*':
            return multiply(a, b);

        default:
            break;
    }
}