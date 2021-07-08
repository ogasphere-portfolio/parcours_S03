/* === Exo3 ===
 *
 * 1. 2 nombres ont été générés automatiquement (firstNumber & secondNumber)
 * 2. Comparer les 2 nombres afin de déterminer si le premier est plus grand, plus petit ou égal au deuxième
 * 3. Stocker le résultat dans une variable "result", avec les valeurs "plus", "minus" ou "equal"
 * 4. Rafraichir la page plusieurs fois afin d'avoir un YEAH pour chacun des 3 cas
 */

// 2 nombres ont été générés automatiquement (firstNumber & secondNumber)
const firstNumber = helper.randomInt(1, 8);
console.log(firstNumber);
const secondNumber = helper.randomInt(2, 7);
console.log(secondNumber);


if (firstNumber > secondNumber) {
  // instructions si condition 1 vérifiée
  result = "plus";
} else if (firstNumber < secondNumber) {
  // instructions si condition 1 non vérifiée, et condition 2 vérifiée
  result = "minus";
} else {
  // instructions si aucune condition vérifiée
  result = "equal";
}

// exo 1,2 et 3 terminé 25 mn