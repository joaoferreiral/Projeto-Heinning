var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const resCompras = await fetch("https://ubiquitous-waffle-4jq444px6wg6hjxg4-3000.app.github.dev/compras");
  const compras = await resCompras.json();

  const resUsuarios = await fetch("https://ubiquitous-waffle-4jq444px6wg6hjxg4-3000.app.github.dev/users");
  const usuarios = await resUsuarios.json();

  res.render('index', { title: 'Finance', compras, usuarios });
  
});

module.exports = router;

// Massa mano, tas no caminho certo!!
// testando mais um commit