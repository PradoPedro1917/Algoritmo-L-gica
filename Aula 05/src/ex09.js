entrada = [9,2,4,5,8];
saida = [3,5,2,7,4];
i = 0;
while (i < entrada.length){
    if(entrada [i] < saida [i]){
        console.log(i,":", saida[i])
    }
        else{
            console.log(i, ":", entrada[i]);
        }
        i = i + 1 
}
