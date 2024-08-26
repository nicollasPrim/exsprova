let res = document.getElementById('res')
let valRand = []

function ran(){
    v1 = Math.floor(Math.random() * (10 + 1 - 1)) + 1
    v2 = Math.floor(Math.random() * (10 + 1 - 1)) + 1
    v3 = Math.floor(Math.random() * (10 + 1 - 1)) + 1
    v4 = Math.floor(Math.random() * (10 + 1 - 1)) + 1
    v5 = Math.floor(Math.random() * (10 + 1 - 1)) + 1

    if(valRand.length < 5){
        valRand.push(v1, v2, v3, v4, v5)
    }else{
        alert('Valor máximo de 5 números atingidos!')
    }
    console.log(valRand)
}

function calc(){
    let pares = 0
    let impar = 0


    for(i=0; i<5; i++){
        if(valRand[i] % 2 == 0){
            pares += valRand[i]
        }else{
            impar += valRand[i] 
        }

    }
    console.log(pares)
    console.log(impar)
    res.innerHTML = 'Valores gerados: '+valRand+'<br>'+'Números pares: '+pares+'<br>'+'Números ímpares: '+impar
}