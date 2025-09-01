const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaTema = document.querySelector(".img-btn");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroAtivo = body.classList.contains("modo-escuro");
  body.classList.toggle("modo-escuro");
  if (modoEscuroAtivo) {
    imagemBotaoTrocaTema.setAttribute(
      "src",
      "./assets/projeto-listagem-pokemon/src/imagens/sun.png"
    );
  } else {
    imagemBotaoTrocaTema.setAttribute(
      "src",
      "./assets/projeto-listagem-pokemon/src/imagens/moon.png"
    );
  }
});
