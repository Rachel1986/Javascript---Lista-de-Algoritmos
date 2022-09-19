/*Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 (F – 32), ler um
valor de temperatura em Fahrenheit e exibi-lo em Celsius.*/

let tempFahrenheit = Number(prompt("Digite a temperatura em Fahrenheit."));
let tempCelsius = (tempFahrenheit - 32) / 1.8;

alert("A temperatura de Fahrenheit para Celsius é " + tempCelsius.toFixed(2));
