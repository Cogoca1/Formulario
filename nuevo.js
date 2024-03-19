function validarUsuario(e){
    let texto = e.value
    let patron = /^[\w]{3,25}$/  
    e.nextElementSibling.innerHTML= patron.test(texto)
     if(!patron.test(texto)){
        document.getElementById("usuario").innerHTML="Introduce un usuario entre 3 y 25 caracteres"
        document.getElementById("ususario").style.color="red"
        document.getElementById("usuario").style.textAlign="center"
    }else {
    document.getElementById("usuario").innerHTML="Usuario Correcto"
    document.getElementById("usuario").style.color="green"
    document.getElementById("usuario").style.textAlign="center"
    } 
}

function validarContraseña(e){
    let texto = e.value
    let patron =  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
    e.nextElementSibling.innerHTML= patron.test(texto)
    if(!patron.test(texto)){
        document.getElementById("contraseña").innerHTML="Introduce 8 digitos que contengan al menos una mayuscula una minuscula y un digito"
        document.getElementById("contraseña").style.color="red"
        document.getElementById("contraseña").style.textAlign="center"
    }else {
    document.getElementById("contraseña").innerHTML="Contraseña Correcta"
    document.getElementById("contraseña").style.color="green"
    document.getElementById("contraseña").style.textAlign="center"
    } 
}
function validarConfirmacionContraseña(e){
    let texto = e.value
    let textoContraseña = document.getElementsByName('password')[0].value;
    if(texto !== textoContraseña){
        document.getElementById("confirmar_contraseña").innerHTML="Las contraseñas no coinciden"
        document.getElementById("confirmar_contraseña").style.color="red"
        document.getElementById("confirmar_contraseña").style.textAlign="center"
    }else {
        document.getElementById("confirmar_contraseña").innerHTML="Las contraseñas coinciden"
        document.getElementById("confirmar_contraseña").style.color="green"
        document.getElementById("confirmar_contraseña").style.textAlign="center"
    } 
}
    function validarEmail(e){
        let texto = e.value
        let patron = /^[\w\-\.]*@([\w-]+\.)+[\w-]{2,}$/ 
        e.nextElementSibling.innerHTML= patron.test(texto)
        if(!patron.test(texto)){

            document.getElementById("email").innerHTML="Introduce un Email valido"
            document.getElementById("email").style.color="red"
            document.getElementById("email").style.textAlign="center"
        }else {
        document.getElementById("email").innerHTML="Email Correcto"
        document.getElementById("email").style.color="green"
        document.getElementById("email").style.textAlign="center"
        } 
    }

    function validarNombre(e){
        let texto = e.value;
        let patron = /^[\D]{3,}$/
        e.nextElementSibling.innerHTML= patron.test(texto)
        if(!patron.test(texto)){
            document.getElementById("nombre").innerHTML=" Nombre incorrecto"
            document.getElementById("nombre").style.color="red"
            document.getElementById("nombre").style.textAlign="center"
         }else{
            document.getElementById("nombre").innerHTML="Nombre Correcto"
            document.getElementById("nombre").style.color="green"
            document.getElementById("nombre").style.textAlign="center"
        } 

    }

    function validarApellidos(e){
        let texto = e.value;
        let patron = /^[\D]{2,} [\D]{2,}$/
        e.nextElementSibling.innerHTML= patron.test(texto)
        if(!patron.test(texto)){
            document.getElementById("apellidos").innerHTML=" Apellidos incorrecto"
            document.getElementById("apellidos").style.color="red"
            document.getElementById("apellidos").style.textAlign="center"
        }else{
            document.getElementById("apellidos").innerHTML="Apellidos Correcto"
            document.getElementById("apellidos").style.color="green"
            document.getElementById("apellidos").style.textAlign="center"
        } 

    }


function validarCP(){
    let cpInput = document.getElementById('cpInput');
    let cpLines = cpInput.value.trim().split('\n');

    if(cpLines.length < 4){
        alert("La dirección no es válida. Debe contener al menos cuatro líneas.");
    } else {
        let cpLine = cpLines[2].trim();
        let cpPattern = /^\d{5}$/;
        
        if(!cpPattern.test(cpLine)){
            alert("El código postal es incorrecto. Debe contener exactamente 5 dígitos.");
        } else {
            let address = cpLines[0].trim();
            let cp = cpLines[1].trim();
            let city = cpLine;
            let province = cpLines[3].trim();
            alert(address + ", " + cp + ", " + city + ", " + province);
        }
    }
} 





//let patron = /^[\w\-\.]*@([\w-]+\.)+[\w-]{2,}$/  //Email
//let patron = /ñ/; //Si contiene una ñ
//let patron = /[ñÑ]/; //Si contiene una ñ o Ñ
//let patron = /[A-Z]/ //Si contiene una mayúscula, no incluidas las tildes ni las Ñ
//let patron = /[A-ZÑÁÉÍÓÚ]/ // Si contiene cualquier máyuscula
//let patron = /^[A-Z]{3}$/ // Tiene 3 caracteres mayúscula
//let patron = /^[0-9]{5}$/ // Código postal cinco caracteres (0-9) 
//let patron = /^[\d]{5}$/   // Codigo postal 5 digitos
//let patron = /^[\d]{5,}$/ // Tiene 5 o más digitos
//let patron = /^[\d]{5,10}$/ //Tiene entre 5 y 10 digitos
//let patron = /^[\d\.]{6}$/  // Tiene 6 caracteres entre digitos y puntos
//let patron = /^[012][\d]{2}\.[\d]{3}\.[\d]{3}\.[\d]{3}$/          //Valide una dirección IP 123.123.212.123
//let patron = /^[67][0-9]{8}$/               //Validar un número de teléfono móvil (Empieza por 6 ó 7). Tiene 9 digitos
//let patron = /^[XYZ][0-9]{7}[A-Z]$/  //Un NIE      //Saber si es un NIE
//let patron = /^[0-9]{4}[A-Z]{3}$///Una matricula de coche española moderna
    
     

