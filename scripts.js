
function changeColor(cor, image) {
    const iphoneImg = document.querySelector("#iphone-img")
    iphoneImg.src = image;
    
    const divColor = document.querySelector("#colorBackground")
    divColor.style.backgroundColor = cor;
}