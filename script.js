let taxaDeConversao = document.getElementById("taxaConversao");
let inputTaxa = taxaConversao.value;
var dolares = 0

function conversorRealDolar() {
  //acessar o que foi digitado
  var reais = document.getElementById('reais').value

  //converter de string para float
  reais = parseFloat(reais)

  //converter para dolares
  dolares = reais / inputTaxa;

  console.log(dolares)

  alert(dolares + ' dolares')
}

var reals = 0
function conversorDolarReal() {
  //acessar o que foi digitado
  var dolar = document.getElementById('dolar').value

  //converter de string para float
  dolar = parseFloat(dolar)

  //converter para dolares
  reals = dolar / inputTaxa;
  console.log(reals)

  alert(reals + ' reals')
}

const obterTaxa = () => {
  if (inputTaxa === '') {
    return alert('Preencha a taxa de conversão para continuar!')
  }
  taxa = inputTaxa.value
}

const limpaInput = () => {
  inputTaxa.value = ''
}