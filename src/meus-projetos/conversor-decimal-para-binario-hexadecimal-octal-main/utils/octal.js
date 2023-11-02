function octal(numero) {
    
  if (!Number(numero)) {

      res.status(400).json({
          mensagem: 'O valor inserido não é um número! Por favor insira um número decimal.',
          status: 400
      })

  } else {

      let num = Number(numero)

      let modsNum = []

      while(num >= 8) {
          modsNum.push(num % 8)
          num = Math.floor(num / 8)
      }
      modsNum.push(num)

      const octal = modsNum
      .reverse()
      .join()
      .replaceAll(',', '')

      return octal

  }
  
}


module.exports = octal