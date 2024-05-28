let notasAluno = []

function calcMedia(notas){
    var sum = 0
    for (let i = 0; i < notas.length; i++){
        sum += notas[i]
    }
    return (sum / notas.length).toFixed(2)
}

let teste1 = [4.5, 8.2, 7.3, 5.7]

let media1 = calcMedia(teste1)
console.log(media1)

let test2 = [0, 8.9, 9.3, 8.4, 8.5]
let media2 = calcMedia(test2)
console.log(media2)