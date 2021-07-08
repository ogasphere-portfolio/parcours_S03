<?php include 'inc/header.tpl.php'; ?>

        <div id="epreuve">
			<div class="summary">
				<h2>Médiane 2, le retour !</h2>
				<p>
					On a déjà calculé la médiane précédemment. Mais le code n'était pas réutilisable !<br>
					Maintenant, on va créer une fonction qui calcule la médiane entre deux nombres donnés en argument !
				</p>
				<ol>
					<li>Créer une fonction appelée <strong>calculateMedian</strong></li>
					<li>Cette fonction doit <strong>recevoir</strong> deux nombres et <strong>renvoyer</strong> leur médiane</li>
					<li>BONUS :  avant de faire le calcul, vérifier qu'on a bien reçu des nombres. Si non, renvoyer <strong>false</strong></li>
				</ol>
			</div>
		</div>
		
		<section id="test">

			<div id="result"></div>

		</section>

<?php
includeExoJsFile(5);
include 'inc/footer.tpl.php';
