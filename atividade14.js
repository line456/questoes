let nomes = [];

for (let i = 0; i < 10; i++) {
  nomes[i] = prompt("Digite o " + (i + 1) + "º nome:");
}

let resultado = "";

for (let i = 9; i >= 0; i--) {
  resultado += nomes[i] + "\n";
}

alert("Nomes em ordem inversa:\n" + resultado);