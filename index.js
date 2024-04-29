class CPF_Validator{
    constructor(cpfSend){
        Object.defineProperty(this, 'cpfClean', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfSend.replace(/\D+/g, '')
        });
    }
}


