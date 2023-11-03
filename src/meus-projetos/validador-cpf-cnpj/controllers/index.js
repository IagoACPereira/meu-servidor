class Controlador {
  static rotaInicial = (req, res) => {
    res.status(200).send('API Validador de CPF/CNPJ.')
  }

  static validacaoNumero = (req, res) => {
    let dadoEntrada = req.params.entrada
  
    dadoEntrada = dadoEntrada.split('')
  
    if(dadoEntrada.length == 11) {
      let cpf = []
      dadoEntrada.map((item) => {
        cpf.push(item)
        if(cpf.length == 3) {
          cpf.push('.')
        }
  
        if(cpf.length == 7) {
          cpf.push('.')
        }
  
        if(cpf.length == 11) {
          cpf.push('-')
        }
      });
  
      cpf = cpf.join().replaceAll(',', '')
      
      res.status(200).send(`${cpf} É um CPF válido!`);
    } else if(dadoEntrada.length == 14) {
      let cnpj = []
      dadoEntrada.map((item) => {
        cnpj.push(item)
        if(cnpj.length == 2) {
          cnpj.push('.')
        }
  
        if(cnpj.length == 6) {
          cnpj.push('.')
        }
  
        if(cnpj.length == 10) {
          cnpj.push('/')
        }
  
        if(cnpj.length == 15) {
          cnpj.push('-')
        }
      });
  
      cnpj = cnpj.join().replaceAll(',', '')
      
      res.status(200).send(`${cnpj} É um CNPJ válido!`);
    } else {
      dadoEntrada = dadoEntrada.join().replaceAll(',', '')
      
      res.status(400).send(`${dadoEntrada} não atende os resiquisitos para CPF e nem CNPJ!`);
    }
  }
}

module.exports = Controlador