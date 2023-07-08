const wordBank = [
    // #region GREETINGS
  { word: 'hola', translations: ['hello'], category: 'greetings' },
  { word: 'amigo', translations: ['friend'], category: 'greetings' },
  { word: 'caliente', translations: ['hot'], category: 'adjectives' },
  { word: 'buenos días', translations: ['good morning'], category: 'greetings' },
  { word: 'adiós', translations: ['goodbye'], category: 'greetings' },
  { word: 'gracias', translations: ['thank you'], category: 'greetings' },
  { word: 'señor', translations: ['mister'], category: 'greetings' },
  { word: 'señora', translations: ['missus'], category: 'greetings' },
  // #endregion 
  //#region PLACES
  { word: 'restaurante', translations: ['restaurant'], category: 'places' },
  { word: 'parque', translations: ['park'], category: 'places' },
  { word: 'playa', translations: ['beach'], category: 'places' },
  { word: 'museo', translations: ['museum'], category: 'places' },
  { word: 'biblioteca', translations: ['library'], category: 'places' },
  { word: 'teatro', translations: ['theater'], category: 'places' },
  { word: 'cine', translations: ['cinema'], category: 'places' },
  { word: 'supermercado', translations: ['supermarket'], category: 'places' },
  { word: 'estadio', translations: ['stadium'], category: 'places' },
  { word: 'hotel', translations: ['hotel'], category: 'places' },
  { word: 'estación de tren', translations: ['train station'], category: 'places' },
  { word: 'aeropuerto', translations: ['airport'], category: 'places' },
  { word: 'hospital', translations: ['hospital'], category: 'places' },
  { word: 'escuela', translations: ['school'], category: 'places' },
  { word: 'universidad', translations: ['university'], category: 'places' },
  { word: 'iglesia', translations: ['church'], category: 'places' },
  { word: 'mezquita', translations: ['mosque'], category: 'places' },
  { word: 'sinagoga', translations: ['synagogue'], category: 'places' },
  { word: 'templo', translations: ['temple'], category: 'places' },
  { word: 'catedral', translations: ['cathedral'], category: 'places' },
  { word: 'ayuntamiento', translations: ['town hall'], category: 'places' },
  { word: 'plaza', translations: ['square'], category: 'places' },
 // #endregion
  // #region OFFICE
  { word: 'oficina', translations: ['office'], category: 'office' },
  { word: 'reunión', translations: ['meeting'], category: 'office' },
  { word: 'trabajo', translations: ['work'], category: 'office' },
  { word: 'jefe', translations: ['boss'], category: 'office' },
    // #endregion 
  // #region FAMILY
  { word: 'familia', translations: ['family'], category: 'family' },
  { word: 'padre', translations: ['father'], category: 'family' },
  { word: 'madre', translations: ['mother'], category: 'family' },
  { word: 'hijo', translations: ['son'], category: 'family' },
  { word: 'hija', translations: ['daughter'], category: 'family' },
  { word: 'hermano', translations: ['brother'], category: 'family' },
  { word: 'hermana', translations: ['sister'], category: 'family' },
    // #endregion 
  // #region COLORS
  { word: 'rojo', translations: ['red'], category: 'colors' },
  { word: 'azul', translations: ['blue'], category: 'colors' },
  { word: 'verde', translations: ['green'], category: 'colors' },
  { word: 'amarillo', translations: ['yellow'], category: 'colors' },
  { word: 'negro', translations: ['black'], category: 'colors' },
  { word: 'blanco', translations: ['white'], category: 'colors' },

    // #endregion 
    // #region BODY PARTS
  { word: 'cabeza', translations: ['head'], category: 'body parts' },
  { word: 'brazo', translations: ['arm'], category: 'body parts' },
  { word: 'pierna', translations: ['leg'], category: 'body parts' },
  { word: 'ojo', translations: ['eye'], category: 'body parts' },
  { word: 'nariz', translations: ['nose'], category: 'body parts' },
  { word: 'oreja', translations: ['ear'], category: 'body parts' },
    // #endregion 
    // #region ANIMALS
  { word: 'gato', translations: ['cat'], category: 'animals' },
  { word: 'perro', translations: ['dog'], category: 'animals' },
  { word: 'pájaro', translations: ['bird'], category: 'animals' },
  { word: 'elefante', translations: ['elephant'], category: 'animals' },
  { word: 'tigre', translations: ['tiger'], category: 'animals' },
  { word: 'jirafa', translations: ['giraffe'], category: 'animals' },
  { word: 'serpiente', translations: ['snake'], category: 'animals' },
  { word: 'oso', translations: ['bear'], category: 'animals' },
  { word: 'conejo', translations: ['rabbit'], category: 'animals' },
  { word: 'león', translations: ['lion'], category: 'animals' },
    // #endregion 
    // #region ADJECTIVES
  { word: 'feliz', translations: ['happy'], category: 'adjectives' },
  { word: 'triste', translations: ['sad'], category: 'adjectives' },
  { word: 'grande', translations: ['big'], category: 'adjectives' },
  { word: 'pequeño', translations: ['small'], category: 'adjectives' },
  { word: 'rápido', translations: ['fast'], category: 'adjectives' },
  { word: 'lento', translations: ['slow'], category: 'adjectives' },
    // #endregion 
    // #region TRANSPORTATION
  { word: 'coche', translations: ['car'], category: 'transportation' },
  { word: 'bicicleta', translations: ['bicycle'], category: 'transportation' },
  { word: 'tren', translations: ['train'], category: 'transportation' },
  { word: 'barco', translations: ['boat'], category: 'transportation' },
  { word: 'avión', translations: ['airplane'], category: 'transportation' },
  { word: 'autobús', translations: ['bus'], category: 'transportation' },

    // #endregion 
    // #region SPORTS
  { word: 'deporte', translations: ['sport'], category: 'sports' },
  { word: 'fútbol', translations: ['soccer'], category: 'sports' },
  { word: 'baloncesto', translations: ['basketball'], category: 'sports' },
  { word: 'béisbol', translations: ['baseball'], category: 'sports' },
  { word: 'tenis', translations: ['tennis'], category: 'sports' },
  { word: 'natación', translations: ['swimming'], category: 'sports' },
  { word: 'ciclismo', translations: ['cycling'], category: 'sports' },
  { word: 'golf', translations: ['golf'], category: 'sports' },
  { word: 'voleibol', translations: ['volleyball'], category: 'sports' },
  { word: 'correr', translations: ['running'], category: 'sports' },
  { word: 'saltar', translations: ['jumping'], category: 'sports' },
  { word: 'escalada', translations: ['climbing'], category: 'sports' },
  { word: 'nadar', translations: ['swimming'], category: 'sports' },
  { word: 'equipo', translations: ['team'], category: 'sports' },
  { word: 'competencia', translations: ['competition'], category: 'sports' },
  { word: 'medalla', translations: ['medal'], category: 'sports' },
  { word: 'trofeo', translations: ['trophy'], category: 'sports' },
  { word: 'ganar', translations: ['to win'], category: 'sports' },
  { word: 'perder', translations: ['to lose'], category: 'sports' },
  { word: 'empate', translations: ['tie'], category: 'sports' },
  { word: 'entrenador', translations: ['coach'], category: 'sports' },
  { word: 'jugador', translations: ['player'], category: 'sports' },
  { word: 'campeonato', translations: ['championship'], category: 'sports' },
  { word: 'estadio', translations: ['stadium'], category: 'sports' },
  { word: 'aficionado', translations: ['fan'], category: 'sports' },
    // #endregion 
    // #region NATURE
  { word: 'arcoiris', translations: ['rainbow'], category: 'nature' },
  { word: 'isla', translations: ['island'], category: 'nature' },
  { word: 'desierto', translations: ['desert'], category: 'nature' },
  { word: 'cascada', translations: ['waterfall'], category: 'nature' },
  { word: 'lago', translations: ['lake'], category: 'nature' },
  { word: 'océano', translations: ['ocean'], category: 'nature' },
  { word: 'estrella', translations: ['star'], category: 'nature' },
  { word: 'mariposa', translations: ['butterfly'], category: 'nature' },
  { word: 'abeja', translations: ['bee'], category: 'nature' },
  { word: 'insecto', translations: ['insect'], category: 'nature' },
  { word: 'abeja', translations: ['bee'], category: 'nature' },
  { word: 'insecto', translations: ['insect'], category: 'nature' },
  { word: 'naturaleza', translations: ['nature'], category: 'nature' },
  { word: 'parque', translations: ['park'], category: 'nature' },
  { word: 'playa', translations: ['beach'], category: 'nature' },
  { word: 'río', translations: ['river'], category: 'nature' },
  { word: 'montaña', translations: ['mountain'], category: 'nature' },
  { word: 'bosque', translations: ['forest'], category: 'nature' },
  { word: 'flor', translations: ['flower'], category: 'nature' },
  { word: 'árbol', translations: ['tree'], category: 'nature' },
  { word: 'sol', translations: ['sun'], category: 'nature' },
  { word: 'lluvia', translations: ['rain'], category: 'nature' },
  { word: 'nieve', translations: ['snow'], category: 'nature' },
  // #endregion 
    // #region ANIMALS
  { word: 'ciervo', translations: ['deer'], category: 'animals' },
  { word: 'murciélago', translations: ['bat'], category: 'animals' },
  { word: 'tortuga', translations: ['turtle'], category: 'animals' },
  { word: 'serpiente', translations: ['snake'], category: 'animals' },
  { word: 'lagarto', translations: ['lizard'], category: 'animals' },
  { word: 'araña', translations: ['spider'], category: 'animals' },
  { word: 'pingüino', translations: ['penguin'], category: 'animals' },
  { word: 'delfín', translations: ['dolphin'], category: 'animals' },
  { word: 'tiburón', translations: ['shark'], category: 'animals' },
  { word: 'pulpo', translations: ['octopus'], category: 'animals' },
  { word: 'mariposa', translations: ['butterfly'], category: 'animals' },
  { word: 'flamenco', translations: ['flamingo'], category: 'animals' },
  { word: 'tigre', translations: ['tiger'], category: 'animals' },
  { word: 'jirafa', translations: ['giraffe'], category: 'animals' },
  { word: 'elefante', translations: ['elephant'], category: 'animals' },
  { word: 'rinoceronte', translations: ['rhinoceros'], category: 'animals' },
  { word: 'hipopótamo', translations: ['hippopotamus'], category: 'animals' },
  { word: 'cocodrilo', translations: ['crocodile'], category: 'animals' },
  { word: 'león', translations: ['lion'], category: 'animals' },
  { word: 'gacela', translations: ['gazelle'], category: 'animals' },
  { word: 'avestruz', translations: ['ostrich'], category: 'animals' },
  { word: 'cebra', translations: ['zebra'], category: 'animals' },

  // #endregion 
    // #region CLOTHING
  { word: 'sombrero', translations: ['hat'], category: 'clothing' },
  { word: 'guantes', translations: ['gloves'], category: 'clothing' },
  { word: 'bufanda', translations: ['scarf'], category: 'clothing' },
    { word: 'ropa', translations: ['clothing'], category: 'clothing' },
  { word: 'camisa', translations: ['shirt'], category: 'clothing' },
  { word: 'pantalón', translations: ['pants'], category: 'clothing' },
  { word: 'vestido', translations: ['dress'], category: 'clothing' },
  { word: 'zapatos', translations: ['shoes'], category: 'clothing' },
// #endregion
  // #region OBJECTS

  { word: 'paraguas', translations: ['umbrella'], category: 'objects' },
  { word: 'cámara', translations: ['camera'], category: 'objects' },
  { word: 'teléfono', translations: ['phone'], category: 'objects' },
  { word: 'computadora', translations: ['computer'], category: 'objects' },
  { word: 'libro', translations: ['book'], category: 'objects' },
  { word: 'bolígrafo', translations: ['pen'], category: 'objects' },
  { word: 'papel', translations: ['paper'], category: 'objects' },
  { word: 'lápiz', translations: ['pencil'], category: 'objects' },
  { word: 'cuaderno', translations: ['notebook'], category: 'objects' },
  { word: 'gafas', translations: ['glasses'], category: 'objects' },
  { word: 'reloj de pulsera', translations: ['wristwatch'], category: 'objects' },
  { word: 'llaves', translations: ['keys'], category: 'objects' },
  { word: 'bolsa', translations: ['bag'], category: 'objects' },
  { word: 'sombrero', translations: ['hat'], category: 'objects' },
  { word: 'bolsillo', translations: ['pocket'], category: 'objects' },
  { word: 'par de zapatos', translations: ['pair of shoes'], category: 'objects' },
  { word: 'tarjeta de crédito', translations: ['credit card'], category: 'objects' },
  { word: 'carta', translations: ['letter'], category: 'objects' },
  { word: 'llavero', translations: ['keychain'], category: 'objects' },
  { word: 'maleta', translations: ['suitcase'], category: 'objects' },
  { word: 'cepillo de dientes', translations: ['toothbrush'], category: 'objects' },
  { word: 'vaso', translations: ['glass'], category: 'objects' },
  { word: 'plato', translations: ['plate'], category: 'objects' },
  { word: 'tenedor', translations: ['fork'], category: 'objects' },
  { word: 'cuchillo', translations: ['knife'], category: 'objects' },
  { word: 'cuchara', translations: ['spoon'], category: 'objects' },
  { word: 'tenaza', translations: ['pliers'], category: 'objects' },
  { word: 'martillo', translations: ['hammer'], category: 'objects' },
  { word: 'tijeras', translations: ['scissors'], category: 'objects' },
  { word: 'cinta adhesiva', translations: ['tape'], category: 'objects' },
  { word: 'globo', translations: ['balloon'], category: 'objects' },
  { word: 'llave', translations: ['key'], category: 'objects' },
  { word: 'reloj', translations: ['clock'], category: 'objects' },
  // #endregion






];
const table = document.getElementById('wordTable');

