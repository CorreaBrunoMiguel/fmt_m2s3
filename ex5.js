var nome = prompt("Qual o seu nome?")

var idade = prompt("Qual a sua idade?")

var serie = prompt("Qual a sua série?")

var escola = prompt("Qual o nome da sua escola?")

var materiaFavorita = prompt("Qual a sua matéria favorita?")

var confirm = window.confirm("Enviar as respostas?")

var datas = [nome, idade, serie, escola, materiaFavorita]

if (confirm) {
    listarDados()
} else {
    document.write("Os dados não foram enviados!")
}

function listarDados(){
    let spans = document.getElementsByClassName("data")
    for (let i = 0; i < spans.length; i++){
        spans[i].textContent = datas[i]
    }
}