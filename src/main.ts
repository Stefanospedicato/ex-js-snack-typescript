/*
Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.

Se è una stringa: stampala in maiuscolo

Se è un numero: moltiplicalo per due e stampalo

Se è un booleano: stampa “Sì” o “No” in base al suo valore

In tutti gli altri casi: stampa “Tipo non supportato”
*/

let dato: unknown = '';

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

/*
Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:

nome → stringa
cognome → stringa
annoNascita → numero
sesso → Può essere solo "m" o "f".
anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018])
🎯 BONUS
Il type alias Dipendente, ha anche i seguenti dati:

emailAziendale → Email assegnata al dipendente (non si può modificare)
contratto → Specifica il tipo di contratto del dipendente, con valori limitati a “indeterminato”, “determinato” o “freelance”.
*/

type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: 'm' | 'f',
  anniDiServizio: number[],
  //emailAziendale: 'Email assegnata al dipendente',
  contratto: 'indeterminato' | 'determinato' | 'freelance'
}

const utente: Dipendente = {
  nome: 'Stefano',
  cognome: 'Spedicato',
  annoNascita: 1997,
  sesso: 'm',
  anniDiServizio: [2024, 2025],
  //emailAziendale: 'Email assegnata al dipendente' as const,
  contratto: 'indeterminato'
}

/*
Estendiamo Dipendente per definire due ruoli specifici all'interno dell'azienda:

Developer
livelloEsperienza → Il livello di esperienza del developer (le scelte possibili sono solo “Junior”, “Mid” o “Senior”).
linguaggi → Un array contenente i linguaggi di programmazione utilizzati dal developer in azienda (opzionale, perché i neo assunti non hanno ancora dei linguaggi assegnati).
certificazioni → Un array di stringhe contenente certificazioni tecniche ottenute dal developer (può essere vuoto).
ProjectManager
teamSize → Il numero di persone nel team gestito dal Project Manager (può essere null se non ha ancora un team assegnato).
budgetGestito → Il totale del budget annuale gestito dal PM (opzionale).
stakeholderPrincipali → Un array di stringhe con i nomi dei principali stakeholder con cui il PM collabora (può essere vuoto).
🎯 BONUS
Definiamo un nuovo type alias Team, che rappresenta un gruppo di lavoro all'interno dell'azienda:

nome → Nome del team (stringa).
progettoAttuale → Nome del progetto su cui lavora il team (può essere null se il team è in attesa di assegnazione).
budget → Importo numerico del budget assegnato al team (sempre presente).
membri → Una tuple in cui il primo elemento è sempre un Project Manager, seguito da uno o più Developers (almeno un developer obbligatorio).
*/

type Developer = Dipendente & {
  livelloEsperienza: 'Junior' | 'Mid' | 'Senior',
  linguaggi?: string[],
  certificazioni: string[],
}

type ProjectManager = Dipendente & {
  teamSize: number | null,
  budgetGestito?: number,
  stakeholderPrincipali: string[],
}

type Team = {
  nome: string,
  progettoAttuale: string | null,
  budget: number,
  membri: [ProjectManager, Developer, Developer[]?]
}

const fabrizio: ProjectManager = {
  nome: 'Stefano',
  cognome: 'Spedicato',
  annoNascita: 1997,
  sesso: 'm',
  anniDiServizio: [2024, 2025],
  //emailAziendale: 'Email assegnata al dipendente' as const,
  contratto: 'indeterminato',
  teamSize: 5,
  budgetGestito: 7000,
  stakeholderPrincipali: ['string[]'],
}

const mimmo: Developer = {
  nome: 'Stefano',
  cognome: 'Spedicato',
  annoNascita: 1997,
  sesso: 'm',
  anniDiServizio: [2024, 2025],
  //emailAziendale: 'Email assegnata al dipendente' as const,
  contratto: 'indeterminato',
  livelloEsperienza: 'Junior',
  certificazioni: ['Java'],
}

const cavalli: Team = {
  nome: 'i Cavalli',
  progettoAttuale: 'Nitrito',
  budget: 2000000,
  membri: [fabrizio, mimmo]
}

console.log(cavalli);
