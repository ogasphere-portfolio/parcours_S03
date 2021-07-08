<?php include 'inc/header.tpl.php'; ?>

        <div id="epreuve">
			<div class="summary">
				<h2>Tu sais calculer une médiane arrondie ?</h2>
				<p>
					Toi, on sait que tu sais.<br>
					Mais un internaute lambda, il sait ?<br>
					C'est ce qu'on va tester en créant une petite interface interactive...
				</p>
				<ol>
					<li><strong>Pas de YEAH / NOPE</strong> automatique dans cet exo, <strong>mais si votre code est fonctionnel, un YEAH/PRESQUE/NOPE</strong> devrait apparaître à chaque tentative de réponse</li>
					<li>C'est à toi de voir si tu as mis en place l'interface demandée</li>
					<li>Tous les détails de l'exo sont dans le fichier exo7.js</li>
				</ol>
			</div>
		</div>
		
		<section id="test">

			<div class="bold">Quelle est la médiane arrondie à l'entier le plus proche pour les nombres suivants ?</div>
			<p>
				<span id="number1">XX</span> et <span id="number2">XX</span>
			</p>

			<form id="rounded-median-form">
				<label for="response">Votre réponse</label>
				<input type="number" name="median" id="response" value="">
				<button>Valider</button>
			</form>

			<div id="result"></div>

		</section>

<?php
includeExoJsFile(7);
include 'inc/footer.tpl.php';
