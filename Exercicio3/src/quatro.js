menor = prompt("Entre com o menor valor")
menor = parseInt(menor)
maior = prompt("Entre com o maior valor")
maior = parseInt(maior)
if (menor > maior){
    aux = menor
    menor = maior
    maior = aux
}
soma = 0;

while(menor <= maior){
    soma = soma + menor
    menor = menor + 1
}
console.log ("somatória", soma)