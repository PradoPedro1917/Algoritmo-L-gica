peso = prompt("Entre com o seu peso")
peso = parseFloat(peso)
altura = prompt("Entre com a sua altura")
altura = parseFloat(altura)
imc = peso /(altura * altura)
if(imc <= 18.5){
    console.log("Abaixo do peso")
}
    else{

    }
        if(imc >= 18.6 && imc <= 24.9){
            console.log("Peso ideal (parabéns)")
        } 
            else {

            }
                if(imc >= 25.0 && imc <= 29.9){
                    console.log("Levemente acima do peso")
                }
                    else{

                    }
                        if(imc >= 30.0 && imc <=34.4){
                            console.log("Obesidade Grau I")
                        }
                            else{

                            }
                                if(imc >= 35.5 && imc <=39.9){
                                    console.log("Obesidade Grau II")
                                }
                                    else{
                                    }
                                        if(imc >= 40){
                                            console.log("Obesidade Grau III")
                                        }
console.log("Fim do programa")
                                    