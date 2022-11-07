//Faça um programa que leia um número inteiro positivo N (máximo = 10) e depois N números inteiros
//e armazene-os em um vetor. Em seguida, mostrar na tela todos os números negativos lidos.

let number = parseInt(prompt("How many numbers you will type?"))
const vector = []
for(let i = 0; i<number; i++) {
vector[i] = parseInt(prompt("Type a number"));
}
console.log("NEGATIVE NUMBERS:")
for(let i = 0; i < number; i++) {
    if (vector[i] < 0) {
     console.log(vector[i]);
    }
}