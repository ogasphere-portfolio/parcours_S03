<?php include 'inc/header.tpl.php'; ?>

        <div id="epreuve">
			<div class="summary">
				<h2>Sisinonsisinons</h2>
				<p>
					&Ccedil;a ne veut rien dire, mais c'est marrant<br>
					Enfin, à <strong>condition</strong> de comprendre la subtilité
				</p>
				<ol>
					<li>2 nombres ont été générés automatiquement (firstNumber & secondNumber)</li>
					<li>Comparer les 2 nombres afin de déterminer si le premier est plus grand, plus petit ou égal au deuxième</li>
					<li>Stocker le résultat dans une variable "result", avec les valeurs "plus", "minus" ou "equal"</li>
					<li>Rafraichir la page plusieurs fois afin d'avoir un YEAH pour chacun des 3 cas</li>
				</ol>
			</div>
		</div>
		<section id="test">


			<div id="result"></div>


		</section>

<?php
includeExoJsFile(3);
include 'inc/footer.tpl.php';
