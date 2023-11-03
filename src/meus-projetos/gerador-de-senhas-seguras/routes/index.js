const express = require("express")
const Controlador = require("../controllers/index.js")

const senhasSegurasRouter = express.Router()

senhasSegurasRouter.get("/gerador-senha/", Controlador.rotaInicial)
senhasSegurasRouter.get("/gerador-senha/:frase", Controlador.gerarSenha)

module.exports = senhasSegurasRouter