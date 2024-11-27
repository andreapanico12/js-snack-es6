/*
Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/


/*
Logica:
1) Creare un array prova che servirà alla verifica del funzionamento della funzione.

2) la funzione prevede il ricevimento di tre parametri. Nello scope della funzione viene definito un array che sarà il return della stessa.

3) la logica della funzione dovrà prevedere un ciclo for la cui variabile i sarà uguale al numero più alto - 1 e la condizione del ciclo sarà la variabile maggiore del numero più basso. In questo modo i valori degli indici saranno compresi tra i due numeri dati.

4) Scorrendo così il ciclo dovrà pushare i valori all'interno dell'array vuoto.
*/


const arraynomi = ["alfredo", "giancarlo", "giovanni", "giordano", "bruno", "francesco"]

console.log(intervalloArray(arraynomi,0,5))



function intervalloArray (array,numA,numB){
  arrayIntervallo = [];
  for (let i = numB-1; i > numA; i--){
    arrayIntervallo.push(array[i]);
  }
  return arrayIntervallo
}
