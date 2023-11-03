function regatarMeusDados() {
  const foto = document.querySelector("#foto")
  const nome = document.querySelector("#nome")
  const contatos = document.querySelector("#contatos")
  const projetos = document.querySelector("#projetos")
  const descricao = document.querySelector("#descricao")

  axios({
    method: "get",
    url: "/iagoACPereira/portfolio/"
  })
  .then(dados => {

    foto.src = dados.data.foto
    nome.innerHTML = dados.data.nome
    contatos.innerHTML = `<li>${dados.data.contatos.cel}</li>`
    contatos.innerHTML += `<li>${dados.data.contatos.email}</li>`
    contatos.innerHTML += `<li>${dados.data.contatos.gitHub}</li>`
    contatos.innerHTML += `<li>${dados.data.contatos.linkedIn}</li>`

    descricao.innerHTML = dados.data.descricao

    dados.data.projetos.map((projeto, index) => {
      projetos.innerHTML += `
        <div>
          <div class="img-projeto"></div>
          <h3>${projeto.titulo.replaceAll("-", " ")}</h3>
          <p><a href="${projeto.repositorio}" target="_blank"><i class="bi bi-github"></i></a></p>
        </div>
      `
      document
      .querySelectorAll(".img-projeto")[index]
      .style.backgroundImage = `url(${projeto.img})`
    })
  })
}