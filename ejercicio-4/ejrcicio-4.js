let cuadrado = document.getElementById('cuadrado')
let imagen = document.getElementById('imagen')

cuadrado.onmouseover = function() {
    cuadrado.style.backgroundColor = "#056e05"
    cuadrado.style.width = "500px"
    cuadrado.style.height = "400px"
    cuadrado.style.marginLeft = "400px"
    imagen.style.width = "400px"
    imagen.style.height= "300px"
    imagen.style.marginTop= "45px"
}

cuadrado.onmouseout = function(){
    cuadrado.style.backgroundColor = "white"
    imagen.style.width = "600px"
    imagen.style.height= "500px"
}