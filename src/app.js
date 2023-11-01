const express = require("express")
const portifolioRouter = require("./meus-projetos/portifolio/routes/portifolioRoutes.js")

function meuApp(app) {
  app.use(
    express.json(),
    express.urlencoded({
      extended: true
    })
  )

  // Rotas para APIs
  app.use(
    "/iagoACPereira/",
    portifolioRouter
  )

  // Rotas para views
  // estaticos
  app.use("/axios/", express.static("./src/meus-projetos/axios/"))

  //Portfólio
  app.use(
    "/iagoACPereira/views/portfolio",
    express.static("./src/meus-projetos/portifolio/views/")
  )

  

  app.get("/", (req, res) => {
    res.send("Tudo ok com o servidor!<br><a href=\"/iagoACPereira/views/portfolio\">Portfólio</a>")
  })
}

module.exports = meuApp
