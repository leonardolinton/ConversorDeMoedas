function pegarTipoMoeda() {
  const ops = document.querySelector('input[name="moeda"]:checked').value;
  return ops;
}

function converterValor() {
  let tipoMoeda = pegarTipoMoeda();
  let resultadoValor;
  let valorReal;
  let valor;
  let tituloValor;
  let elementoValorConvertido = document.getElementById("valorConvertido");

  /*===== VERIFICA AS OPÇÕES DE MOEDAS =====*/
  if (tipoMoeda == "dolar") {
    tituloValor = "Real para Dolar";
    valorReal = parseFloat(document.getElementById("valor").value);
    valor = valorReal / 5.0;
    resultadoValor = `R$ ${valorReal.toFixed(2)} = $ ${valor.toFixed(2)}`;
  } else if (tipoMoeda == "euro") {
    tituloValor = "Real para Euro";
    valorReal = parseFloat(document.getElementById("valor").value);
    valor = valorReal / 5.5;
    resultadoValor = `R$ ${valorReal.toFixed(2)} = € ${valor.toFixed(2)}`;
  } else if (tipoMoeda == "bit") {
    tituloValor = "Real para BitCoin";
    valorReal = parseFloat(document.getElementById("valor").value);
    valor = valorReal / 100000;
    resultadoValor = `R$ ${valorReal.toFixed(2)} = BTC ${valor}`;
  }

  /*===== VERIFICA SE O VALOR É VALIDO =====*/
  if (valorReal > 0) {
    elementoValorConvertido.innerHTML = `
    <h3>${tituloValor}</h3>
    <h3>${resultadoValor}</h3>`;
  } else {
    elementoValorConvertido.innerHTML = `<h3>Valor invalido!!!</h3>`;
  }
}
