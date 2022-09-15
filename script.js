var input = document.getElementById("input")
let firstNumber, secondNumber, operator;

const addNumber = (params) => {
    input.innerText += params
}

const clearNum = () => {
    input.innerText = ''
}


const addOperator = (params) => {

    operator = params

    firstNumberString = input.textContent
    
    firstNumber = parseFloat(firstNumberString)
    
    input.innerText = ''

}

const showResult = () => {
    secondtNumberString = input.textContent
    
    secondNumber = parseFloat(secondtNumberString)
    
    if(operator === 'x') {
        result = firstNumber * secondNumber
        input.innerText = result
    }

    if(operator === '-') {
        result = firstNumber - secondNumber
        input.innerText = result
    }

    if(operator === '+') {
        result = firstNumber + secondNumber
        input.innerText = result
    }

    if(operator === '/') {
        result = firstNumber / secondNumber
        input.innerText = result
    }
}