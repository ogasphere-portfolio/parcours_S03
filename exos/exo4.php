<?php include 'inc/header.tpl.php'; ?>

        <div id="epreuve">
			<div class="summary">
				<h2>Gardons la "form"</h2>
				<p>
					Dans un form, on peut avoir des input, des select, des textarea, etc.<br>
					C'est donc le moment de récupérer le contenu d'un champ de saisie... pour l'ajouter à la page !
				</p>
				<ol>
					<li>Voici un formulaire avec un unique champ input. Il est automatiquement rempli au chargement de la page</li>
					<li>Récupérer la valeur de cet input et la stocker dans une variable "inputContent"</li>
					<li>Ajouter le prénom récupéré et l'insérer dans la fiche personnage au bon endroit</li>
				</ol>
			</div>
		</div>
		
		<section id="test">

			<form id="gardons-la-form">
				<label for="fname">Prénom</label>
				<input type="text" name="firstname" id="fname" value="">
			</form>

			<div id="result"></div>

			<div class="fiche-personnage">
				<div class="avatar"></div>
				<div class="infos">
					<h2>Fiche personnage</h2>
					<div id="prenom">
						<span class="label bold">Prénom : </span>
					</div>
					<div id="nom">
						<span class="label bold">Nom : </span>
						<span class="valeur-fiche">Bichon</span>
					</div>
					<div id="age">
						<span class="label bold">Age : </span>
						<span class="valeur-fiche">42 ans</span>
					</div>

				</div>
			</div>

		</section>

<?php
includeExoJsFile(4);
include 'inc/footer.tpl.php';
