// alert("Estou aqui");
// prompt("Estou aqui");


function calculo() {
    // let txt = document.getElementById('txtResultado');

    let n1 = parseFloat(document.getElementById('nota01').value);
    let n2 = parseFloat(document.getElementById('nota02').value);
    let n3 = parseFloat(document.getElementById('nota03').value);
    let n4 = parseFloat(document.getElementById('nota04').value);

    const media = parseFloat((n1 + n2 + n3 + n4) / 4);

    document.getElementById('txtResultado').innerHTML = `MEDIA: ${media}`;
}