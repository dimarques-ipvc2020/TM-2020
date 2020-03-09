function getInfo(){
    var link = document.getElementById("link");
    var lista = document.getElementById("info");

    lista.innerHTML =
        "ID: " + link.id + "<br>" +
        "Target: " + link.target + "<br>" +
        "Type: " + link.type + "<br>" +
        "HREF: " + link.href + "<br>";

}

function changeColorToRed(){
    var titulos = document.getElementsByClassName("titulo");

    for(let elem of titulos){
        elem.style.color = "red";
    }
}

function clickOnCell(cell){
    cell.innerText = prompt("Novo valor:");
    cell.style.backgroundColor = "green";
}

function setClickOnEachTD(){
    var cells = document.getElementsByTagName("td");
    for(let cell of cells){
        cell.onclick = function(){
            clickOnCell(cell);
        }
    }
}

setClickOnEachTD();