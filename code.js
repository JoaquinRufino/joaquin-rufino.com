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
}

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
}

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
}*/

//ciclos
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

/*//aqui tuve problemas para resolver el iva por el acumulador
let acumulador = 2500;
//for (let i=1; i<=1; i++) tenia que sacar el for of para que no quede de forma local
let valor = parseInt(prompt("Ingrese la cantidad de ejemplares que quieras"));
acumulador = valor * acumulador;
alert("El total es: $"+acumulador);

function calcularIva (precio){
return precio = 0.21;
}

let precio= 0.21;
let ivaCalculado = calcularIva (acumulador);

function calcularPrecioFinal (acumulador, valor, precio){
return acumulador * valor * precio;
}
let precioFinal= calcularPrecioFinal(acumulador , valor , precio);
alert ("El precio final con Iva incluido es $"+precioFinal);
*/


/*
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

console.log ("Lista de compras");
let producto = prompt("Ingresa el producto (s para salir)");
while (producto!=("s")){
    console.log(producto);
    producto= prompt("Ingresa el producto (s para salir)");
}

let dato;
do{
    dato= prompt("Ingresa tus datos (salir para finalizar)");
    if (dato != "salir"){
        console.log (dato);
    }
}while(dato!="salir")



let numero = parseInt (prompt("Ingrese la cantidad de veces que se repetira hola"));
for (let i=1; i<=numero; i++){
    console.log ("Hola");
}

//funciones sin parametros
function saludar (){
    console.log ("Buenos dias chicos");
}

saludar ();


function sumar(){
    let num1 = parseInt (prompt("Ingresa el primer numero"));
    let num2 = parseInt (prompt("Ingresa el segundo numero")); 
    let resultado = num1 + num2;
    console.log ("El resultado es: "+resultado);
}
sumar ();

for (let i=1; i<=3; i++){
    sumar ();
}

//funciones con parametros
function armarFrase(palabra1,palabra2){
    console.log("La frase es: "+palabra1+" "+palabra2+" .");
}
armarFrase("tengo","sueño");
armarFrase("buenas", "noches");

let p1 = prompt ("ingresa la primera palabra para la frase");
let p2 = prompt ("Ingresa la segunda palabra para la frase");

armarFrase(p1,p2);
*/


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

//objetos literales 
const libroJoaquin = {
    autor:"Joaquin Rufino",
    nombre: "Descubre y dejate descubrir",
    editorial:"Penguin Random House",
    paginas: 261,
    tapa: "dura",
    genero:"Auto-Ayuda"
}
//de esta forma podras observar todas propiedades con sus repectivos valores
console.log(libroJoaquin);

//obtener el valor con la variable del objeto, seguido de un punto y el nombre de la propiedad
console.log("El autor del libro es: "+libroJoaquin.autor);
console.log("El nombre del libro es: "+libroJoaquin.nombre);
//esta es otra forma de obtener los valores(entre corchetes)
console.log("El nombre de la editorial es: "+libroJoaquin["editorial"]);

//de esta forma podemos tambien cambiar el valor de la propiedad, ya sea con el punto o entre corchetes
libroJoaquin.tapa="Blanda";
console.log(libroJoaquin);

//funcion constructora
function Libro(autor,paginas,genero,){
    this.autor = autor;
    this.paginas = paginas;
    this.genero = genero;
}

const libro1 = new Libro("Joaquin Rufino", 261, "Auto-Ayuda");
const libro2 = new Libro("Joaqui Rufino", 150, "Ficcion");

console.log(libro1);
//se actualiza de la misma manera que las funciones literales
libro2.autor= "Joaquin";
console.log(libro2);


/*recordar este ejemplo para ponerlo en practica
//sirve para un carrito de compras cuando se venda o no se venda un producto
class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}
const producto1 = new Producto("libro1", "2500");
const producto2 = new Producto("libro2", "1500");
producto1.sumaIva();
producto2.sumaIva();
producto1.vender();
*/


