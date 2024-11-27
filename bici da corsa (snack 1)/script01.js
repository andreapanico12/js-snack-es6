/* Consegna:
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/

/*Logica:
  1) Creazione dell'array contenente 5 oggetti nel quale saranno definite due proprietà ognuno
  
  2) Definire la variabile biciclettaLeggera e assegnarle il valore della prima bicicletta. E definire come variabile l'elemento HTML con id=bicileggera

  3)Ciclare l'array di biciclette cofrontando il peso di ognuna con quella definita in precedenza. Qualora la proprietà peso di quella ciclata fosse minore di quella definita, il valore della variabile biciclettaLeggera cambierà con quella di peso minore.

  4) al termine del ciclo si andrà a stampare a schermo la bicicletta risultata più leggera definendo il contenuto dell'id=bicileggera.
*/

let biciTitle = document.getElementById("bicileggera");

const biciDaCorsa = [
  {
    nome: "bicicletta1",
    pesoInKg: 20
  },
  {
    nome: "bicicletta2",
    pesoInKg: 10
  },
  {
    nome: "bicicletta3",
    pesoInKg: 8
  },
  {
    nome: "bicicletta4",
    pesoInKg: 30
  },
  {
    nome: "bicicletta5",
    pesoInKg: 4
  },
  {
    nome: "bicicletta6",
    pesoInKg: 18
  }
];

console.log(biciDaCorsa)

let biciclettaLeggera = biciDaCorsa[0]

for (const biciclettaDaCorsa of biciDaCorsa ){
  if (biciclettaDaCorsa.pesoInKg < biciclettaLeggera.pesoInKg) {
    biciclettaLeggera = biciclettaDaCorsa;
  }
}
biciTitle.innerHTML = `${biciclettaLeggera.nome} con un peso di ${biciclettaLeggera.pesoInKg}kg`
