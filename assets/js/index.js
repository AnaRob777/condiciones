function borde(){
    gatito =  document.querySelector(".gatito")
    if(gatito.style.border == '2px solid red'){
        gatito.style.border = 'none'
    }
    else {gatito.style.border ='2px solid red'}}

function suma(){
let valor1 = document.getElementById('valor1').value
let valor2 = document.getElementById('valor2').value
let valor3 = document.getElementById('valor3').value
let respuesta = document.getElementById('respuesta')
let total = Number(valor1)+Number(valor2)+Number(valor3)

    if (total >=0&&total<=10) {
        respuesta.innerHTML= 'Llevas ' + total + ' stickers'
    } 
    if (total >=11){ 
        respuesta.innerHTML= 'Llevas muchos stickers'
    } 
    }

function pin(){
number1 = document.getElementById("number1")
number2 = document.getElementById("number2")
number3 = document.getElementById("number3")
aviso= document.getElementById('aviso')

password = (number1) + (number2) + (number3);

if (password==911){
   aviso.innerHTML= 'password 1 correcto'
}
else if (password==714){
   aviso.innerHTML= 'password 2 correcto'
}
else{
    aviso.innerHTML='password incorrecto'
}}