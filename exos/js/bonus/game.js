const game = {
  secret: null,
  max: 2000,
  min: 1,
  tries: 0,
  init: function() {
    // On génère un nombre aléatoire
    game.generateRandomSecret();

    // On remet le compteur à 0
    game.tries = 0;

    console.log('Un nombre aléatoire entre ' + game.min + ' et ' + game.max + ' vient d\'être généré');
    console.log('A toi d\'essayer de trouver le plus rapidement le nombre en question...');
    // console.log(game.secret);
  },
  generateRandomSecret: function() {
    game.secret = Math.floor(Math.random() * (game.max - game.min + 1)) + game.min;
  },
  guess: function(n) {
    // On incrémente le nombre d'essais
    game.tries++;

    // On convertit en number au cas où
    const intGuess = parseInt(n);

    if (isNaN(intGuess)) {
      console.log('La valeur fournie est incorrecte');
      return false;
    }

    // On check les 3 cas de figures
    if (intGuess === game.secret) {
      console.log('Gagné !');
      console.log('Félicitations, tu as trouvé le nombre "' + game.secret + '" en ' + game.tries + ' essai(s)');
      if (game.tries < game.secret || game.tries <= 20) {
        check.displayResult(true, 'Tu as trouvé le nombre "' + game.secret + '" en ' + game.tries + ' essai(s)');
        const div = document.createElement('div');
        div.innerHTML = '<br>Félicitations, tu viens de mettre en place une recherche dichotomique<br><a target="_blank" href="https://fr.wikipedia.org/wiki/Recherche_dichotomique">https://fr.wikipedia.org/wiki/Recherche_dichotomique</a>';
        document.getElementById('test').appendChild(div);
      } else {
        check.displayResult(false, 'Tu as trouvé le nombre "' + game.secret + '" en ' + game.tries + ' essai(s)<br><br>Par contre, le nombre d\'essais est trop important.<br>As-tu optimisé la recherche du nombre avec les indices fournis ?');
      }
      return 'win';
    } else if (intGuess > game.secret) {
      console.log(intGuess + ' ? => c\'est moins');
      return 'minus';
    } else if (intGuess < game.secret) {
      console.log(intGuess + ' ? => c\'est plus');
      return 'plus';
    }
  }
};
