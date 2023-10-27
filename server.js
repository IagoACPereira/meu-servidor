const meuApp = require("./src/app.js")

const app = require("express")()
const porta = 3000

meuApp(app)

app.listen(porta, () => console.log(`Servidor escutando porta ${porta}`))