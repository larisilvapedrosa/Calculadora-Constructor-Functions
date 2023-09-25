const createCalculator = () => {
    return {
        display: document.querySelector('.display'),

        start() {
            this.clickbuttons();
            this.backspaceButton();
            this.pressEnter();
        },
        
        backspaceButton(){
            this.display.addEventListener('keydown', e =>{
                if(e.keyCode === 8){
                    e.preventDefault();
                    this.deleteOneCharacter();
                }
            });
        },

        pressEnter(){
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.makeAccount();
                }
            });
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
                if (account === '' || Number.isNaN(account) || typeof account !== 'number') {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(account);
            } catch (e) {
                alert('Conta inválida');
                return;
            }
        }
    };
}

const calculator = createCalculator();
calculator.start();