function encriptar() {
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".texto-mostrado").value = textoCifrado;
    document.querySelector("#input-texto").value;

    document.getElementById('ocultarImg').style.display = 'none';
    document.getElementById('ocultarL1').style.display = 'none';
    document.getElementById('ocultarL2').style.display = 'none';
    document.getElementById('texto-mostrado').style.display = 'block';
    document.getElementById('ocultarBtnCopiar').style.display = 'block';
    
  }
  
  var boton1 = document.querySelector("#btn-encriptar");
  boton1.onclick = encriptar;
  




  function desencriptar() {
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".texto-mostrado").value = textoCifrado;
    document.querySelector("#input-texto").value;
  
    document.getElementById('ocultarImg').style.display = 'none';
    document.getElementById('ocultarL1').style.display = 'none';
    document.getElementById('ocultarL2').style.display = 'none';
    document.getElementById('texto-mostrado').style.display = 'block';
    document.getElementById('ocultarBtnCopiar').style.display = 'block';
  }
  
  var boton2 = document.querySelector("#btn-desencriptar");
  boton2.onclick = desencriptar;
  


  function copiarTexto(){
    var contenido = document.querySelector("#texto-mostrado");
    contenido.select();
    document.execCommand("copy");
    alert("se copio!");
  }

  var boton3 = document.querySelector("#ocultarBtnCopiar");
  boton3.onclick = copiarTexto;

  /*function encriptar() {
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    
    document.getElementById("text-input-salida").innerHTML = textoCifrado;
    document.querySelector("#input-texto").value;
  }
  
  
  
  var boton1 = document.querySelector("#btn-encriptar");
  boton1.onclick = encriptar;
  
  function desencriptar() {
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;
  
  }
  
  var boton2 = document.querySelector("#btn-desencriptar");
  boton2.onclick = desencriptar;*/