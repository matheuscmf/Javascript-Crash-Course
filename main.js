// Declaração de Logs
console.log('Hello World!')
// Variáveis
const idadeM = 25
console.log(idadeM)

const salario = 100000
console.log(salario)

// Tipos de dados (String, Number, Boolean, Undefined, Null, BigInt, Symbol, Object, Arrays)
const nome = 'Matheus' //String

const idade = 28 //Number

const estaEstudando = true //Boolean

let result = undefined //Undefined

const nulo = null //Null

// const BigInt = BigInt(9007199254740991) //BigInt

const simbolo = Symbol('nome') //Symbol, geralmente usada para adicionar unique property keys para um object

const objeto = {   //Object
  nome: 'Matheus',
  idade: 28,
  estaEstudando: true
}
console.log(objeto.nome)

const numeros = [0,1,2,3,4,5] //Arrays
console.log(numeros[3])

// Operadores (Atribuição,Aritméticos,Comparativos,Lógicos,Concatenação,Ternário,etc)



let x = 20 // Operadores de Atribuição
let y = 10

console.log(x + y) // Operadores Aritméticos
console.log(x--) 

console.log(x==y) // Operadores Comparativos
console.log(x===y)

const numeroValido = x > 8 && 8 < y // Operadores Lógicos
console.log(numeroValido)

console.log('Matheus'+ ' é um rapaz dedicado') //Operador de concatenação

const Par = 10%2 === 0 ? true : false
console.log(Par)

// Conversões de Tipo (Implícito e Explícito)

console.log('3' + 2) // Implícito
console.log(true + 3)
console.log('7' - null)
console.log(9 + undefined)

console.log(Number(false))  //Explícito
console.log((500).toString())
console.log(parseInt('3.14'))
console.log(Boolean(15)) // null, undefined, 0 '' Nan   (sempre retornam false quando convertidos)

// Igualdade 

const var1 = 15
const var2 = '15'

console.log(var1 == var2) // Há conversão e depois comparação dos tipos
console.log(var1 === var2) // Mais estrito sem conversão dos tipos

// Declarações de condição (conditional statements if, else, else if, switch)

const num = 5 

if(num > 0){                            //if
  console.log('O Número é Positivo')
} else if(num < 0){                     //else if
  console.log('O Número é Negativo')
}else{
  console.log('O Número é Negativo')    //else
}

const cor = 'azul'
switch(cor){                        //switch
  case 'azul':
    console.log('A cor é azul')
    break
  case 'preto':
    console.log('A cor é preto')
    break
  case 'vermelho':
    console.log('A cor é vermelho')
    break
  default:
    console.log('Não é uma cor')
    break      
}

// Laços de Repetição (for,while,do..while,for..of)

for(let i = 1; i<= 5; i++){                 //for
  console.log('Número da iteração ' + i)

}
{
let i = 1    // while
while(i <= 5){
  console.log('Número da iteração ' + i)
  i++
}} // outra chave adicionada para evitar repetição de variável 'i' no escopo dos blocos.

let i = 1  // do while (executa o código ao menos uma vez)
do{
  console.log('Número da iteração ' + i)
  i++
}while(i <= 5)

const numArray = [0,1,2,3,4,5,6,7,8,9]

for(const num of numArray){  //for..of
  console.log('Número da iteração ' + num)
}

// Funções 

function bomDia(nome){
  console.log('Bom dia ' + nome + '!')
}
bomDia('Matheus')
bomDia('Maria')
bomDia('Eunice')

const arrowSum = (a,b) => {  //Função anonima(Arrow Function)
  return a + b  // Se só tiver as chaves e o return, você pode omiti-los.
}
console.log(arrowSum(2,3))

// Escopo (bloco,função e global)

// bloco: variáveis declaradas dentro de um par de chaves não podem ser chamadas fora do escopo delas
if(true) {          //Exemplo: 
  let meuNome = 'Matheus'
  console.log(meuNome) // fora do bloco não funcionaria

}  
//função:variáveis declaradas dentro de uma função não podem ser chamadas fora do escopo dela
function testFn(){ //Exemplo:
  let meuNome = 'Marques'
  console.log(meuNome) // fora da função não funcionaria
} 
testFn()
//global: variáveis declaradas no escopo global são acessíveis dentro e fora dos blocos ou funções

const meuNumero = 100 //variável global, conseguirá ser acessada em todo o código caso chamada.
console.log(meuNumero)