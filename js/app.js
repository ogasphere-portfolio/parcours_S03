var exos = [
  { nav: '#1', title: 'Exo #1', file: 'exo1.php' },
  { nav: '#2', title: 'Exo #2', file: 'exo2.php' },
  { nav: '#3', title: 'Exo #3', file: 'exo3.php' },
  { nav: '#4', title: 'Exo #4', file: 'exo4.php' },
  { nav: '#5', title: 'Exo #5', file: 'exo5.php' },
  { nav: '#6', title: 'Exo #6', file: 'exo6.php' },
  { nav: '#7', title: 'Exo #7', file: 'exo7.php' },
  { nav: '#bonus', title: 'Bonus', file: 'bonus.php' },
];

var app = {
  init: function() {
    var target = $('#nav');
    $('<a href="index.php">Home</a>').appendTo(target);

    $.each(exos, function(index) {
      var uri = 'exo' + (index + 1) + '.php';
      $('<a>', {
        href: exos[index].file || uri,
        text: exos[index].nav || 'Exo' + (index + 1),
      }).data('number', (index + 1)).appendTo(target);
      if ($('.exo').length) {
        var link = $('<a>', {
          href: exos[index].file || uri,
          class: 'lien-epreuve',
          text: exos[index].title || 'Lancer le test',
        });
        link.data('number', (index + 1));
        $('.exo').eq(index).append(link);
      }
    });

    // active
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/') + 1);
    $('#nav a').each(function(i, e) {
      var cur = $(e);
      var href = cur.attr('href').replace(/\?.*/, '');
      if (href === filename) cur.addClass('active');
    });
  }
};

var check = {
  exoNumber: 0,
  init: () => {
    const $activeLinkElement = $('#nav').find('a.active');
    check.exoNumber = parseInt($activeLinkElement.data('number'));

    if (check.exoNumber === 1) {
      check.exo1();
    } else if (check.exoNumber === 2) {
      check.exo2();
    } else if (check.exoNumber === 3) {
      check.exo3();
    } else if (check.exoNumber === 4) {
      check.exo4();
    } else if (check.exoNumber === 5) {
      check.exo5();
    }
  },
  exo1: () => {
    if (typeof median === 'undefined') {
      check.displayResult(false, 'La variable \'median\' n\'est pas déclarée');
      return false;
    } else if (helper.getMedian(firstNumber, secondNumber).toFixed(1) !== median.toFixed(1)) {
      check.displayResult(false, 'Les calculs sont pas bons Kévin !');
      return false;
    } else {
      check.displayResult(true);
      return true;
    }
  },
  exo2: () => {
    if (typeof roundedInt === 'undefined') {
      check.displayResult(false, 'La variable \'roundedInt\' n\'est pas déclarée');
      return false;
    } else if (helper.getRounded(floatNumber) !== roundedInt) {
      if (helper.getRounded(floatNumber) == roundedInt) {
        check.displayResult(false, 'On dirait bien que c\'est arrondi<br>Par contre, le type n\'est pas le bon');
      } else {
        check.displayResult(false, 'Les calculs sont pas bons Kévin !');
      }
      return false;
    } else {
      check.displayResult(true);
      return true;
    }
  },
  exo3: () => {
    if (typeof result === 'undefined') {
      check.displayResult(false, 'La variable \'result\' n\'est pas déclarée');
      return false;
    } else if (helper.compareNumbers(firstNumber, secondNumber) !== result) {
      check.displayResult(false);
      return false;
    } else {
      check.displayResult(true, helper.compareNumbers(firstNumber, secondNumber) + ' OK');
      return true;
    }
  },
  exo4: () => {
    if (typeof inputContent === 'undefined') {
      check.displayResult(false, 'La variable \'inputContent\' n\'est pas déclarée');
      return false;
    } else if (helper.getInput() !== inputContent) {
      check.displayResult(false, 'La valeur de la variable \'inputContent\' n\'est pas correcte');
      return false;
    } else {

      if ($('#prenom span').length < 2) {
        check.displayResult(false, 'La balise &lt;span&gt; n\'existe pas dans la page');
        return false;
      } else if ($('#prenom span.valeur-fiche').length === 0) {
        check.displayResult(false, 'La balise &lt;span&gt; n\'a pas la classe "valeur-fiche"');
        return false;
      } else if ($('#prenom span.valeur-fiche').text().trim() === '') {
        check.displayResult(false, 'La balise &lt;span&gt; n\'a pas de contenu');
        return false;
      } else if ($('#prenom span.valeur-fiche').text() !== helper.getInput()) {
        check.displayResult(false, 'La balise &lt;span&gt; n\'a pas le bon contenu ("' + helper.getInput() + '" attendu)');
        return false;
      } else {
        check.displayResult(true);
        return true;
      }
      
    }
  },
  exo5: () => {
    if (typeof calculateMedian === 'undefined') {
      check.displayResult(false, 'La fonction "calculateMedian" n\'existe pas');
      return false;
    } else if(calculateMedian(5,15) === undefined) {
      check.displayResult(false, 'La fonction "calculateMedian" ne <strong>renvoie</strong> aucun résultat.');
    } else if(calculateMedian(5,15) != 10 || calculateMedian(2,4) != 3 || calculateMedian(8,4) != 6 || calculateMedian(1,2) != 1.5) {
      check.displayResult(false, 'La fonction "calculateMedian" ne <strong>renvoie</strong> pas le bon résultat.');
    } else {
      if(calculateMedian('truc', 'machin') !== false) {
        check.displayResult(true, 'Pas mal ! On tente le bonus maintenant ?');
      } else {
        check.displayResult(true, "Avec le bonus ?! Bravo !");
      }
      return true;
    }
  },
  default: () => {
    var success = false;

    check.display(success);
  },
  display: (success) => {
    $('#test').removeClass().addClass(success ? 'success' : 'error');
  },
  displayResult: (good, text) => {
    if (good === true) {
      check.display(true);
    } else {
      check.display(false);
    }

    if (typeof text != 'undefined' && text !== '') {
      $('#result').html(text);
    }
  }
};

$(app.init);
$(check.init);
