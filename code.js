//prompt - ingreso de datos
if(
    nombre = prompt ("Ingresa tu nombre"),
    email = prompt ("ingresa tu email")){
    //alert - salida de datos 
    alert ("Tenemos registrados tus datos " +nombre);
    }else{
    if(nombre, email==""){
    alert("No tenemos datos registrados")
}
}


for (let i=1; i<=3; i++){ 
    let edadAutor= parseInt(prompt("¿Cuantos años tiene el autor?"));
    let pais = prompt ("¿En que pais nacio el autor?");
    if ((edadAutor == "23") && (pais == "Argentina" || pais=="argentina")){
        alert ("Conoces al Autor!!");
        break;
    }else{
        alert ("Edad y/o pais son incorrectos, restan "+(3-i)+" intentos");
    }if(i==3){
        alert("No conoces al Autor");
        break;
    }
}

//calcular precio
const suma  = (a,b) => a + b
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva   = x => x * 0.21
let acumulador=0;
let precioProducto  = 2500
let valor = parseInt(prompt("Ingrese la cantidad de ejemplares que quieras"));
acumulador = valor * precioProducto;
alert("El total sin Iva es: $"+acumulador);
//Calculo el precioProducto + IVA
let nuevoPrecio = suma(acumulador, iva(precioProducto))
alert ("El precio total con iva incluido es: $"+nuevoPrecio)


