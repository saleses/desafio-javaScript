// Intensivão: desafio JavaScript
// Exercícios:

// 1. Mensagem Hello World
alert("Hello World")


// 2. Soma entre dois números
let number1 = prompt("Digite o primeiro número:");
let number2 = prompt("Digite o segundo número:");

let sum = (Number(number1) + Number(number2));
alert(`${number1} + ${number2} = ${sum}`);


// 3. Verifica se variável é do tipo número
const verifyNumber = prompt("Digite um dado:")

if(isNaN(verifyNumber)) {
    alert("Não é um número")
} else {
    alert("É um número")
}


// 4. Verifica se variável é do tipo string
const numString = prompt("Digite um dado:");

if(isNaN(numString)) {
    alert("É uma string")
} else {
    alert("Não é uma string")
}


// 5. Verifica se o valor é booleano
const isBool = true;

if(typeof(isBool) === 'boolean'){
    console.log("É booleano")
} else {
    console.log("Não é booleano")
}


// 6. Subtração de dois valores de entrada
const firstNumber = prompt("Digite o primeiro número:")
const secondNumber = prompt("Digite o segundo número:")

let sumNumbers = (Number(firstNumber) - Number(secondNumber))

console.log(`Subtração: ${firstNumber} - ${secondNumber} = ${sumNumbers}`)


// 7. Multiplicação entre dois valores
let multNumber1 = prompt("Digite o primeiro valor:")
let multNumber2 = prompt("Digite o segundo valor:")

const multNumbers = (Number(multNumber1) * Number(multNumber2))

console.log(`Multiplicação: ${multNumber1} * ${multNumber2} = ${multNumbers}`)


// 8. Divisão entre dois valores
const divNumber1 = prompt("Digite o maior valor:")
const divNumber2 = prompt("Digite o menor valor:")

const divNumbers = (Number(divNumber1) / Number(divNumber2))

console.log(`Divisão: ${divNumber1} / ${divNumber2} = ${divNumbers}`)


// 9. Verifica se número é par ou ímpar
const isPair = prompt("Digite um número:")

const verifyPair = (Number(isPair) % 2)

if(verifyPair == 0) {
    alert(`O número ${isPair} é par`)
} else {
    alert(`O número ${isPair} não é par`)
}


// 10. Verifica se número é ímpar
const isOdd = prompt("Digite um número:")

const verifyOdd = (Number(isOdd) % 2)

if(verifyOdd != 0) {
    alert(`O número ${isOdd} é ímpar`)
} else {
    alert(`O número ${isOdd} não é ímpar`)
}
