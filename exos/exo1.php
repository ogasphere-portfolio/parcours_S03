<?php include 'inc/header.tpl.php'; ?>

        <div id="epreuve">
			<div class="summary">
				<h2>Médiane</h2>
				<p>Calcul d'une médiane, c'est facile... ou pas...</p>
				<ol>
					<li>2 nombres ont été générés automatiquement (firstNumber & secondNumber)</li>
					<li>Calculer la médiane de ces 2 nombres</li>
					<li>Quand il n'y a que 2 nombres, la médiane s'obtient en divisant par 2 la somme des 2 nombres</li>
					<li>Stocker le résultat dans une variable "median"</li>
				</ol>
			</div>
		</div>
		<section id="test">


			<div id="result"></div>


		</section>

<?php
includeExoJsFile(1);
include 'inc/footer.tpl.php';
