var codificaButton = document.getElementById("codificar");

var decodificaButton = document.getElementById("decodificar");

var botao = document.getElementById("envio");

var divValorImput = document.getElementById("valorImput");

var alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";

var select = document.getElementById("select");

var divInputNumber = document.getElementById('divInputNumber');



codificaButton.addEventListener("click", function () {
  botao.innerText = "Codificar mensagem";
});

decodificaButton.addEventListener("click", function () {
  botao.innerText = "Decodificar mensagem";
});

select.addEventListener('change', function(){
  if (select.value == "Cifra de Cesar"){
    divInputNumber.style.display = 'block'
  }else{
    divInputNumber.style.display = 'none'
  }
} )

botao.addEventListener("click", function (e) {
  e.preventDefault();
  var inputNumber = document.getElementById('inputNumber').value;
  if (select.value == "Cifra de Cesar") {
    if (codificaButton.checked) {
      console.log(codificaButton.value);
      var codificarTexto = document.getElementById("text").value;
      var textoMinusculo = codificarTexto.toLowerCase();
      var textoCodificado = "";
      for (var i = 0; i < textoMinusculo.length; i++) {
        for (var j = 0; j < alfabeto.length; j++) {
          if (textoMinusculo[i] == alfabeto[j]) {
            textoCodificado += alfabeto[j + parseInt(inputNumber)];
            break;
          } else if (textoMinusculo[i] == " ") {
            textoCodificado += " ";
          }
        }
      }
    } else {
      var codificarTexto = document.getElementById("text").value;
      var textoMinusculo = codificarTexto.toLowerCase();
      var textoCodificado = "";
      for (var i = 0; i < textoMinusculo.length; i++) {
        for (var j = alfabeto.length; j >= 0; j--) {
          if (textoMinusculo[i] == alfabeto[j]) {
            textoCodificado += alfabeto[j - parseInt(inputNumber)];
            break;
          } else if (textoMinusculo[i] == " ") {
            textoCodificado += " ";
          }
        }
      }
    }
  } else {
    if (codificaButton.checked) {
      var codificarTexto = document.getElementById("text").value;
      var textoCodificado = btoa(codificarTexto);
    } else {
      var codificarTexto = document.getElementById("text").value;
      var textoCodificado = atob(codificarTexto);
    }
  }

  divValorImput.innerHTML = `<b><br><p>Cifra de César</p><p>${textoCodificado}</p>`;

});
