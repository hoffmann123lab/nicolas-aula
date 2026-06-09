// let frutas = ["Maçã", "Uva", "Pêra"]

// console.log(frutas, frutas.length)

// let alunos = [
//     {
//         id: 1,
//         nome: "murilo",
//         sobrenome: "chaves"
//     },
//     {
//         id: 2,
//         nome:"vinicius",
//         sobrenome: "lima"
//     },
//     {
//         id: 3,
//         nome: "Davi",
//         sobrenome: "Ferrari"
//     }   
// ]

// const inf = alunos.map(alunos => `${alunos.id}"-"${alunos.nome} ${alunos.sobrenome}`)


// console.log(inf, alunos.length)


// function soma(n1, n2){
//     return n1 + n2
// }

// console.log(soma(10,20))
// console.log(soma(50,30))
function exibirNome(){
    let nome = document.querySelector('#nome').value
    alert(nome)
}

function somar(){
    let valA = Number(document.querySelector('#valorA').value)
    let valB = Number(document.querySelector('#valorB').value)
    alert(valA + valB)
}

function subtrair(){
    let valA = Number(document.querySelector('#valorA').value)
    let valB = Number(document.querySelector('#valorB').value)
    alert(valA - valB)
}

function multiplicar(){
    let valA = Number(document.querySelector('#valorA').value)
    let valB = Number(document.querySelector('#valorB').value)
    alert(valA * valB)
}

function dividir(){
    let valA = document.querySelector('#valorA')
    let valB = document.querySelector('#valorB')
    let num1 = Number(valA.value)
    let num2 = Number(valB.value)
    if(num1 == 0 || num2 == 0){
        alert("Voce é gay")
    }
    else{
        alert(num1 / num2)
    }
    valA.value = ""
    valB.value = ""
}