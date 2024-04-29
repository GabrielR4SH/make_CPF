class CPF_Validator {
    constructor(cpfSend) {
        Object.defineProperty(this, 'cpfClean', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfSend.replace(/\D+/g, '')
        });
    }

    squency() {
        return this.cpfClean.charAt(0).repeat(11) == this.cpfClean;
    }

    generateNewCPF(){
        const nodigitsCPF = this.cpfClean.slice(0, -2);
        const digit1 = this.generateDigit(nodigitsCPF);
        const digit2 = this.generateDigit(nodigitsCPF + digit1);
        this.newCPF = nodigitsCPF + digit1 + digit2;
    }

    generateDigit(nodigitsCPF){
        let total = 0;
        let reverse = nodigitsCPF.length + 1;

        for(let stringNumber of nodigitsCPF){
            //console.log(stringNumber, typeof stringNumber);
            console.log(stringNumber, reverse);
            total += reverse * Number(stringNumber);
            reverse--;
        }

        const digit = 11 - (total % 11);
        return digit <= 9 ? String(digit): '0';
    }

    validate() {
        if (!this.cpfClean) return false;
        if (typeof this.cpfClean !== 'string') return false;
        if (this.cpfClean.length !== 11) return false;
        if (this.squency()) return false;
        if(!this.generateNewCPF()) return false;
        
        console.log(this.newCPF);
        return 'Done'
    }
}

let validateCPF = new CPF_Validator('499.518.298-56');
console.log(validateCPF.validate());
