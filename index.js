// diz ao usuario oque fazer !
function verifica() {
  let verificaTextarea = document.getElementById("inputTexto").value;

  if (verificaTextarea.trim() == "") {
    alert("a caixa esta vazia digite seu texto! ");
  } else {
    console.log("tem texto");
  }
}

// verifica();

let imgatual = "./aberto2.PNG";

function cadeadofexado() {
  document.getElementById("open").src = "./fexado2.PNG";
}

let imgatual2 = ".fexado.PNG";

function abindocadeado() {
  document.getElementById("open").src = "./aberto2.PNG";
}

// criptografa o texto escrito
function encoderText() {
  let text0 = document.getElementById("inputTexto").value;
  let Encoder = window.btoa(text0);

  let text1 = (document.getElementById("criptografado").value = Encoder);
  document.getElementById("inputTexto").value = "";
  cadeadofexado();
}

// descriptografa o texto

function decoderText() {
  let text2 = document.getElementById("criptografado").value;

  text3 = window.atob(text2);

  let text4 = (document.getElementById("descripto").value = text3);

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
