<?php include 'inc/header.tpl.php'; ?>

        <div id="epreuve">
			<div class="summary">
				<h2>Améliorer le script</h2>
				<p>
					Le script écrit à l'exo 6 est pas mal<br>
					Mais il n'est pas super efficace non ?<br>
					Il a besoin de combien d'essais ?<br>
					Et si le nombre était compris entre 1 et 2 000 ?
				</p>
				<ol>
					<li><strong>Pas de YEAH / NOPE</strong> automatiques. Juste un YEAH une fois le nombre deviné</li>
					<li>Tous les détails de l'exo sont dans le fichier bonus.js</li>
				</ol>
			</div>
		</div>
		
		<section id="test">

			<div class="bold">Un nombre aléatoire entre 1 et 2 000 a été choisi, sauras-tu le retrouver ?</div>

			<div id="result"></div>

		</section>

<?php
includeExoJsFile(8);
include 'inc/footer.tpl.php';
