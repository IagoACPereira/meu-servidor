const { lerJson, escreverJson } = require("../../../utils/manipularJson.js")

const pathDb = "./src/databases/portifolio/projetosDb.json"

class PortifolioController {

  static exibirMinhasInformacoes = (req, res) => {
    const meusDados = {
      nome: 'Iago Azevedo Costa Pereira',
      foto: 'https://avatars.githubusercontent.com/u/94400482?v=4',
      descricao: 'Encontrei no desenvolvimento de software um hobbie incrível que a cada pequena solução é uma grande conquista, faz eu sentir uma grande satisfação, um sentimento de enorme vitória. 🤘😍',
      projetos: lerJson(pathDb),
      contatos: {
        cel: '+55 11 9 8067-5993',
        email: 'iago.acpereira@gmail.com',
        linkedIn: 'https://www.linkedin.com/in/iagoacpereira',
        gitHub: 'https://github.com/IagoACPereira'
      } 
    }

    res.status(200).json(meusDados)
  }

  static addProjeto = (req, res) => {
    const {titulo, repositorio} = req.body

    const novoProjeto = { titulo, repositorio }

    const projetos = lerJson(pathDb)
    projetos.unshift(novoProjeto)
    escreverJson(pathDb, projetos)

    res.status(201).json({
      mensagem: "Projeto cadastrado com sucesso!",
      dados: novoProjeto,
      status: 201
    })
  }
}

module.exports = PortifolioController