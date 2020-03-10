var counterImages = 1;
function addImage(){
    var image = document.createElement("img");
    var list = document.getElementById("imagesList");
    var counter = document.getElementById("imageCounter");

    image.src = "https://placeimg.com/250/150/"+counterImages;
    list.appendChild(image);

    counter.innerText = counterImages.toString();
    counterImages++;
}

function removeImage(){
    var list = document.getElementById("imagesList");
    var images = list.children;
    var counter = document.getElementById("imageCounter");
    var nRemovedImage = Math.floor(Math.random()*(counterImages-1));

    list.removeChild(list.children[nRemovedImage]);

    counterImages--;
    counter.innerText = (counterImages - 1).toString();
}