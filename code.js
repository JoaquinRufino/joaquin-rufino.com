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
let usuario = prompt ("Ingresa tu nombre de usuario");
let email = prompt ("ingresa tu email");

//alert - salida de datos 
alert ("tenemos registrados tus datos " +usuario);

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

//if..else
let colorFavorito = prompt ("Ingresa tu color favorito");
if (colorFavorito == "rojo"){
    alert ("Me encanta el color");
} else{
    alert ("Me gusta el rojo, igualmente buena eleccion"); 
}

/*
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