wordBank.forEach((word) => {
  const row = table.insertRow();
  const cell = row.insertCell();
  cell.word = word.word;
  cell.dataset.translationIndex = 0;
  cell.currentTranslationIndex = 0;
  cell.displayMode = 'word';

  cell.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    this.classList.toggle('marked');
  });

  cell.addEventListener('click', function () {
    const translations = word.translations;
    const currentIndex = parseInt(this.dataset.translationIndex, 10);
    const nextIndex = (currentIndex + 1) % (translations.length + 1);
    this.innerText = nextIndex === translations.length ? word.word : translations[nextIndex];
    this.dataset.translationIndex = nextIndex;
    this.currentTranslationIndex = nextIndex;
  });

  cell.translations = word.translations;
});

function flipAllToEnglish() {
  const cells = document.querySelectorAll('td');
  cells.forEach((cell) => {
    cell.innerText = cell.word;
    cell.dataset.translationIndex = 0;
    cell.currentTranslationIndex = 0;
    cell.displayMode = 'word';
  });
}

function flipAllToSpanish() {
  const cells = document.querySelectorAll('td');
  cells.forEach((cell) => {
    const translations = cell.translations;
    const lastIndex = translations.length - 1;
    cell.innerText = translations[lastIndex];
    cell.dataset.translationIndex = lastIndex;
    cell.currentTranslationIndex = lastIndex;
    cell.displayMode = 'translation';
  });
}



