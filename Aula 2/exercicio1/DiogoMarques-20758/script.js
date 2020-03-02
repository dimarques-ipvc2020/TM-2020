function lerInput(){
    //buscar input que está na caixa de texto
    var valor = document.getElementById("numero").value;

    //se a input estiver vazia, avisar o utilizador e não alterar o texto
    if(!valor.length)
        alert("input vazia");
    else
        //alterar texto da label "texto" com a input
        document.getElementById("texto").innerText = valor;
}