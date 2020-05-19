window.addEventListener("load", start);
var vermelho = document.querySelector("#vermelho");
var verde = document.querySelector("#verde");
var azul = document.querySelector("#azul");

var vermelhoBox = document.querySelector("#vermelho-box");
var verdeBox = document.querySelector("#verde-box");
var azulBox = document.querySelector("#azul-box");

function start() {
  renderizarCores(renderizarRgb, vermelho, vermelhoBox);
  renderizarCores(renderizarRgb, verde, verdeBox);
  renderizarCores(renderizarRgb, azul, azulBox);
}

function renderizarCores(renderizarRgb, cor, boxCor) {
  cor.addEventListener("change", function (event) {
    setValorCorBox(boxCor, event.target.value);
    renderizarRgb();
  });
}
function setValorCorBox(caixaCor, valor) {
  caixaCor.value = valor;
}

function renderizarRgb() {
  rgb = [];
  rgb.push(`${vermelho.value},${verde.value},${azul.value}`);

  var div = document.querySelector(".cor");
  div.style.backgroundColor = `rgb(${rgb})`;
}
