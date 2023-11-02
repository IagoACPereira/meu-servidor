function binario(numero) {
    
  if (!Number(numero)) {

      res.status(400).json({
          mensagem: 'O valor inserido não é um número! Por favor insira um número decimal.',
          status: 400
      })

  } else {

      let num = Number(numero)
      let modsNum = []

      while (num >= 2) {
          modsNum.push(num % 2)
          num = Math.floor(num / 2)
      }
      modsNum.push(num)

      const binario = modsNum
      .reverse()
      .join()
      .replaceAll(',', '')

      return binario

  }
  
}

module.exports = binario