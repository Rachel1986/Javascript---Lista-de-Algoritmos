//Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.

let raio = Number(prompt("Digite o tamanho do raio de uma circunferência."));
let area = Math.PI * (raio * raio);
let perimetro = 2 * Math.PI * raio;

alert("A área dessa circunferência é " + area.toFixed(2) + " e o seu perímetro é " + perimetro.toFixed(2));
