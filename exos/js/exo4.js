/* === Exo4 ===
 *
 * Voici un formulaire avec un unique champ input. Au chargement de la page, ce champ est automatiquement rempli.
 * On veut récupérer ici le prénom inséré dans le champ et l'ajouter dans la fiche personnage sous le champ. Le tout en JavaScript !
 *
 * 1. Récupérer la valeur de cet input et la stocker dans une variable  appelée "inputContent"
 * 2. En JS, créer un nouvel élément <span> et remplir son contenu avec la valeur contenue dans "inputContent"
 * 3. Ajouter la classe "valeur-fiche" au nouvel élément <span> créé
 * 4. Ajouter l'élément <span> en tant qu'enfant de l'élément ayant l'ID "prenom" de la fiche personnage
 */

// TODO

// récuperation du prénom saisie
const inputContent = document.querySelector('#fname').value;

// on récupere l'element <div id="prenom"> 
const prenom = document.querySelector('#prenom');

// On crée un element span
let item = document.createElement('span');

// on modifie le contenu de la balise span
item.innerHTML = '<span class="valeur-fiche">'+inputContent+'</span>';

// on affiche la span dans le dom
prenom.appendChild(item);



// exo 4 terminé 20 mn