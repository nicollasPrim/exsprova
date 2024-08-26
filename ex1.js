let res = document.getElementById('res')
let numArray = []
let array1 = []

function gravar(){
    let n = Number(document.getElementById('n').value)

    if(numArray.length < 5){
        numArray.push(n)
        console.log(numArray)
    }else{
        alert('Limite de 5 números atingido!')
    }

}

function calc(){
    let soma, media = 0

    for(i=0; i<5; i++){
        soma = numArray[0] + numArray[1] + numArray[2] + numArray[3] + numArray[4] 
        media = soma / numArray.length
    }

    console.log(media)
    console.log(soma)
    res.innerHTML = media
}