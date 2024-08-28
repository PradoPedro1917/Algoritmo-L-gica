a = prompt("Entre com um número inteiro")
a = parseInt(a)
b = prompt("Entre com outro número inteiro")
b = parseInt(b)
if (a % b == 0){
    console.log(a, "é multiplo", b)
} else {
    console.log(a, "não é multiplo", b)
}
console.log("Fim do programa")