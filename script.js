class Calculator {
    constructor(preDisplay, currentDisplay) {
        this.preDisplay = preDisplay;
        this.currentDisplay = currentDisplay;
        this.operation = undefined;
        this.preNumber = '';
        this.currentNumber = '';
    }

    clear() {
        this.preNumber = '';
        this.currentNumber = '';
    }

    delete() {
        this.currentNumber = this.currentNumber.substring(0, this.currentNumber.length - 1);
    }

    appendNumber(number) {
        if (this.currentNumber.toString().includes('.') && number == '.') return;
        this.currentNumber += number;

    }

    calculateTraingle(operation) {
        let result;
        switch(operation){
            case 'sin':
                result = Math.sin(+this.currentNumber)
                break;
            case 'cos':
                result = Math.cos(+this.currentNumber)
                break;
            case 'tan':
                result = Math.tan(+this.currentNumber)
                break;
            
        }
        this.currentNumber = result;
        this.preNumber = '';
        this.operation = undefined;
    }

    chooseOperation(operation) {
        this.preNumber = this.currentNumber;
        this.currentNumber = '';
        this.operation = operation;
    }

    comput() {
        let result;
        switch (this.operation) {
            case '+':
                result = +this.preNumber + +this.currentNumber;
                break;
            case '-':
                result = +this.preNumber - +this.currentNumber;
                break;
            case '*':
                result = +this.preNumber * +this.currentNumber;
                break;
            case '/':
                result = +this.preNumber / +this.currentNumber;
                break;
            case '%':
                result = +this.preNumber % +this.currentNumber;
                break;
        }
        this.currentNumber = result;
        this.preNumber = '';
        this.operation = undefined;
    }

    updateDisplay() {
        this.preDisplay.innerText = this.preNumber;
        if (this.operation != undefined)
            this.preDisplay.innerText = this.preNumber + this.operation;
        this.currentDisplay.innerText = this.currentNumber;
    }
}

const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalBtn = document.querySelector('[data-equal]');
const clearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const preOutputDisplay = document.querySelector('[data-pre-operand]');
const currentOutputDisplay = document.querySelector('[data-current-operand]');
const trangleBtns = document.querySelectorAll('[data-traingle]');

let calculator = new Calculator(preOutputDisplay, currentOutputDisplay);
calculator.updateDisplay();
calculator.clear();

numberBtns.forEach(btn => btn.addEventListener(
    'click', () => {
        calculator.appendNumber(btn.innerText);
        calculator.updateDisplay();
    }
))

trangleBtns.forEach(btn => btn.addEventListener(
    'click', () => {
        calculator.calculateTraingle(btn.innerText);
        calculator.updateDisplay()
    }
))


operationBtns.forEach(btn => btn.addEventListener(
    'click', () => {
        calculator.chooseOperation(btn.innerText);
        calculator.updateDisplay();
    }
))

clearBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

equalBtn.addEventListener('click', () => {
    calculator.comput();
    calculator.updateDisplay();
})

deleteBtn.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})