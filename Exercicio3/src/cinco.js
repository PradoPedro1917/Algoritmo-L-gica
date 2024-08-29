i = 0
soma = 0
while ( i < 5 ){
    entrada = prompt("Entre com um núero:");
    entrada = parseInt(entrada)
    soma = soma + entrada
    i = i + 1
}
console.log("somatória", soma)