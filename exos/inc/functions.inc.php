<?php

function includeExoJsFile($exoNumber) {
    echo '<script src="' . getAbsoluteUrl() . 'js/helper.min.js"></script>' . PHP_EOL;
    if ($exoNumber === 4) {
        echo '<script>$("#fname").val(helper.getRandomName());</script>' . PHP_EOL;
    } else if ($exoNumber === 5) {
        echo '<script>const firstname = helper.getRandomName();</script>' . PHP_EOL;
    }
    if ($exoNumber === 8) {
        echo '<script src="' . getAbsoluteUrl() . 'exos/js/bonus.js"></script>' . PHP_EOL;
        echo '<script src="' . getAbsoluteUrl() . 'exos/js/bonus/game.js"></script>' . PHP_EOL;
    } else {
        echo '<script src="' . getAbsoluteUrl() . 'exos/js/exo' . $exoNumber . '.js"></script>' . PHP_EOL;
    }
    if ($exoNumber === 6) {
        echo '<script src="' . getAbsoluteUrl() . 'exos/js/exo6/game.js"></script>' . PHP_EOL;
    }
}

function getAbsoluteUrl() {
    $requestURI = $_SERVER['REQUEST_URI'];
    $folders = explode('/', substr($requestURI, 0, strrpos($requestURI, '/')));
    $lastFolder = end($folders);
    if ($lastFolder === 'exos') {
        array_pop($folders);
    }
    return join('/', $folders) . '/';
}