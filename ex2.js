let res = document.getElementById('res')
let valRand = []
let valSoma = []

function ran(){
    v1 = Math.floor(Math.random() * (10 - 1 + 1) ) + 1
    v2 = Math.floor(Math.random() * (10 - 1 + 1) ) + 1
    v3 = Math.floor(Math.random() * (10 - 1 + 1) ) + 1
    v4 = Math.floor(Math.random() * (10 - 1 + 1) ) + 1
    v5 = Math.floor(Math.random() * (10 - 1 + 1) ) + 1
    
    console.log(v1)
    console.log(v2)
    console.log(v3)
    console.log(v4)
    console.log(v5)
    
    valRand.push(v1)
    valRand.push(v2)
    valRand.push(v3)
    valRand.push(v4)
    valRand.push(v5)
    
    console.log(valRand)
}

function calc(){
    let media, soma = 0

    for(i=0; i<5; i++){
        soma = valRand[0] + valRand[1] + valRand[2] + valRand[3] + valRand[4]
        media = soma / valRand.length
    }
    res.innerHTML = 'Valores gerados: '+valRand+'<br>'+'Valores somados: '+soma+'<br>'+'Media dos valores: '+media
}