/*
Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.

Se è una stringa: stampala in maiuscolo

Se è un numero: moltiplicalo per due e stampalo

Se è un booleano: stampa “Sì” o “No” in base al suo valore

In tutti gli altri casi: stampa “Tipo non supportato”
*/

let dato: unknown = [2, 4];

if (typeof dato === 'string') {
  console.log(dato.toUpperCase());
} else if (typeof dato === 'number') {
  console.log(dato * 2);
} else if (typeof dato === 'boolean') {
  console.log(dato ? 'Sì' : 'No');
} else if (dato === null) {
  console.log('Il dato è vuoto');
} else if (Array.isArray(dato)) {
  console.log(dato.length);
}
else {
  console.log('Tipo non supportato!');
}
