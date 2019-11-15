function validar() {
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;
    var mensaje = "";
    var expresion = /^(?=.*[A-Z])(?=.*\d).*$/;
    
    if(usuario == ""){
        mensaje = "<p> Ingresar usuario </p>";
        document.getElementById("mensaje").innerHTML = mensaje;
        return false;
    }
    
    if(usuario.length < 6){
        mensaje= "<p> El usuario debe tener como minimo 6 caracteres <p>";
        document.getElementById("mensaje").innerHTML = mensaje;
        return false;
    }
    
    if(clave == ""){
        mensaje = "<p> Ingresar clave </p>";
        document.getElementById("mensaje").innerHTML = mensaje;
        return false;
    }
    
    if(clave.length < 8){
        mensaje= "<p> La clave debe tener como minimo 8 caracteres.<p>";
        document.getElementById("mensaje").innerHTML = mensaje;
        return false;
    }
    //  if (!(/^(?=.*[A-Z])(?=.*\d).*$/).test(clave)){
    if(!expresion.test(clave)){
        mensaje= "<p> La clave debe contener una mayúscula y un número<p>";
        document.getElementById("mensaje").innerHTML = mensaje;
        return false;
    }
    else
        document.getElementById("mensaje").innerHTML = "";
        
}
