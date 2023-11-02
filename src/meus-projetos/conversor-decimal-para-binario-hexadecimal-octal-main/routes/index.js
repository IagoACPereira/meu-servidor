const ConversorController = require("../controllers/index.js")

const conversorRouter = require("express").Router()

conversorRouter
  .get("/conversor-binario-hexadecimal-octal/", ConversorController.objetivo)
  .get("/conversor-binario-hexadecimal-octal/:numero", ConversorController.gerarConversao)

module.exports = conversorRouter