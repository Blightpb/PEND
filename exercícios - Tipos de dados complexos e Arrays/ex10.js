let times = ["Flamengo", "Palmeiras", "São Paulo"];
let posicaoPalmeiras = times.indexOf("Palmeiras"); // Encontra a posição do "Palmeiras"

times.push("Corinthians"); // adiciona o corinthians no final
times.unshift("Grêmio"); // adiciona gremio no início
times.pop(); // tira o último time
times.reverse();

console.log(times); // Exibe os times invertidos
console.log(`Posição do Palmeiras: ${posicaoPalmeiras}`);
