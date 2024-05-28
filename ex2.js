let media; // Number

function estaAprovado(media){
    return media >= 7 
    ? document.write("Parabén você foi Aprovado") 
    : document.write("Infelizmente você pegou Recuperação")
}

let test1 = 7.8
let result1 = estaAprovado(test1)

let test2 = 6.0
let result2 = estaAprovado(test2)