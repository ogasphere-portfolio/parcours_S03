<?php include 'inc/header.tpl.php'; ?>

        <div id="epreuve">
			<div class="summary">
				<h2>Fourchette</h2>
				<p>
					Pour cet exo, on ne va <strong>pas</strong> coder un jeu. Par contre, on va coder un script qui va <strong>gagner</strong> à ce jeu !
				</p>
				<ol>
					<li><strong>Pas de YEAH / NOPE</strong> automatiques. Juste un YEAH une fois le nombre deviné</li>
					<li>Tous les détails de l'exo sont dans le fichier exo6.js</li>
				</ol>
			</div>
		</div>
		
		<section id="test">

			<div class="bold">Un nombre aléatoire entre 1 et 20 a été choisi, sauras-tu le retrouver ?</div>

			<div id="result"></div>

		</section>

<?php
includeExoJsFile(6);
include 'inc/footer.tpl.php';
