<?php include 'inc/header.tpl.php'; ?>

        <div id="epreuve">
			<div class="summary">
				<h2>Arrondissons</h2>
				<p>Comment avoir l'entier le plus proche d'un nombre à virgule ?</p>
				<ol>
					<li>1 nombre à virgule aléatoire a été généré automatiquement (floatNumber)</li>
					<li>Arrondir ce nombre à l'entier le plus proche</li>
					<li>Stocker l'arrondi dans une variable "roundedInt"</li>
				</ol>
			</div>
		</div>
		<section id="test">


			<div id="result"></div>


		</section>

<?php
includeExoJsFile(2);
include 'inc/footer.tpl.php';
