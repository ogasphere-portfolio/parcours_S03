const game = {
  secret: null,
  max: 20,
  min: 1,
  tries: 0,
  win: false,
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

    // Si le jeu est déjà fini, c'est qu'on l'a résolé sans "break" dans la boucle.
    if(game.win) {
      check.displayResult(true, 'Tu as trouvé le nombre "' + game.secret + '" en ' + game.tries + ' essai(s) <br> Tu tentes le bonus maintenant ?');
    }

    // On check les 3 cas de figures
    if (intGuess === game.secret) {
      // On marque le jeu comme terminé
      game.win = true;
      console.log('Gagné !');
      console.log('Félicitations, tu as trouvé le nombre "' + game.secret + '" en ' + game.tries + ' essai(s)');
      check.displayResult(true, 'Tu as trouvé le nombre "' + game.secret + '" en ' + game.tries + ' essai(s) <br> Avec le bonus en plus !  Bravo !');
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
