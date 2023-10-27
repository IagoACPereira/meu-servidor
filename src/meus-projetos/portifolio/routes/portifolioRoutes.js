const PortifolioController = require("../controllers/PortifolioController.js")

const portifolioRouter = require("express").Router()

portifolioRouter
  .post("/portfolio", PortifolioController.addProjeto)
  .get("/portfolio", PortifolioController.exibirMinhasInformacoes)


module.exports = portifolioRouter