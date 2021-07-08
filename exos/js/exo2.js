/* === Exo2 ===
 *
 * 1. 1 nombre à virgule aléatoire a été généré automatiquement (floatNumber)
 * 2. Arrondir ce nombre à l'entier le plus proche
 * 3. Stocker l'arrondi dans une variable "roundedInt"
 */

// 1 nombre à virgule aléatoire a été généré automatiquement (floatNumber)

const floatNumber = helper.randomInt(1001, 1000000) / 1000;
console.log(floatNumber);

let roundedInt = Math.round(floatNumber);