let notas = []

function calcMedia(notas){
    var sum = 0
    for (let nota in notas){
        sum += nota
    }
    return sum / notas.length
}