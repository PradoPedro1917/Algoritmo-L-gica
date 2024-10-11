count = 0
menor = Infinity
while (count < 5){
    numero = prompt("Entre com o numero")
    numero = parseInt(numero)
    if (numero < menor){
    menor = numero
    }
    count = count + 1 
}
console.log("Menor", menor)