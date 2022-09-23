//comentario js una sola linea
/*comentarios en varias lineas*/
/*
//declaracion de variables
let edad;
let direccion;

//inicializacion de variables
edad = 23; //variable numerica
direccion = "9 de julio"; //tipo cadena de caracteres(string)

//declaracion e inicializacion
let equipo = "independiente";


//operaciones matematicas basicas
let num1 = 6;
let num2 = 3;
let suma = num1 + num2; //9
let resta = num1 - num2; //3
let multip = num1 * num2; //18
let division = num1 / num2;//2

//concatenacion
let dosCadenas = equipo + direccion;//si lo visualizo quedaria independiente y la direccion todo junto
let cadenaYNum = equipo + edad; //quedaria independiente23
*/

//prompt - ingreso de datos
let nombre = prompt ("Ingresa tu nombre");
let email = prompt ("ingresa tu email");

//alert - salida de datos 
alert ("tenemos registrados tus datos " +nombre);

/*
//algoritmo de suma con prompt y alert
let primerNum = parseInt(prompt("ingresa el primer numero para sumar"));
let segundoNum = parseInt(prompt("ingresa el segundo numero"));
//ambos numeros ya estan en formato numerico
let resultadoSuma = primerNum + segundoNum;
alert ("El resultado de la suma es: "+resultadoSuma);

//if
let edad = 18;

//como el valor es true se muestra en el navegador. false no se muestra si la edad fuera 17
if (edad == 18){
    console.log ("ya eres mayor de edad");
}
//= para asignar
//== para comparar 
*/

let fechaNacimiento = parseInt(prompt("Ingrese la fecha de nacimiento"));
let anioActual = parseInt(prompt("Ingrese el año actual"));
let resultadoEdad = anioActual - fechaNacimiento;
alert ("Usted tiene: "+resultadoEdad);

/*
//if..else
let colorFavorito = prompt ("Ingresa tu color favorito");
if (colorFavorito == "rojo"){
    alert ("Me encanta el color");
} else{
    alert ("Me gusta el rojo, igualmente buena eleccion"); 
}


//variables booleanos puede ser false o true
let tieneAptoFisico = true;
if (tieneAptoFisico){
    console.log ("Puede hacer actividad fisica");
}

//Diapo 28 
let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
}else{
    alert("Error: Ingresar nombre y apellido");
}*/

//ciclos por conteo -for
for (let i=1; i <=10; i++){
    //esta porcion de codigo es la que se va a repetir
    console.log ("Vuelta nro "+i);
}

/*
//Diapo 13
// Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero +" X "+ i +" = "+ resultado);
}
*/

/*
//Diapo 14
for (let i = 1; i <= 8; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    if (i == 6){
        alert("Lo sentimos, no se encuentran turnos disponibles");
        break;
    }
    // Informamos el turno asignado usando el número de repetición (i).
    alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
}*/

//Solicitud de usuario y contraseña
for (let i=1; i<=3; i++){ 
    let usuario=prompt("Ingresa nombre de usuario");
    let contrasenia = prompt ("Ingresa tu contraseña");
    if ((usuario == "lamadrid") && (contrasenia == "1234")){
        alert ("Bienvenido "+usuario +"!!");
        break;
    }else{
        alert ("Usuario y/o contraseña invalidos, restan "+(3-i)+" intentos");
    }
}

/*
//imprimir los numeros impares del 1 al 10(ciclo for y continue con el operador%modulo)
for (let i=1; i<=10; i++){
    if(i%2==0){
        continue;
    }else{
        //si yo saco el else, no cambia nada. porque el continue se encarga de saltear los numeros
        console.log(i);
    }
}

//sumar 3 valores ingresados por el usuario
let acumulador = 50;
for (let i=1; i<=3; i++){
    let valor = parseInt(prompt("Ingrese un numero"));
    console.log ("El usuario ingreso el valor: "+valor);
    acumulador = acumulador + valor;
    alert("La suma total es: "+acumulador);
} */

let acumulador = 50;
for (let i=1; i<=3; i++){
    let valor = parseInt(prompt("Ingrese la cantidad que quiere"));
    console.log ("El usuario ingreso el valor: "+valor);
    acumulador = valor * acumulador;
    alert("El total es: $"+acumulador);
}


//algoritmo ejercicio a resolver
//solicitar a un alumno 3 notas de la materia informatica y luego mostrarle el promedio de las mismas
//si el promedio es mayor a 7 indicarle que aprobo. sino que debe recuperar
let sumador = 0;
for (let i=1; i<=3; i++){
    let nota = parseInt(prompt("Ingresa la nota nro "+i));
    sumador = sumador + nota;
}
let promedio = sumador / 3;
alert("El promedio es: "+promedio);

if(promedio>=7){
    alert("Aprobaste la materia!!!")
}else{
    alert("Debes recuperar la materia :(")
}








