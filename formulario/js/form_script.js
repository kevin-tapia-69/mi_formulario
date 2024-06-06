function validar() {
    var retorno_email = validar_correo();
    var retorno_direccion = validar_direccion();
    var retorno_comuna = validar_comuna();
    var retorno_fono = validar_fono();
    var retorno_url = validar_url();
    var retorno_ptiempo = validar_ptiempo();
    var retorno_contraseña = validarContraseña(); 
    return retorno_email && retorno_direccion && retorno_comuna && retorno_fono && retorno_url && retorno_ptiempo && retorno_contraseña; // Actualización
}

function validar_correo() {
    var input_email = document.getElementById("input-email");
    var div_error_email = document.getElementById("error-email");
    var correo = input_email.value;
    var pos_arroba = correo.indexOf("@");
    var pos_punto = correo.lastIndexOf(".");
    var arr_correo = correo.split(".");
    var extension = arr_correo[arr_correo.length - 1];
    if (pos_arroba > 0 && pos_punto > pos_arroba && (extension.length > 1 && extension.length <= 3 )) {
        div_error_email.innerHTML = "";
        return true;
    } else {
        div_error_email.innerHTML = "El correo electrónico no tiene el formato correcto";
        div_error_email.className = "text-danger small mt-1";
        return false;
    }
}

function validar_direccion() {
    var input_direccion = document.getElementById("input-direccion");
    var div_error_direccion = document.getElementById("error-direccion");
    var direccion = input_direccion.value;
    if (direccion == "") {
        div_error_direccion.innerHTML = "La dirección es obligatoria";
        div_error_direccion.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_direccion.innerHTML = "";
        return true;
    }
}

function validar_comuna() {
    var select_comuna = document.getElementById("select-ciudad");
    var div_error_comuna = document.getElementById("error-comuna");
    var comuna = select_comuna.value;
    if (comuna == "") {
        div_error_comuna.innerHTML = "Debe seleccionar una comuna";
        div_error_comuna.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_comuna.innerHTML = "";
        return true;
    }
}

function validar_fono() {
    var input_fono = document.getElementById("input-fono");
    var div_error_fono = document.getElementById("error-fono");
    var fono = input_fono.value.trim(); 
    
    if (fono == "") {
        div_error_fono.innerHTML = "El teléfono es obligatorio";
        div_error_fono.className = "text-danger small mt-1";
        return false;
    } else if (fono.length !== 14 || fono.charAt(0) !== "+" || fono.charAt(4) !== " " || fono.charAt(9) !== " ") {
        div_error_fono.innerHTML = "El teléfono no tiene el formato correcto (ej: +569 1234 5678)";
        div_error_fono.className = "text-danger small mt-1";
        return false;
    }
    div_error_fono.innerHTML = "";
    return true;
}

function validar_url() {
    var input_url = document.getElementById("input-url");
    var div_error_url = document.getElementById("error-url");
    var url = input_url.value;
    
    if (url == "") {
        div_error_url.innerHTML = "La página web es obligatoria";
        div_error_url.className = "text-danger small mt-1";
        return false;
    } else if (!url.startsWith("www.") || url.indexOf(".") == -1) {
        div_error_url.innerHTML = "La URL no tiene el formato correcto (ejemplo: www.tupagina.com)";
        div_error_url.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_url.innerHTML = "";
        return true;
    }
}

function validar_ptiempo() {
    var input_ptiempo = document.getElementById("input-ptiempo");
    var div_error_ptiempo = document.getElementById("error-ptiempo");
    var ptiempo = input_ptiempo.value.trim(); 
    
    if (ptiempo == "") {
        div_error_ptiempo.innerHTML = "Debe ingresar sus pasatiempos";
        div_error_ptiempo.className = "text-danger small mt-1";
        return false;
    }
    var pasatiempos = ptiempo.split(",");
    
    if (pasatiempos.length < 2) {
        div_error_ptiempo.innerHTML = "Debe ingresar al menos dos pasatiempos separados por comas";
        div_error_ptiempo.className = "text-danger small mt-1";
        return false;
    }
    
    div_error_ptiempo.innerHTML = "";
    return true;
}

function validarContraseña() {
    var input_contra1 = document.getElementById("input-contra1");
    var input_contra2 = document.getElementById("input-contra2");
    var div_error_contra1 = document.getElementById("error-contra1");
    var div_error_contra2 = document.getElementById("error-contra2");

    var contra1 = input_contra1.value;
    var contra2 = input_contra2.value;

    if (contra1 === "") {
        div_error_contra1.innerHTML = "La contraseña es obligatoria";
        div_error_contra1.className = "text-danger small mt-1";
        return false;
    } else if (contra2 === "") {
        div_error_contra2.innerHTML = "Debe confirmar la contraseña";
        div_error_contra2.className = "text-danger small mt-1";
        return false;
    } else if (contra1 !== contra2) {
        div_error_contra2.innerHTML = "Las contraseñas no coinciden";
        div_error_contra2.className = "text-danger small mt-1";
        return false;
    } else if (contra1.length < 3 || contra1.length > 6) {
        div_error_contra1.innerHTML = "La contraseña debe tener entre 3 y 6 caracteres";
        div_error_contra1.className = "text-danger small mt-1";
        return false;
    } else {
        var tieneLetra = false;
        var tieneDigito = false;
        for (var i = 0; i < contra1.length; i++) {
            if (/[a-zA-Z]/.test(contra1[i])) {
                tieneLetra = true;
            }
            if (/\d/.test(contra1[i])) {
                tieneDigito = true;
            }
        }
        if (!tieneLetra || !tieneDigito) {
            div_error_contra1.innerHTML = "La contraseña debe contener al menos una letra y un dígito";
            div_error_contra1.className = "text-danger small mt-1";
            return false;
        } else {
            div_error_contra1.innerHTML = "";
            div_error_contra2.innerHTML = "";
            return true;
        }
    }
}

