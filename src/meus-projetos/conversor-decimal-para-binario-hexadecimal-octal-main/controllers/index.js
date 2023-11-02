const binario = require("../utils/binario.js")
const hexadecimal = require("../utils/hexadecimal.js")
const octal = require("../utils/octal.js")

class ConversorController {
  static objetivo = (req, res) => {
    res.status(200).send('API para conversão de número decimal para binário e hexadecimal.')
  }

  static gerarConversao = (req, res) => {
    const { numero } = req.params

    res.status(200).json({
        decimal: numero,
        binario: binario(numero),
        octal: octal(numero),
        hexadecimal: hexadecimal( numero ),
        status: 200
    })
  }
}

module.exports = ConversorController