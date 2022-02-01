let eren = document.getElementById('eren')
let beren = document.getElementById('beren')
let mikasa = document.getElementById('mikasa')
let bmikasa = document.getElementById('bmikasa')
let armin = document.getElementById('armin')
let barmin = document.getElementById('barmin')
let zeke = document.getElementById('zeke')
let bzeke = document.getElementById('bzeke')
let hange = document.getElementById('hange')
let bhange = document.getElementById('bhange')


const desaparecer = (image)=>{
    image.style.opacity='0'
}
const aparecer = (image)=>{
    image.style.opacity='1'
}
eren.onmouseover= function () {
    desaparecer(eren)
    
}

mikasa.onmouseover= function () {
    desaparecer(mikasa)
}
armin.onmouseover= function () {
    desaparecer(armin) 
    
}
zeke.onmouseover= function () {
    desaparecer(zeke)
    
}
hange.onmouseover= function () {
    desaparecer(hange)
    
}

beren.onclick = function () {
    aparecer(eren)
}


bmikasa.onclick = function () {
    aparecer(mikasa)
}


barmin.onclick = function () {
    aparecer(armin)
}

bhange.onclick = function (){
    aparecer(hange)
}

bzeke.onclick = function () {
    aparecer(zeke)
}
