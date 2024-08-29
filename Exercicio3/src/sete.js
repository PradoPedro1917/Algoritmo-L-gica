i = 0
maior = -Infinity
while (i < 5){
    nro = prompt("Entre com o número")
    nro = parseInt(nro)
    if (nro > maior){
        maior = nro  
    }
    i = i + 1 
 }   
    console.log("maior", maior)
