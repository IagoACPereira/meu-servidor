function regatarMeusDados() {
  const foto = document.querySelector("#foto")
  const nome = document.querySelector("#nome")
  const contatos = document.querySelector("#contatos")
  const projetos = document.querySelector("#projetos")

  axios({
    method: "get",
    url: "/iagoACPereira/portfolio/"
  })
  .then(dados => {
    console.log(dados.data)

    foto.src = dados.data.foto
    nome.innerHTML = dados.data.nome
    contatos.innerHTML = `<li>${dados.data.contatos.cel}</li>`
    contatos.innerHTML += `<li>${dados.data.contatos.email}</li>`
    contatos.innerHTML += `<li>${dados.data.contatos.gitHub}</li>`
    contatos.innerHTML += `<li>${dados.data.contatos.linkedIn}</li>`

    dados.data.projetos.map(projeto => {
      projetos.innerHTML += `
        <div>
          <img src="${projeto.img}" alt="${projeto.titulo}">
          <p>${projeto.titulo.replaceAll("-", " ")}</p>
          <p><a href=""><i class="bi bi-github">${projeto.repositorio}</i></a></p>
        </div>
      `
    })
  })
}