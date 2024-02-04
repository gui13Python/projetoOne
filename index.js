// diz ao usuario oque fazer !
function verifica() {
  let verificaTextarea = document.getElementById("inputTexto").value;

  if (verificaTextarea.trim() == "") {
    alert("a caixa esta vazia digite seu texto! ");
  } else {
    console.log("tem texto");
  }
}

verifica();

let imgatual = "./aberto.PNG";

function cadeadofexado() {
  document.getElementById("open").src = "./fexado.PNG";
}

let imgatual2 = ".fexado.PNG";

function abindocadeado() {
  document.getElementById("open").src = "./aberto.PNG";
}

// criptografa o texto escrito
function decodeText() {
  var input = document.getElementById("inputTexto").value;
  var output = reverseText(input);
  document.getElementById("criptografado").value = output;
  document.getElementById("inputTexto").value = "";
  cadeadofexado();
}

// embaralha o texto
function reverseText(text) {
  return text.split("").reverse().join("");
}

// descriptografa o texto

function descriptografar() {
  var input = document.getElementById("criptografado").value;
  var output = reverseText(input);
  document.getElementById("descripto").value = output;
  document.getElementById("criptografado").value = "";
  abindocadeado();
}

// funcao para copiar o texto descriptogragrado e remover o txto do textarea

function copy() {
  var copytext = document.getElementById("descripto");

  copytext.select();
  copytext.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copytext.value);
  alert("Texto copiado com sucesso!: " + copytext.value);
  document.getElementById("descripto").value = "";
}
