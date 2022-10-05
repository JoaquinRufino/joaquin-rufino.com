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


let fruta= prompt ("Ingrese la fruta y le dire el precio por kg (s para salir)")
while (fruta!="s"){
    switch (fruta){
        case "manzana":
            console.log ("El precio de la manzana es 250$");
            break;
        case "banana":
            console.log("El precio de la banana es $150");
            break;
        case "frutilla":
            console.log ("El precio de la frutilla es $500");
            break;
        //aqui no podemos utilizar operadores logicos
        case "uva":
        case "naranja":
            console.log ("El precio de la uva y la naranja es de 350$");
            break;
        default:
            console.log ("Fruta sin stock!!");
            break;
    }
    fruta= prompt ("Ingrese la fruta y le dire el precio por kg (s para salir)")
}

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

function calcularEdad(anioNac,anioActual){
    let edad=anioActual - anioNac;
    alert("Tienes "+edad+" años");
}

calcularEdad (parseInt(prompt("Ingresa tu año de nacimiento")),prompt("Ingresar año actual"));


//calculadora
function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
            case "-":
                return primerNumero - segundoNumero;
                break;
                case "*":
                    return primerNumero * segundoNumero;
                    break;
                    case "/":
                        return primerNumero / segundoNumero;
                        break;
                        default:
                            return 0;
            break;
    }
}
let resultado = calculadora(parseFloat(prompt("Ingresa el primer numero para calcular")),parseFloat(prompt("Ingrese el segundo numero")),prompt("Ingrese el operador que desea(+ , - , * o /"));
alert("El resultado de la operacion es: "+resultado);


/*
//funciones anonimas
const descuento = function (precio){return precio * 0.10}
console.log (descuento(2000));

//funcion flecha (arrow function)
const suma = (num1,num2,num3)=> num1+num2+num3;
console.log (suma(5,10,5));*/


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

/*
//otra funcion constructora

function Ejemplar(objLiteral){
this.autor=objLiteral.autor;
this.nombre=objLiteral.nombre;
this.genero=objLiteral.genero;
}

const ejemplar1 = new Ejemplar(libroJoaquin)
console.log(ejemplar1);


//metodos de string
let frase = "Hola, mi nombre es Joaquin";
//Propiedad de objeto String: Largo de la cadena. puedes realizarlo con un prompt para que ingreses los datos que quieras
console.log("La frase contiene: "+frase.length+" caracteres");
//Método de objeto String: Pasar a minúscula.
console.log(frase.toLowerCase());
//Método de objeto String: Pasar a mayúscula.
console.log(frase.toUpperCase());


//metodos personalizados
function Automovil(marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
    //metodo para automovil
    this.mostrarAuto = function (){console.log("Soy un "+this.marca+" "+this.modelo)};
}

const automovil1 = new Automovil ("Vw", "Amarok");
automovil1.mostrarAuto ();
const automovil2 = new Automovil ("Fiat", "Palio");
automovil2.mostrarAuto ();


//Diapo25
const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log( "nombre" in persona1);
//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log( "origen" in persona1);
//recorremos todas las propiedades del objeto con el ciclo for...in
for (const propiedad in persona1) {
    console.log("Propiedad: "+propiedad)
    console.log("Valor: "+persona1[propiedad]);
}


//clases
class Computadora{
    constructor(tipo, sistema){
        this.tipo = tipo;
        this.sistema = sistema;
    }
    //metodos
    mostrarCompu(){
        console.log(this.tipo+" "+this.sistema);
        //tambien podemos hacerlo con return en reemplazo de console (se hace un string)
        // return "Detalles de la Pc: "+this.tipo+" "+this.sistema;
    }
    actualizarSistema(nuevoSistema){
    this.sistema = nuevoSistema;
    console.log("Sistema actualizado");
    }
}

const compu1 = new Computadora ("Notebook", "macOs");
const compu2 = new Computadora ("escritorio", "Linux");

console.log(compu1);
compu2.mostrarCompu();
//y si queremos mostrar los detalles del return en la pagina hacemos..
//console.log(compu2.mostrarCompu());

compu2.actualizarSistema("Windows 11");
*/

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

//ejercicio 1(cotizador de dolares/pesos)
const DOLAR_COMPRA=284;
const DOLAR_VENTA=288;
function cotizarDolar(pesos){
    let conversionDolar = pesos / DOLAR_VENTA;
    return conversionDolar;
}

function cotizarPesos(dolar){
    let conversionPesos = dolar * DOLAR_COMPRA;
    return conversionPesos;
}

let tipoCotizacion = prompt("****Cotizador *****\n1-Cambiar pesos a dolares\n2-Cambiar dolares a pesos");

