var express = require('express');
var router = express.Router();

const usuarios = 
[
  {
    "nome_usuario": "Tukson",
    "saldo_usuario": "3000.50",
    "email": "tukson@gmail.com",
    "senha": "batata21"
  },
  {
    "nome_usuario": "Maria",
    "saldo_usuario": "1500.75",
    "email": "maria@gmail.com",
    "senha": "senha123"
  },
  {
    "nome_usuario": "João",
    "saldo_usuario": "2500.00",
    "email": "joao@hotmail.com",
    "senha": "joao321"
  },
  {
    "nome_usuario": "Ana",
    "saldo_usuario": "4000.25",
    "email": "ana@yahoo.com",
    "senha": "ana@2023"
  },
  {
    "nome_usuario": "Carlos",
    "saldo_usuario": "3200.50",
    "email": "carlos@gmail.com",
    "senha": "carlos#456"
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(usuarios);
});

module.exports = router;
