function hexadecimal(numero) {

  if (!Number(numero)) {

      res.status(400).json({
          mensagem: 'O valor inserido não é um número! Por favor insira um número decimal.',
          status: 400
      })

  } else {

      let num = Number(numero)

      let modsNum = []

      while(num >= 16) {
          modsNum.push(num % 16)
          num = Math.floor(num / 16)
      }
      modsNum.push(num)

      const hexadecimal = modsNum
      .reverse()
      .join()
      .replaceAll('10', 'A')
      .replaceAll('11', 'B')
      .replaceAll('12', 'C')
      .replaceAll('13', 'D')
      .replaceAll('14', 'E')
      .replaceAll('15', 'F')
      .replaceAll(',', '')

      return hexadecimal
      
  }

}

module.exports = hexadecimal