const submitButton = document.getElementById('submit-button')
const dangerAlert = document.getElementById('error-danger')
const firstNumber = document.getElementById('first-number')
const secondNumber = document.getElementById('second-number')
const operator = document.getElementById('operator')
const resultAlert = document.getElementById('result-alert')
const clearButton = document.getElementById('clear-button')


submitButton.addEventListener('click', () => {
    if (!operator.options[operator.selectedIndex].value) {
        dangerAlert.classList.remove('d-none')
        dangerAlert.innerText = 'You has to define a operator'
        return Promise.reject()
    } else if (firstNumber.value === "" || secondNumber.value === "") {
        dangerAlert.classList.remove('d-none')
        dangerAlert.innerText = 'You has to define a both number!'
        return Promise.reject()
    }

    switch (operator.options[operator.selectedIndex].value) {
        case "+":
            resultAlert.innerText = `The result is = ${parseInt(firstNumber.value) + parseInt(secondNumber.value)}`
            resultAlert.classList.remove('d-none')
            break;
        case "-":
            resultAlert.innerText = `The result is = ${parseInt(firstNumber.value) - parseInt(secondNumber.value)}`
            resultAlert.classList.remove('d-none')
            break;
        case "/":
            resultAlert.innerText = `The result is = ${parseInt(firstNumber.value) / parseInt(secondNumber.value)}`
            resultAlert.classList.remove('d-none')
            break;
        case "X":
            resultAlert.innerText = `The result is = ${parseInt(firstNumber.value) * parseInt(secondNumber.value)}`
            resultAlert.classList.remove('d-none')
            break;
        default:
            break;
    }
})

clearButton.addEventListener('click', () => {
    resultAlert.classList.add('d-none')
    dangerAlert.classList.add('d-none')
})
