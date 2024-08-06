function changeColor(cor, image) {
    // Troca de Imagem
    const iphoneImg = document.querySelector("#iphone-img")
    iphoneImg.src = image;
    // Troca de Cor de Fundo
    const divColor = document.querySelector("#colorBackground")
    divColor.style.backgroundColor = cor;
}