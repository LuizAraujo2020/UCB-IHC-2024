
//====== Elements
// const inputCpf    = document.getElementById('inputCpf').addEventListener('change', validateCpf);
document.getElementById('inputCpf').addEventListener('change', validateCpf);

const inputCnpj   = document.getElementById('inputCnpj');
const inputNumber = document.getElementById('inputNumber');
const inputPrice  = document.getElementById('inputPrice');
const inputTax    = document.getElementById('inputTax');

const inputCpfLabel = document.getElementById('cpfHelp');


//====== Functions
function handleSubmit() {
    // validateCpf(inputCpf.value);
}


//====== Error messages
const Messages = {
    cpf: {
        tip: 'Somente números.',
        required: 'O CPF é obrigatório.',
        invalid:  'O CPF forncecido é inválido.'
    },
    cnpj: {
        tip: 'Somente números.',
        required: 'O CNPJ é obrigatório.',
        invalid:  'O CNPJ forncecido é inválido.'
    },
    number: {
        tip: 'Número real (com ponto).',
        required: 'Informe um número real (com ponto).',
        invalid:  'O número informado é inválido.'
    },
    price: {
        tip: '',
        required: 'Informe o valor da venda.',
        invalid:  'Informe a taxa de comissão!'
    },
    tax: {
        tip: '',
        required: 'Informe o valor da venda.',
        invalid:  'Informe a taxa de comissão!'
    }
}

//====== Validators
function validateCpf() {

    var Soma;
    var Resto;
    Soma = 0;
    
    let cpf = this.value;
    cpf = cpf.replace(/\D/g, '');

    if(cpf == undefined || cpf == '') {
        inputCpfLabel.innerText = Messages.cpf.required;
        return
    }

    if(cpf.length != 11 || cpf == "00000000000") {
        // inputCpfLabel.innerText = Messages.cpf.invalid;
        inputCpfLabel.innerHTML = Messages.cpf.invalid;
        return
    }


    for (i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(9, 10)) ) {
        inputCpfLabel.innerHTML = Messages.cpf.invalid;
        return
    }

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(10, 11) ) ) {
        inputCpfLabel.innerHTML = Messages.cpf.invalid;
        return
    }







    inputCpfLabel.innerText = '\n';
}

//====== Utils
function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}

/* Event listener */
document.getElementsByName("Thing")[0].addEventListener('change', doThing);

/* Function */
function doThing(){
   alert('Horray! Someone wrote "' + this.value + '"!');
}