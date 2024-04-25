function calculo(){
    var nota01 = parseFloat(document.getElementById('nota01').value);
    var nota02 = parseFloat(document.getElementById('nota02').value);
    var nota03 = parseFloat(document.getElementById('nota03').value);
    var nota04 = parseFloat(document.getElementById('nota04').value);
    var resultado = parseFloat((nota01 + nota02 + nota03 + nota04) / 4);
    document.getElementById('txtResultado').setAttribute("value", resultado);
}