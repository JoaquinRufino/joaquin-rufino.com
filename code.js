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


const libroJoaquin = {
    autor:"Joaquin Rufino",
    nombre: "Descubre y dejate descubrir",
    editorial:"Penguin Random House",
    paginas: 261,
    tapa: "dura",
    genero:"Auto-Ayuda"
}
console.log(libroJoaquin);

alert("El autor del libro es: "+libroJoaquin.autor);
alert("El nombre del libro es: "+libroJoaquin.nombre);
//esta es otra forma de obtener los valores(entre corchetes)
alert("El nombre de la editorial es: "+libroJoaquin["editorial"]);



//array de objetos
const Libros= [
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

Libros.forEach((libro) => console.log(libro.titulo));


//reduce
const totalPrecios = Libros.reduce((sumador, libro) => sumador + (libro.precio * 1.21), 0);
console.log("La compra de los tres libros disponibles\nDa un total de $"+totalPrecios+" Con Iva incluido");


//indexOf
const libros = ["Descubre y dejate descubrir" , "descubre y dejate descubrir"];

let disponible = libros.indexOf ("Descubre y dejate descubrir" , "descubre y dejate descubrir")

let nombreLibro = prompt("Ingresa el nombre del libro a comprar");
disponible = libros.indexOf(nombreLibro);

if(disponible !=-1){
    alert("El libro, Descubre y dejate descubrir se encuentra disponible");
}else{
    alert("No tenemos disponible ese libro. Sin stock");
}




