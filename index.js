const txtop1 = document.getElementById ("op1")
const txtoperacion = document.getElementById ("operacion")
const txtop2 = document.getElementById ("op2")
const btnCalcular = document.getElementById ("calcular")
const pResultado = document.getElementById ("resultado")

btnCalcular.addEventListener ("click", calcular)

function calcular(){
const operacion = txtoperacion.value
const op1 = parseFloat (txtop1.value)
const op2 = parseFloat (txtop2.value)

if(operacion == "+" ||operacion == "-" ||operacion == "*" ||operacion == "/"){
    let resultado;
    switch (operacion) {
    case "+":
    resultado = op1 + op2        
    break;
    case "-":
    resultado = op1 - op2        
    break;
    case "*":
    resultado = op1 * op2        
    break;
    case "/":
    resultado = op1 / op2        
    break;
    }
    pResultado.innerText = "=" + resultado
}else{
    pResultado.innerText = "Calculo imposible"
}

}