function showAllWords() {
  displayWords(wordBank);
}

function displayWords(words) {
  const table = document.getElementById('wordTable');
  table.innerHTML = '';

  // Calculate the number of rows needed
  const numRows = Math.ceil(words.length / 12);

  // Loop through each row
  for (let i = 0; i < numRows; i++) {
    const row = table.insertRow();

    // Loop through each cell in the row
    for (let j = 0; j < 12; j++) {
      const index = i * 12 + j;
      if (index < words.length) {
        const word = words[index];
        const cell = row.insertCell();
        cell.word = word.word;
        cell.dataset.translationIndex = 0;
        cell.currentTranslationIndex = 0;
        cell.displayMode = 'word';

        cell.addEventListener('contextmenu', function (event) {
          event.preventDefault();
          this.classList.toggle('marked');
        });

        cell.addEventListener('click', function () {
          const translations = word.translations;
          const currentIndex = parseInt(this.dataset.translationIndex, 10);
          const nextIndex = (currentIndex + 1) % (translations.length + 1);
          this.innerText = nextIndex === translations.length ? word.word : translations[nextIndex];
          this.dataset.translationIndex = nextIndex;
          this.currentTranslationIndex = nextIndex;
        });

        cell.translations = word.translations;
      } else {
        // If there are no more words, create an empty cell
        const cell = row.insertCell();
        cell.classList.add('empty-cell');
      }
    }
  }

  flipAllToSpanish()
}

