//eventos
let productosJSON = [];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//fetch para acceder a json
fetch("../productos.json")
    .then(data => data.json())
    .then(json => {
        productosJSON = json
        renderizarTarjetas()
    })


let totalCarrito;
let contenedor= document.getElementById("tarjetas");
let botonFinalizar = document.getElementById("finalizar");

const DateTime = luxon.DateTime;
let ahora = DateTime.now();


function renderizarTarjetas(){
    for(const libro of productosJSON){
        contenedor.innerHTML += `
        <div class="card" style="width: 26rem;" >
        <img src=${libro.imagen} class="card-img-top" alt=${libro.nombre}>
        <div class="card-body">
        <h5 class="card-title">${libro.nombre}</h5>
        <p class="card-text">$ ${libro.precio}</p>
        <button id="btn${libro.Isbn}" class="btn btn-primary">Comprar</button>
        </div>
        </div>
        `;
    }
    //eventos
    productosJSON.forEach(libro => {
        //evento para cada boton 
        document.getElementById(`btn${libro.Isbn}`).addEventListener("click",function (){
            agregarAlCarrito(libro); 
        });
    })
}



function agregarAlCarrito(libroComprado){
    carrito.push(libroComprado);
    //console.table(carrito);
    //alert(`${libroComprado.nombre} agregado al carrito!!`);
    //sweet alert 
    Swal.fire({
        title:libroComprado.nombre,
        text: 'Agregado al Carrito!!',
        icon: 'success',
        imageWidth: 200,
        imageHeight: 120,
        showConfirmButton: false,
        timer: 1500,
        background:"black",
        color:"white",
        imageAlt:libroComprado.nombre,
    })
    renderizarCarrito()
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const renderizarCarrito = () =>{
    //vaciamos el carrito del html para que no se duplique
    document.getElementById("tablabody").innerHTML="";
    carrito.forEach(libroComprado =>{
        document.getElementById("tablabody").innerHTML += `
        <tr>
        <td class="td-comprar">${libroComprado.Isbn}</td>
        <td class="td-comprar">${libroComprado.nombre}</td>
        <td class="td-comprar">$ ${libroComprado.precio}</td>
        <td class=td-boton><button class="btn btn-light" onclick="eliminar(event)">🗑️</button></td>
        </tr>
        `;
    })
    totalCarrito = carrito.reduce((acumulador,libro)=> acumulador + libro.precio,0);
    document.getElementById("total").innerText = "Total a pagar: $"+totalCarrito;
}

//llamamos a la funcion renderizarcarrito
renderizarCarrito();


//boton para finalizar compra
botonFinalizar.onclick = () =>{
    if(carrito.length==0){
        Swal.fire({
            title:'El carrito esta Vacio',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500,
            background:"black",
            color:"white",
            width: 400,
        })
    }else{
    let ahora = DateTime.now();
    console.log("Realizaste tu compra el dia: "+ahora.toLocaleString(DateTime.DATETIME_SHORT));
    carrito = [];
    document.getElementById("tablabody").innerHTML="";
    document.getElementById("total").innerText = "Total a pagar: $";
    //localStorage removeItem para vaciar el carrito cuando se finalice la compra y se vuelva a ingresar
    localStorage.removeItem("carrito");
    
    //Indicacion para recibir ayuda de la Profe👇
    //Me gustaria una indicacion si en esta parte lo adecuado es sacar el console del horario de la compra
    //de reemplazo podria poner un sweet alert que diga pendiente y compra realizada
    //o deberia realizar un remove para que el console no se agregue a la anterior compra?
}
}

//para eliminar productos del carrito 
function eliminar(ev) {
    let fila = ev.target.parentElement.parentElement;
    let Isbn = fila.children[0].innerText;
    let indice = carrito.findIndex(libro => libro.Isbn == Isbn);
    //remueve el producto del carro
    carrito.splice(indice, 1);
    //console.table(carrito);
    //remueve la fila de la tabla
    fila.remove();
    //recalcular el total
    let totalCarritoCalculado = carrito.reduce((acumulador, libro) => acumulador + libro.precio, 0);
    total.innerText = "Total a pagar $: "+totalCarritoCalculado;
    //storage
    localStorage.setItem("carrito", JSON.stringify(carrito));
}



// dark/light mode
const boton = document.getElementById("mode");
const cuerpo = document.getElementById("cuerpo")
const principal = document.getElementById("principal");
//de esta forma quedara guardado el modo que indiquemos cuando volvamos a ingresar
let modo = localStorage.getItem("modo");

//primer renderizado, con esto cuando ingreses esta el modo que indicaste
if(modo !=null){
    document.body.className=modo;
    principal.className="p-3 "+modo;
    if(modo=="dark"){
        boton.innerText="🔅";
    }else{
        boton.innerText="🌙";
    }
}else{
    modo="dark";
}

boton.onclick = () => {
    if(modo=="dark"){
        document.body.className="light";
        //de esta forma con classlist seleccionamos toda la lista de clase
        //y removemos lo que queremos de esa lista para no nombrar todas las clases
        //luego agregamos la que queremos
        principal.classList.remove("dark");
        principal.classList.add("light");
        boton.innerText="🌙";
        modo="light";
    }else{
        document.body.className="dark";
        principal.classList.remove("light");
        principal.classList.add("dark");
        boton.innerText="🔅";
        modo="dark";
    }
    localStorage.setItem("modo", modo);
}



