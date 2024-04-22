
//====== Elements
document.getElementById('inputCpf').addEventListener('change', validateCpf);
document.getElementById('inputCnpj').addEventListener('change', validateCnpj);
document.getElementById('inputNumber').addEventListener('change', validateNumber);
document.getElementById('inputPrice').addEventListener('change', validatePrice);
document.getElementById('inputTax').addEventListener('change', validateTax);

document.getElementById('submitButton').addEventListener('mouseover', checkSubmit);

const inputCpfLabel    = document.getElementById('cpfHelp');
const inputCnpjLabel   = document.getElementById('cnpjHelp');
const inputNumberLabel = document.getElementById('numberHelp');
const inputSellLabel   = document.getElementById('sellHelp');

let isCpfValid    = false;
let isCnpjValid   = false;
let isNumberValid = false;
let isPriceValid  = false;
let isTaxValid    = false;

//====== Functions
function checkSubmit() {
    if (isCpfValid && isCnpjValid && isNumberValid && isPriceValid && isTaxValid) {
        document.getElementById('submitButton').disabled = false;

        inputCpfLabel.innerText    = '\n';
        inputCnpjLabel.innerText   = '\n';
        inputNumberLabel.innerText = '\n';
        inputSellLabel.innerText   = '\n';

        return
    }

    document.getElementById('submitButton').disabled = true;
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
        required: 'Informe a taxa de comissão!',
        invalid:  'Informe a taxa de comissão!'
    }
}

//====== Validators
function validateCpf() {
    checkSubmit();
    
    let cpf = this.value;
    cpf = cpf.replace(/\D/g, '');

    var Soma;
    var Resto;

    Soma = 0;

    if(cpf == undefined || cpf == '') {
        inputCpfLabel.innerText = Messages.cpf.required;
        isCpfValid = false;
        return
    }

    if(cpf.length != 11 || cpf == "00000000000") {
        inputCpfLabel.innerHTML = Messages.cpf.invalid;
        isCpfValid = false;
        return
    }


    for (i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(9, 10)) ) {
        inputCpfLabel.innerHTML = Messages.cpf.invalid;
        isCpfValid = false;
        return
    }

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(10, 11) ) ) {
        inputCpfLabel.innerHTML = Messages.cpf.invalid;
        isCpfValid = false;
        return
    }

    inputCpfLabel.innerText = '\n';
    isCpfValid = true;
    checkSubmit();
}


function validateCnpj() {
    checkSubmit();

    let cnpj = this.value;
    cnpj = cnpj.replace(/[^\d]+/g,'');
 
    if(cnpj == undefined || cnpj == '') {
        inputCnpjLabel.innerText = Messages.cnpj.required;
        isCnpjValid = false;
        return
    }
     
    if (cnpj.length != 14) {
        inputCnpjLabel.innerHTML = Messages.cnpj.invalid;
        isCnpjValid = false;
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
            isCnpjValid = false;
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
        isCnpjValid = false;
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
        isCnpjValid = false;
        return
    }

    inputCnpjLabel.innerText = '\n';
    isCnpjValid = true;
    checkSubmit()
}

function validateNumber() {
    checkSubmit();

    let number = this.value;

    if (number == undefined || number == '') {
        inputNumberLabel.innerHTML = Messages.number.required;
        isNumberValid = false;
        return
    }

    if (isFloat(number) == false) {
        inputNumberLabel.innerHTML = Messages.number.invalid;
        isNumberValid = false;
        return
    }

    inputNumberLabel.innerText = '\n';
    isNumberValid = true;
    checkSubmit()
}

function validatePrice() {
    checkSubmit();

    let price = this.value;
    if (price == undefined || price == '') {
        inputSellLabel.innerHTML = Messages.price.required;
        isPriceValid = false;
        return
    }

    if (isNumber(price)) {
        inputSellLabel.innerHTML = Messages.price.invalid;
        isPriceValid = false;
        return
    }

    inputSellLabel.innerText = '\n';
    isPriceValid = true;
    checkSubmit()
}

function validateTax() {
    checkSubmit();

    let tax = this.value;
    if (tax == undefined || tax == '') {
        inputSellLabel.innerHTML = Messages.tax.required;
        isTaxValid = false;
        return
    }
    
    if (isNumber(tax)) {
        inputSellLabel.innerHTML = Messages.tax.invalid;
        isTaxValid = false;
        return
    }

    inputSellLabel.innerText = '\n';
    isTaxValid = true;
    checkSubmit()
}


//====== Utils
function isFloat(n) {
    return Number(n) == n && n % 1 != 0;
}

function isNumber(value) {
    return typeof value === 'number';
}

/* Event listener */
document.getElementsByName("Thing")[0].addEventListener('change', doThing);

/* Function */
function doThing(){
   alert('Horray! Someone wrote "' + this.value + '"!');
}