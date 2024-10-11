s = "abc" 
entrada ="";
tentativa = 0
while(s != entrada && tentativa < 3){ 
   entrada = prompt("Entre com a senha")
    if(entrada != s){
        console.log("Senha incorreta")
    }
}
    tentativa = tentativa + 1
    if(entrada == s){
        console.log("Acesso liberado")
    }
        else{
            console.log("Excedeu o número de tentativa")
        }
