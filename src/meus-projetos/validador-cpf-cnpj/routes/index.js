const Controlador = require('../controllers/index.js')

const validadorCpfCnpjRouter = require('express').Router()

validadorCpfCnpjRouter
  .get("/validador-cpf-cnpj", Controlador.rotaInicial)
  .get("/validador-cpf-cnpj/:entrada", Controlador.validacaoNumero)

module.exports = validadorCpfCnpjRouter