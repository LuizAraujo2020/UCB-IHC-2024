
//====== Elements
document.getElementById('inputCpf').addEventListener('change', validateCpf);
document.getElementById('inputCnpj').addEventListener('change', validateCnpj);
document.getElementById('inputNumber').addEventListener('change', validateNumber);

// const inputCpf    = document.getElementById('inputCpf')
// const inputCnpj   = document.getElementById('inputCnpj');
// const inputNumber = document.getElementById('inputNumber');
// const inputPrice  = document.getElementById('inputPrice');
// const inputTax    = document.getElementById('inputTax');

const inputCpfLabel    = document.getElementById('cpfHelp');
const inputCnpjLabel   = document.getElementById('cnpjHelp');
const inputNumberLabel = document.getElementById('numberHelp');


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
        required: 'Um número real (com ponto) é obrigatório.',
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
    
    let cpf = this.value;
    cpf = cpf.replace(/\D/g, '');

    var Soma;
    var Resto;

    Soma = 0;

    if(cpf == undefined || cpf == '') {
        inputCpfLabel.innerText = Messages.cpf.required;
        return
    }

    if(cpf.length != 11 || cpf == "00000000000") {
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


function validateCnpj() {
    let cnpj = this.value;
    cnpj = cnpj.replace(/[^\d]+/g,'');
 
    if(cnpj == undefined || cnpj == '') {
        inputCnpjLabel.innerText = Messages.cnpj.required;
        return
    }
     
    if (cnpj.length != 14) {
        inputCnpjLabel.innerHTML = Messages.cnpj.invalid;
        return
    }
 
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999") {
            inputCnpjLabel.innerHTML = Messages.cpf.invalid;
        return
    }
         
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)) {
        inputCnpjLabel.innerHTML = Messages.cnpj.invalid;
        return
    }
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)) {
        inputCnpjLabel.innerHTML = Messages.cnpj.invalid;
        return
    }

    inputCnpjLabel.innerText = '\n';
}

function validateNumber() {
    let number = this.value;

    if (number == undefined || number == '') {
        inputNumberLabel.innerHTML = Messages.number.required;
        return
    }

    if (isFloat(number) == false) {
        inputNumberLabel.innerHTML = Messages.number.invalid;
        return
    }

    inputNumberLabel.innerText = '\n';
}


//====== Utils
function isFloat(n) {
    return Number(n) == n && n % 1 != 0;
}

/* Event listener */
document.getElementsByName("Thing")[0].addEventListener('change', doThing);

/* Function */
function doThing(){
   alert('Horray! Someone wrote "' + this.value + '"!');
}