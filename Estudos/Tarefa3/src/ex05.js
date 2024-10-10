cont = 0
soma = 0 
while (cont < 5){
    numero = prompt("Entre com um numero")
    numero = parseInt(numero)
    soma = soma + numero
    cont = cont + 1
}
console.log("somatória", soma)