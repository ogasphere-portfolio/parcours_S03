/* === Exo7 ===
 *
 * 1. 2 nombres ont été générés automatiquement (dans les propriétés firstNumber & secondNumber)
 * 2. Afficher ces 2 nombres dans les span correspondants dans la page
 * 3. Dans le formulaire, on demande à l'internaute de nous donner son calcul de la médiane arrondie à l'entier le plus proche
 * 4. Une fois le formulaire soumis,
 *   - on calcule en JavaScript la médiane arrondie à l'entier le plus proche
 *   - on affiche dans la <div id="result"> le résultat calculé en JavaScript
 *   - on récupère la valeur saisie (attention au type)
 *   - on compare la valeur saisie avec le résultat calculé en JS
 *      - si c'est égal
 *          - ajouter dans <div id="result"> le texte "Génial, Bravo !"
 *          - ajouter la classe "success" sur la <section id="test">
 *      - si l'écart est de 1
 *          - ajouter dans <div id="result"> le texte "arf, tu y étais presque..."
 *          - ajouter la classe "notice" sur la <section id="test">
 *      - si l'écart est de 2 ou 3
 *          - ajouter dans <div id="result"> le texte "va falloir retravailler tout ça"
 *          - ajouter la classe "warning" sur la <section id="test">
 *      - si l'écart est de 4 ou plus
 *          - ajouter dans <div id="result"> le texte "t'es sérieux là !?"
 *          - ajouter la classe "error" sur la <section id="test">
 */

// Attention, ici, le nom du module est "exo7" (et pas app, comme d'habitude, car c'est déjà pris ;))
const exo7 = {
  // 2 nombres ont été générés automatiquement (dans les propriétés firstNumber & secondNumber)
  firstNumber: helper.randomInt(1, 100),
  secondNumber: helper.randomInt(1, 100),
  init: function () {
    // on branche un mouchard sur le submit
    window.addEventListener("submit", exo7.handlesubmit);

    // On appele la fonction permettant d'afficher les deux nombres
    exo7.dysplayNumber();
  },

  handlesubmit: function (event) {
    // on empeche le rafraichissement de la page
    event.preventDefault();

    // Calcul et affichage de la médiane
    const resultMediane = exo7.dysplayMediane();

    exo7.compare(resultMediane);
  },

  // on compare la valeur saisie avec le résultat calculé en JS
  compare: function (resultMediane) {
    const myResponse = exo7.getResponse();

    // on calcule l'ecart entre la valeur calculé par js
    // et la réponse de l'utilisateur
    const ecart = Math.abs(resultMediane - myResponse);

    // on Affiche les résultats
    exo7.dysplayEcart(ecart);
  },

  dysplayEcart: function (myEcart) {
    
    const dysplayResult = document.querySelector('#result');
    const classResult = document.querySelector('#test');
    
    // on supprime toutes les classes
    classResult.className='';
    
    if (myEcart == 0) {
      // ajouter dans <div id="result"> le texte "Génial, Bravo !"
      // ajouter la classe "success" sur la <section id="test">
      dysplayResult.textContent='Génial, Bravo !'
      classResult.classList.add("success")

      } else if (myEcart == 1) {
        // ajouter dans <div id="result"> le texte "arf, tu y étais presque..."
        // ajouter la classe "notice" sur la <section id="test">
        dysplayResult.textContent='arf, tu y étais presque...'
        classResult.classList.add("notice")
      }else if (myEcart == 2 || myEcart == 3) {
        // ajouter dans <div id="result"> le texte "va falloir retravailler tout ça"
        // ajouter la classe "warning" sur la <section id="test">
        dysplayResult.textContent='va falloir retravailler tout ça'
        classResult.classList.add("warning")
        
      }else if (myEcart => 4) {
        // ajouter dans <div id="result"> le texte "t'es sérieux là !?"
        // ajouter la classe "error" sur la <section id="test"> */
        dysplayResult.textContent='t\'es sérieux là !?'
        classResult.classList.add("error")
      }
    
  },

  getResponse: function () {
    // on recupere le contenu de la réponse
    const myResponse = document.querySelector("#response").value;
    if (!exo7.checkResponse(myResponse)) {
      alert("La valeur saisie n'est pas valide");
    } else {
      return myResponse;
    }
  },

  dysplayNumber: function () {
    // on affiche les deux nombres dans le span correespondant
    const number1 = document.querySelector("#number1");
    const number2 = document.querySelector("#number2");
console.log(exo7.firstNumber);
    number1.textContent = exo7.firstNumber;
    number2.textContent = exo7.secondNumber;
  },

  dysplayMediane: function () {
    // on calcule la mediane
    const mediane = exo7.calculMedian(exo7.firstNumber, exo7.secondNumber);

    // On affiche la médiane
    const resultat = document.querySelector("#result");
    resultat.textContent = mediane.toString();

    return mediane;
  },

  calculMedian: function (number1, number2) {
    const mediane = Math.round((number1 + number2) / 2);
    return mediane;
  },

  checkResponse: function (params) {
    // todo
    // controler la validité de la sssie par l'utilisateur

    return true;
  },
};

exo7.init();
// Exo 7 terminé 1h20mn  cumul : 2h57 ouff