function toggleDisplay(mode) {
  const cells = document.querySelectorAll('td');
  cells.forEach((cell) => {
    if (mode === 'word') {
      cell.innerText = cell.word;
      cell.displayMode = 'word';
    } else if (mode === 'translation') {
      const translations = cell.translations;
      const currentIndex = parseInt(cell.dataset.translationIndex, 10);
      const nextIndex = (currentIndex + 1) % (translations.length + 1);
      cell.innerText = nextIndex === translations.length ? cell.word : translations[nextIndex];
      cell.dataset.translationIndex = nextIndex;
      cell.currentTranslationIndex = nextIndex;
      cell.displayMode = 'translation';
    }
  });
}

function filterWordsByCategory(category) {
  const filteredWords = wordBank.filter((word) => word.category === category);
  displayWords(filteredWords);

}

/////TRANSLATION GAME
// #region

// Array of English words
var englishWords = ["apple", "cat", "house", "book", "table"];

function getRandomWord() {
  // Get a random index from the array
  var randomIndex = Math.floor(Math.random() * englishWords.length);
  // Return the randomly selected word
  return englishWords[randomIndex];
}

function checkTranslation() {
  // Get the user's translation and the random word
  var userTranslation = document.getElementById("userTranslation").value;
  var englishWord = document.getElementById("englishWord").textContent;

  // Check if the user's translation matches the word bank's translation
  if (userTranslation.toLowerCase() === translateToSpanish(englishWord).toLowerCase()) {
    document.getElementById("result").textContent = "Correct!";
  } else {
    document.getElementById("result").textContent = "Incorrect. The correct translation is: " + translateToSpanish(englishWord);
  }

  // Clear the user's input
  document.getElementById("userTranslation").value = "";

  // Generate a new random word for the next round
  generateRandomWord();
}

function generateRandomWord() {
  // Get the element for displaying the English word
  var englishWordElement = document.getElementById("englishWord");
  
  // Get a random word
  var randomWord = getRandomWord();
  
  // Display the random word
  englishWordElement.textContent = randomWord;
}

function translateToSpanish(word) {
  // Perform the translation here using your translation logic
  // Return the translated word
  return word;
}

// Call the function to generate the first random word
generateRandomWord();



// #endregion


displayWords(wordBank)

