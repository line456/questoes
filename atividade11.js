let numeros = [1,2,3,4,5]

let maior = numeros[0]
console.log ("começou: " + maior)
for (let c = 0; c < numeros.length;c++ ){
   if (maior < numeros [c]){
    maior = numeros[c]
   }
}
console.log ("terminou: " + maior)
