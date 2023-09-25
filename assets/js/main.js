const createCalculator = () => {
    return {
        display: document.querySelector('.display'),

        start() {
            this.clickbuttons();
        },

        clickbuttons() {
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
        },

        btnForDisplay(valor) {
            this.display.value += valor;
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteOneCharacter() {
            this.display.value = this.display.value.slice(0, -1);
        },

        makeAccount() {
            let account = this.display.value;

            try {
                account = eval(account);

                if (!account) {
                    alert('Conta invalida');
                    return;
                }

                this.display.value = String(account);

            } catch (e) {
                alert('Conta invalida');
                return;
            }
        }
    };
}

const calculator = createCalculator();
calculator.start();