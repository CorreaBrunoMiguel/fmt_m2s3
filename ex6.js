var nome = prompt("Qual seu nome?")
var materia = prompt("Informe a Matéria")

var count = 1;
var notas = []

while (count <= 4){
    let nota = prompt(`Informe a Nota ${count}:`)
    notas.push(parseFloat(nota))
    count++
}

let sum = 0
notas.map(
    num => sum += num
)
var media = (sum / notas.length).toFixed(2)

console.log(media)

let nomeEl = document.getElementById("aluno")
nomeEl.textContent = nome
let materiaEl = document.getElementById("materia")
materiaEl.textContent = materia
let mediaEl = document.getElementById("media")
mediaEl.textContent = media

var  notasEl = document.getElementsByClassName("notas")
for (let i = 0; i < notas.length; i++){
    notasEl[i].textContent = notas[i]
}


