function lenghtPassword(){
  if(document.getElementById('uno').checked){
    document.getElementById('passworduno').style.display = 'block';
    document.getElementById('uno').style.display = 'block';
    document.getElementById('spanuno').style.display = 'block';
    document.getElementById('passworddos').style.display = 'none';
    document.getElementById('dos').style.display = 'none';
    document.getElementById('spandos').style.display = 'none';
    document.getElementById('passwordtres').style.display = 'none';
    document.getElementById('spantres').style.display = 'none';
    document.getElementById('tres').style.display = 'none';

  }else if(document.getElementById('dos').checked){
    document.getElementById('passworddos').style.display = 'block';
    document.getElementById('dos').style.display = 'block';
    document.getElementById('spandos').style.display = 'block';
    document.getElementById('passworduno').style.display = 'none';
    document.getElementById('spanuno').style.display = 'none';
    document.getElementById('uno').style.display = 'none';
    document.getElementById('passwordtres').style.display = 'none';
    document.getElementById('spantres').style.display = 'none';
    document.getElementById('tres').style.display = 'none';

  }else if(document.getElementById('tres').checked){
    document.getElementById('passwordtres').style.display = 'block';
    document.getElementById('tres').style.display = 'block';
    document.getElementById('spantres').style.display = 'block';
    document.getElementById('passworddos').style.display = 'none';
    document.getElementById('spandos').style.display = 'none';
    document.getElementById('dos').style.display = 'none';
    document.getElementById('passworduno').style.display = 'none';
    document.getElementById('spanuno').style.display = 'none';
    document.getElementById('uno').style.display = 'none';
  }
}

function guardarArchivoCifrado(){

    var texto = document.getElementById("texto").value;
    var password = document.getElementById("passworduno").value; 
    var password = document.getElementById("passworddos").value; 
    var password = document.getElementById("passwordtres").value;   
    var textoCifrado = CryptoJS.AES.encrypt(texto, password).toString();

    var textcBlob = new Blob([textoCifrado], {type:'text/plain'});
//opcional

    var nombreArchivo = "texto.txt";


    var enlace = document.createElement("a");
    
    enlace.download = nombreArchivo;

    enlace.innerHTML = "link oculto";
    

    enlace.download = nombreArchivo;

    enlace.innerHTML = "link oculto";
    
    window.URL = window.URL || window.webkitURL;

    enlace.href = window.URL.createObjectURL(textcBlob);

    enlace.onclick = destruir;

    enlace.style.display = "none";

    document.body.appendChild(enlace);
    
    enlace.click();
}
 
function destruir(event){
    document.body.removeChild(event.target);
}

function descifrar(evento){
  let archivo = evento.target.files[0];
  
  var password = document.getElementById("passworduno").value; 
  var password = document.getElementById("passworddos").value; 
  var password = document.getElementById("passwordtres").value;  

  if(archivo){
    var reader = new FileReader();
    reader.onload = function(e){
      var contenido = e.target.result;
      console.log(contenido)
      //descifrar y lo demas

      var descifrado = CryptoJS.AES.decrypt(contenido, password);
      document.getElementById("mensajedescifrado").innerHTML = descifrado.toString(CryptoJS.enc.Utf8);;
      console.log(descifrado, password);
    };
    reader.readAsText(archivo);
  }else{
    console.log("no se selecciono ningun archivo")
  }

}
window.addEventListener('load', () =>{
  document.getElementById('archivo').addEventListener('change', descifrar);
});
 