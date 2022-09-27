





function validarUsuario() {

    
    var usuarioIngresado=document.getElementById("textUsuario").value;
    var passwordIngresado=document.getElementById("textPassword").value;

    if (usuarioIngresado=="ined" && passwordIngresado==123456) {
            
          window.open("pagina2.html")
    }
    else
    {
        alert("El usuario o contraseña son INCORRECTOS");
        window.open("index.html")
    }


}
