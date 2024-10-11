count = 0
maior = -Infinity
while (count < 5){
    numero = prompt("Entre com o numero")
    numero = parseInt(numero)
    if (numero > maior){
    maior = numero
    }
    count = count + 1 
}
console.log("Maior", maior)