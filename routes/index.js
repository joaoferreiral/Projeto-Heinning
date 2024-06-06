var express = require('express');
 router = express.Router();

router.get('/', async function(req, res, next) {
  const resCompras = await fetch("https://ubiquitous-guide-rj4gwp9467j35gg9-3000.app.github.dev/produtos");
  const compras = await resCompras.json();

  const resUsuarios = await fetch("https://ubiquitous-guide-rj4gwp9467j35gg9-3000.app.github.dev/usuarios");
  const usuarios = await resUsuarios.json();

  res.render('index', { title: 'Finance', compras, usuarios });
});


router.get('/novaCompra', function(req, res, next) {
  res.render('novaCompra');
});

router.post('/produtos', async function(req, res, next) {
  const { nome_produto, codigo_produto, valor_produto, parcelas_produto, data_compra_produto } = req.body;

  const response = await fetch('https://ubiquitous-guide-rj4gwp9467j35gg9-3000.app.github.dev/produtos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome_produto: nome_produto,
      codigo_produto: codigo_produto,
      valor_produto: valor_produto,
      parcelas_produto: parcelas_produto,
      data_compra_produto: data_compra_produto,
      id_usuario: 1
    
    })
  });

  if (response.ok) {
    res.redirect('/');
  } else {
    res.status(500).send('Erro ao salvar a compra');
  }
});

router.delete('/produtos/:id', (req, res) => {
  const id = req.params.id;
  fetch(`https://ubiquitous-guide-rj4gwp9467j35gg9-3000.app.github.dev/produtos/${id}`,{
    method: "DELETE"
})
})

module.exports = router;
