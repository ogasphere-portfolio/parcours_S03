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
  init: function() {
    console.log('exo7.init');
    console.log(exo7.firstNumber);
    console.log(exo7.secondNumber);

    // TODO
  }
}

document.addEventListener('DOMContentLoaded', exo7.init);


