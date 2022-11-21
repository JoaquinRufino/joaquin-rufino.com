//formulario
const campoNombre = document.getElementById("validationCustom01");
const campoApellido = document.getElementById("validationCustom02");
const campoEmail = document.getElementById("validationCustomUsername");


campoNombre.oninput = () =>{
    if(isNaN(campoNombre.value)){
        campoNombre.style.color="black";
    }else{
        campoNombre.style.color="red";
    }

}

campoApellido.oninput = () =>{
    if(isNaN(campoApellido.value)){
        campoApellido.style.color="black";
    }else{
        campoApellido.style.color="red";
    }
}

campoEmail.oninput = () =>{
    if(isNaN(campoEmail.value)){
        campoEmail.style.color="black";
    }else{
        campoEmail.style.color="red";
    }
}