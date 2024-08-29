s = "abc" 
entrada ="";
tentativa = 0
while(entrada != s && tentativa < 3){
   entrada = prompt("Entre com a senha")
    if(entrada != s){ 
       console.log("Senha incorreta")
    }
} 
    tentativa = tentativa + 1
        if(entrada == s){
            console.log("Acesso Liberado")
        }
        else{
            console.log("Excedeu o número de tentativas")
        }
