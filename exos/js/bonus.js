/* === Bonus ===
 *
 * 1. Le jeu du plus petit ou plus grand est déjà mis en place (dans js/bonus/game.js)
 * 2. Il va falloir coder le script qui va deviner le nombre aléatoire généré par le jeu
 * 3. Ecrire un script qui va trouver le nombre (comme dans l'exo6), mais avec le moins d'essais possibles (faut dire qu'il y a 2000 possibilités...)
 *    - pour cela on va chercher à restreindre progressivement le nombre de possibilités
 *    - on commence obligatoirement par 2000 possibilités
 *    - on propose alors la médiane => 1000 ou 1001
 *    - si c'est plus
 *      - alors on n'a plus que 999 possibilités (de 1001 à 2000)
 *    - si c'est moins
 *      - alors on n'a plus que 999 possibilités (de 1 à 999)
 *    - si c'est égal
 *      - alors (on a beaucoup de chance) on a trouvé !
 *    - une fois restreint à 999 possibilités
 *      - on recommence et on propose à nouveau la médiane
 *      - on n'aura plus alors que 499 possibilités
 *    - et ainsi de suite jusqu'à tomber sur la bonne valeur
 *    - Habile non ?
 *
 * Tu peux partir du code de l'exo6, mais on te suggère de repartir de 0 ;)
 * Tu l'auras constaté, c'est pas facile. C'est de l'algo. Mais en même temps, c'est un bonus, c'est fait pour se casser la tête ^^
 */

// Attention, ici, le nom du module est "bonus" (et pas app, comme d'habitude, car c'est déjà pris ;))
const bonus = {
  init: function () {
    console.log("bonus.init");

    // On lance le jeu
    game.init();
    bonus.createArray();
    //bonus.play()
    // TODO
  },
  play: function () {
    if (game.guess(index) == "win") {
      // si le nombre à été trouvé on arrete la partie
      //break;
    } else {
      // Sinon on essaye un autre nombre
      game.guess(index);
    }
  },
  createArray: function () {
    let myListSort = [];
    for (let index = 0; index < 2000; index++) {
      myListSort.push(index + 1);
    }

    let result = bonus.searchDichotomiqueRécursive(game.secret, myListSort);
    console.log(result);
  },

  searchDichotomiqueRécursive: function (numberSecret, myListSort) {
    console.log("Nombre à trouvé" + numberSecret);

    let len = myListSort.length;

    console.log(len);
    let m = Math.round(len / 2);
    console.log(m);

    if (myListSort[m] == numberSecret) {
      console.log("result : " + m);
      return m;
    }

    if (myListSort[m] > numberSecret) {
      console.log("plus grand" + myListSort[m]);
      myListSort.length = 0;
      for (let index = 0; index < m - 1; index++) {
        myListSort.push(index + 1);
      }
      console.log("nouvelle longueur si plus grand" + myListSort.length);

      return bonus.searchDichotomiqueRécursive(numberSecret, myListSort);
    } else {
      console.log("plus petit" + myListSort[m]);

      myListSort.length = 0;
      for (let index = m + 1; index < len; index--) {
        myListSort.push(index);
      }
      console.log("nouvelle longueur si plus petit" + myListSort.length);

      return bonus.searchDichotomiqueRécursive(numberSecret, myListSort);
    }
  },
};

document.addEventListener("DOMContentLoaded", bonus.init);