//funciones de orden superior
//metodos de busqueda y transformacion
//estos metodos los voy a implementar para finaliar mi proyecto
const libros= [
    {
        isbn:"9788418073328",
        titulo: "Descubre y dejate Descubrir",
        publicacion:2019,
        paginas:261,
        autor:"Joaquin Rufino",
        genero:"Auto-Ayuda",
        editorial:"Penguin Random House",
        precio: 2500
    },
    {
        isbn:"078641807324",
        titulo: "Sin nombre",
        publicacion:"Proximamente, año 2024",
        paginas:"+150",
        autor:"Joaquin Rufino",
        genero:"Auto-Ayuda",
        editorial:"Penguin Random House",
        precio: 1500
    },
    {
        isbn:"9280418073820",
        titulo: "Sin nombre",
        publicacion:"Proximamente, año 2026",
        paginas:"+200",
        autor:"Joaquin Rufino",
        genero:"Ficcion",
        editorial:"Penguin Random House",
        precio: 2000
    },
];

//forEach
//si no es una sola linea de codigo deberas poner las llaves
//si es una sola linea pones la funcion flecha y el console o el alert
libros.forEach((libro) => console.log(libro.titulo));


//find
//si saco esto por alert me saldra el nombre del object, por esa razon lo mostramos por consola
//guarda en la constante libroDisponible el primer objeto que cumpla con la condicion libro.titulo=="Descubre y dejate descubrir"
let libroDisponible= libros.find((libro) => libro.titulo == "Descubre y dejate Descubrir");
console.log(libroDisponible);

libroDisponible = libros.find ((libro) => libro.titulo == "Otro nombre");
if (libroDisponible != undefined){
    console.log("Libro disponible");
}else{
    console.log("El libro buscado no esta en stock");
}

//filter
//guarda en un array todos los objetos que cumplan con la condicion
const listaEconomicos = libros.filter((libro) => libro.precio < 2200);
console.log(listaEconomicos);

//some - informa verdadero o false si existe algun elemento que cumpla con la condicion 
const existe = libros.some((libro) => libro.genero == "Ficcion");
console.log("Tienes stock del libro Ficcion? "+existe);

//map
//nuevo array con elementos transformados
const listaTitulos = libros.map((libro) => libro.titulo.toLowerCase());
console.log(listaTitulos)

const librosConIva = libros.map((libro) => {
    return{
        isbn: libro.isbn,
        titulo: libro.titulo.toCamelCase,
        publicacion: libro.publicacion,
        paginas:libro.paginas,
        autor:libro.autor,
        genero:libro.genero,
        editorial:libro.editorial,
        precio:libro.precio * 1.21
    }
});
console.log(librosConIva);

//reduce
const totalPrecios = libros.reduce((sumador, libro) => sumador + (libro.precio * 1.21), 0);
console.log("Total $"+totalPrecios);
/*
//sort (ordena de forma ascendente o descendente. alfabeticamente tambien se puede)
libros.sort((a,b) => a.precio - b.precio);
console.log(libros);*/

//ordenar alfabeticamente
libros.sort((a,b) => a.titulo.localeCompare(b.titulo));
console.log(libros);

/*
//Math
//tirar un dado
let dado = math.round(math.random()*5+1);
console.log("Tira los dados, te toco el numero: "+dado);
*/
//Date
let ahora = new Date();
console.log("Fecha y hora actual: "+ahora);

/*
//ejercicio de helado
const definirCompra = (n) =>{
    let din = prompt(`Dinero de ${n}`);
    if (din >= 0.6 && din <1) return (`${n}: helado de agua`);
    if (din >= 1 && din <1.6) return (`${n}: helado de crema`);
    if (din >= 1.6 && din <1.7) return (`${n}: helado de banana`);
    if (din >= 1.7 && din <1.8) return (`${n}: helado de dulce de leche`);
    if (din >= 1.8 && din <2.9) return (`${n}: helado de oreo`);
    if (din >= 2) return (`${n}: pote de 1/4 kg`);
    else return (`${n}: no te alcanza para comprar ningun helado`);
}
console.log(definirCompra("martin"));
console.log(definirCompra("joaquin"));
console.log(definirCompra("agustin"));
*/

//ejercicio 2
//primer persona que pasa despues de las 2 gratis
//menores no pueden pasar
let free = false;

const validarCliente = (time) => {
    let edad = prompt("¿Cual es tu edad?");
    if (edad >= 18){
        if (time >= 2 && time<7 && free == false){
            alert("Podes pasar gratis. Sos la primer persona despues de las 2hs");
            free = true;
        }else {
            alert (`Son las ${time}:00hs y podes pasar, pero tenes que pagar la entrada`);
        }
    }else{
        alert("Sos menor de edad no podes pasar");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(1);
validarCliente(2);
validarCliente(3.50);
validarCliente(4);


