let num1 = prompt('escribe un numero positivo')
let num2 = prompt('escribe un numero mayor que el anterior')

if (num1 < num2) {
    alert(num1 +' no es mayor que ' + num2)
} 
if (num2 >= 0) {
    alert(num2 + ' es un numero positivo')
}
if (num1 <= 0) {
    alert(num1 + ' es negativo o distinto a cero')
}