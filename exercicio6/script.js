/* Ler dois números inteiros e exibir o quociente e o 
resto da divisão inteira entre eles.*/

let num1 = Number(prompt("Digite um número inteiro."));
let num2 = Number(prompt("Digite outro número inteiro."));

let divisao = Math.floor(num1 / num2);
let restoDiv = num1 % num2;


alert("O quociente da divisão entre o 1° e o 2° número é " + divisao + " e o resto é " + restoDiv);