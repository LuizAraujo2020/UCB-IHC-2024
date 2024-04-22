const queryString = window.location.search;
const urlParams   = new URLSearchParams(queryString);

const inputCpf    = urlParams.get('inputCpf');
const inputCnpj   = urlParams.get('inputCnpj');
const inputNumber = urlParams.get('inputNumber');
const inputPrice  = urlParams.get('inputPrice');
const inputTax    = urlParams.get('inputTax');

let cpf           = document.getElementById('cpf');
let cnpj          = document.getElementById('cnpj');
let numberAbs     = document.getElementById('numberAbs');
let numberRounded = document.getElementById('numberRounded');
let comission     = document.getElementById('comission');


//================= FUNCTIONS
function init() {
    if (inputCpf == null || inputCpf == undefined) { return }

    cpf.innerText = formatCPF(inputCpf);
    cnpj.innerText = formatCNPJ(inputCnpj);
    numberAbs.innerText = Math.abs(inputNumber);
    numberRounded.innerText = Math.round(inputNumber);
    comission.innerText = calculateComission();
}
init();


//================= DATE TIME REALTIME
var timeDisplay = document.getElementById("time");

function refreshTime() {
  var dateString = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);


//================= FORMATATIONS
function calculateComission() {
    let result = inputPrice * inputTax / 100;
    result = result.toFixed(2);
    result = result.replace(".", ",");

    return result;
}


//================= FORMATATIONS
function formatCPF(cpf){
    //retira os caracteres indesejados...
    cpf = cpf.replace(/[^\d]/g, "");
    
    //realizar a formatação...
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function formatCNPJ(cnpj){
    //retira os caracteres indesejados...
    cnpj = cnpj.replace(/[^\d]/g, "");
    
    //realizar a formatação...
    return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
}