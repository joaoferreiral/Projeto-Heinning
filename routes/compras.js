var express = require('express');
var router = express.Router();

const compra = [
  {
    "nomeProduto": "PS5",
    "valor": "3000",
    "parcelas": "10",
    "dataCompra": "04/06/2024"
  },
  {
    "nomeProduto": "Nintendo Switch",
    "valor": "2000",
    "parcelas": "8",
    "dataCompra": "05/06/2024"
  },
  {
    "nomeProduto": "iPhone 13",
    "valor": "4000",
    "parcelas": "12",
    "dataCompra": "06/06/2024"
  },
  {
    "nomeProduto": "Macbook Pro",
    "valor": "5000",
    "parcelas": "24",
    "dataCompra": "07/06/2024"
  },
  {
    "nomeProduto": "Samsung Galaxy S22",
    "valor": "3500",
    "parcelas": "10",
    "dataCompra": "08/06/2024"
  },
  {
    "nomeProduto": "Smart TV 4K",
    "valor": "2500",
    "parcelas": "10",
    "dataCompra": "09/06/2024"
  },
  {
    "nomeProduto": "Xbox Series X",
    "valor": "2500",
    "parcelas": "12",
    "dataCompra": "10/06/2024"
  },
  {
    "nomeProduto": "iPad Air",
    "valor": "1500",
    "parcelas": "6",
    "dataCompra": "11/06/2024"
  },
  {
    "nomeProduto": "GoPro Hero 10",
    "valor": "700",
    "parcelas": "4",
    "dataCompra": "12/06/2024"
  },
  {
    "nomeProduto": "Apple Watch Series 7",
    "valor": "1000",
    "parcelas": "8",
    "dataCompra": "13/06/2024"
  },
  {
    "nomeProduto": "Kindle Paperwhite",
    "valor": "200",
    "parcelas": "2",
    "dataCompra": "14/06/2024"
  }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(compra);
});

module.exports = router;
