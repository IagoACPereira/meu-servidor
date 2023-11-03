class Controlador {
  static rotaInicial = (req, res) => {
    res.status(200).send("<h1>API Geradora de Senhas seguras</h1>")
  }
  static gerarSenha = (req, res) => {
    const { frase } = req.params
    
    let senha = frase
    senha = senha.replaceAll(' ', '')
    senha = senha.replaceAll('i', '1')
    senha = senha.replaceAll('I', '1')
    senha = senha.replaceAll('e', '3')
    senha = senha.replaceAll('E', '3')
    senha = senha.replaceAll('a', '4')
    senha = senha.replaceAll('A', '4')
    senha = senha.replaceAll('t', '7')
    senha = senha.replaceAll('T', '7')
    senha = senha.replaceAll('o', '0')
    senha = senha.replaceAll('O', '0')
    senha += `@${new Date().getFullYear()}`
  
    res.status(200).json({
      mensagem: 'Senha gerada com sucesso!',
      senha
    })
  }
}

module.exports = Controlador