if(tipoCotizacion=="1"){
    let pesosACambiar =parseFloat(prompt("Ingresa la cantidad en pesos"));
    let dolares = cotizarDolar (pesosACambiar);
    alert("Con $"+pesosACambiar+" podes comprar U$$"+dolares);
}else if (tipoCotizacion=="2"){
    let dolaresACambiar =parseFloat(prompt("Ingresa la cantidad en dolares"));
    let pesos = cotizarPesos (dolaresACambiar);
    alert("Con U$$"+dolaresACambiar+" podes comprar $"+pesos);
}else{
    for(let i=1; i<=2; i++){
        alert("Debes ingresar la opcion 1 y/o 2.\n Intenta nuevamente, restan "+(2-i)+" intentos"); 
        tipoCotizacion = prompt("****Cotizador *****\n1-Cambiar pesos a dolares\n2-Cambiar dolares a pesos"); 
        alert ("Error de opcion");
        break;
}
}


//ejercicio 2 clases
class Tienda{
    constructor(nombre, direccion, propietario,rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
    //resolucion del ejercicio 3 (metodo dentro de la clase. solo vale para las tiendas por eso es metodo)
    estaAbierto(hora){
        if((hora>=8 && hora<=12) || (hora>=15 && hora<=19)){
            return true;
        }else{
            return false;
        }
    }
}

//const tienda1 = new Tienda(prompt("Indica el nombre, direccion, propietario y rubro de la tienda"));
const tienda2 = new Tienda("walmart","moreno", "alan","alimentos");
const tienda3 = new Tienda(prompt("Indica el nombre, direccion, propietario y rubro de la tienda"));

//continua ejercicio 3
let estadoTienda=tienda3.estaAbierto();

for(let i=1; i<=3; i++){
    let horario =parseInt(prompt("Ingresa el horario en el que iras a la tienda"));
    //aca declaramos la variable si no la declaramos por fuera  
    let estadoTienda = tienda3.estaAbierto(horario);
    if (estadoTienda==true){
        alert("La tienda esta abierta!! Te esperamos!!");
        break;
    }else{
        alert("Esta cerrado!! Abre de 8-12AM / 15--19PM");
    }
}


//array
//listas
const listaCompras = ["fideos", "papas", "pan","lechuga", "espinaca", "sal", "harina", "mandarinas"];
console.log (listaCompras);
console.log(listaCompras[3]);
console.log(listaCompras[0]+" y "+listaCompras[5]);

//recorrer un array
for (let i=0; i<=7; i++){
    console.log(listaCompras[i]);
}

//longitud del array
let cantidadElementos = listaCompras.length;
console.log("El listado de compras tiene "+cantidadElementos+" elementos");
//de esta manera no hace falta ir contando porque el length pone todos los elementos. pones el < estricto para que no vaya al octavo elemento inclusive 
for (let i=0; i<listaCompras.length; i++){
    console.log(listaCompras[i]);
}

//metodo push - agrega un elemento a la lista
listaCompras.push("Miel");
console.log(listaCompras);

//metodo unshift
listaCompras.unshift("banana");
console.log(listaCompras);

//metodo poop (quita el ultimo elemento)
listaCompras.pop();
console.log(listaCompras);

//metodo shift (quita el primer elemento de la lista)
listaCompras.shift();
console.log(listaCompras);

//metodo splice elimina elementos en cualquier posicion
listaCompras.splice(2,2);
console.log(listaCompras);

//metodo join(une todos los elementos en un string con un separador)
console.log(listaCompras.join(" ** "));

//metodo concat (union de cadenas, une dos array)
const bebidas=["coca cola", "Agua"];
const listaCompleta = listaCompras.concat (bebidas);
console.log(listaCompleta);

//metodo slice(ultimo elemento seleccionado es excluyente)copia una parte del array
const copia = listaCompleta.slice(4,7);
console.log(copia);

//metodo indexOF (DEVUELVE EL INDICE EN EL QUE SE ENCUENTRA UN ELEMENTO)

//metodo indexOf - devuelve el indice en el que se encuentra un elemento
/*const alumnos = ["Gomez","Perez","Gallegos","Torres","Galvez","Aguilar"];

let posicion = alumnos.indexOf("Gallegos");
console.log("El alumno se encuentra en la posicion "+posicion);

posicion = alumnos.indexOf("Marquez");
console.log("El alumno se encuentra en la posicion "+posicion);

let apellido=prompt("Ingresa el apellido del alumno");
posicion = alumnos.indexOf(apellido);

if(posicion != -1){
    console.log("El alumno se encuentra en la posicion "+posicion);
}else{
    console.log("El alumno no se encuentra en éste grupo");
}*/

//metodo indexOf
const libros = ["Descubre y dejate descubrir" , "descubre y dejate descubrir", "Proximamente"];

let disponible = libros.indexOf ("Descubre y dejate descubrir" , "descubre y dejate descubrir")

let nombreLibro = prompt("Ingresa el nombre del libro a comprar");
disponible = libros.indexOf(nombreLibro);

if(disponible !=-1){
    alert("El libro, Descubre y dejate descubrir se encuentra disponible");
}else{
    alert("No tenemos disponible ese libro. Sin stock");
}

//metodoinclude - si esta el elemento devuelve true si no se encuentra devuelve false
const edades = [23, 24,28,35];
let existe = edad.includes(23);
console.log(existe);

//reverse - invierte el orden del array
edades.reverse();
console.log(edades);



