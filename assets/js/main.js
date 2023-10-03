class Calculator {
    constructor() {
        this.display = document.querySelector('.display');

        this.start = () => {
            this.clickbuttons();
            this.backspaceButton();
            this.pressEnter();
        };

        this.backspaceButton = () => {
            this.display.addEventListener('keydown', e => {
                if (e.keyCode === 8) {
                    e.preventDefault();
                    this.deleteOneCharacter();
                }
            });
        };

        this.pressEnter = () => {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.makeAccount();
                }
            });
        };

        this.clickbuttons = () => {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnForDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.deleteOneCharacter();
                }

                if (el.classList.contains('btn-eq')) {
                    this.makeAccount();
                }

                this.display.focus();
            });
        };

        this.btnForDisplay = (valor) => {
            this.display.value += valor;
        };

        this.clearDisplay = () => {
            this.display.value = '';
        };

        this.deleteOneCharacter = () => {
            this.display.value = this.display.value.slice(0, -1);
        };

        this.makeAccount = () => {
            let account = this.display.value;
    
            try {
                const result = this.evaluateExpression(account);
                if (result === null || isNaN(result)) {
                    alert('Conta inválida');
                } else {
                    this.display.value = String(result);
                }
            } catch (e) {
                alert('Conta inválida');
            }
        }
    
        this.evaluateExpression = (expression) => {
            try {
                const fn = new Function(`return ${expression}`);
                return fn();
            } catch (error) {
                return null;
            }
        }
    }
}

const calculator = new Calculator();
calculator.start();