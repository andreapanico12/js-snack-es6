/*
Snack2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

/* Logica:
1) Definire l'array contenente le squadre con le proprietà richieste per ciascuna.

2) Creare una funzione che generi un numero random in funzione di due parametri

3) Ciclare l'array delle squadre per sostituire le proprietà punti e falli con la funzione che genera il numero random e stampo l'array.

4) Definire un nuovo array vuoto per le squadre con solo nomi e falli.

5)Ciclare nuovamente l'array delle squadre per poter pushare le squadre con solo le proprietà del nome e dei falli nell'altro array e stamparlo.
*/


const nazionaliBocciofila = [
  {
    nome: "Italia",
    puntiFatti: "0",
    falliSubiti: "0"
  },
  {
    nome: "Francia",
    puntiFatti: "0",
    falliSubiti: "0"
  },
  {
    nome: "Germania",
    puntiFatti: "0",
    falliSubiti: "0"
  },
  {
    nome: "Russia",
    puntiFatti: "0",
    falliSubiti: "0"
  },
  {
    nome: "Scozia",
    puntiFatti: "0",
    falliSubiti: "0"
  },
  {
    nome: "Spagna",
    puntiFatti: "0",
    falliSubiti: "0"
  },
];
const nazionaliNomiFalli = [];



for (const nazionale of nazionaliBocciofila){
  nazionale.puntiFatti = generatoreRandom(10,50);
  nazionale.falliSubiti = generatoreRandom(5,20);
}

console.log(nazionaliBocciofila)


for (const nazionale of nazionaliBocciofila){
  nazionaliNomiFalli.push({
    nome: nazionale.nome,
    falliSubiti: nazionale.falliSubiti
  })
}

 console.log(nazionaliNomiFalli)







// Funzioni

function generatoreRandom (min, max){
  numeroRandom = Math.floor(Math.random() * (max - min) + min);
  return numeroRandom
}