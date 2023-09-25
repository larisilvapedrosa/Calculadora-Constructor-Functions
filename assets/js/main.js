const createCalculator = () => {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        start() {
            this.clickbuttons();
        },

        clickbuttons() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnForDisplay(el.innerText);
                }
            });
        },

        btnForDisplay(valor) {
            this.display.value += valor;
        },

        clearDisplay(){
            this.display.value = '';
        }
    };
}


const calculator = createCalculator();
calculator.start();