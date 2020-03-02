var arrayNumeros = [];

function adicionarNumero(){
    var numero = document.getElementById("numero").value;

    arrayNumeros.push(parseInt(numero));
    //sem o parseInt, adicionaria uma string em vez de um numero

    document.getElementById("numerosAdicionados").innerText = arrayNumeros;
}

function calcularNumeroMaior(){
    //se não inserir pelo menos 5 numeros, não calcular
    if(arrayNumeros.length < 5){
        alert("Precisa de inserir pelo menos 5 números.");
    }
    else {
        var numeroMaior = Math.max.apply(Math, arrayNumeros);

        alert("Maior Número: "+numeroMaior);
        document.getElementById("numeroMaior").innerText = numeroMaior;
    }
}