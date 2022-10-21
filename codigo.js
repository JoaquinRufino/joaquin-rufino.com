//eventos
//esto funcionara con un solo producto, si utiizas mas habra algunas variantes
const carrito = [];
let totalCarrito;
const fotoLibro = {
    imagen: "../assets/img/foto-3.jpg",
    nombre: "Descubre y dejate descubrir",
    publicacion: "Publicado en 2019",
    precio:2500
}

let tarjetas = document.getElementById("tarjetas");
tarjetas.innerHTML = `
    <div class="card" style="width: 26rem;" >
        <img src=${fotoLibro.imagen} class="card-img-top" alt=${fotoLibro.nombre}>
        <div class="card-body">
            <h5 class="card-title">${fotoLibro.nombre}</h5>
            <p class="card-text">$ ${fotoLibro.precio}</p>
            <button id="mybutton" class="btn btn-primary">Comprar</button>
        </div>
    </div>
`;

const boton = document.getElementById("mybutton");

//opcion 1

boton.addEventListener("click",agregarAlCarro);

function agregarAlCarro(){
    //aqui puedo agregar una variable sumadora
    //para poder con for ir sumando i++ y que cuenten los prodcutos
    alert("Agregaste un nuevo producto al carrito");
    carrito.push(fotoLibro);
    console.table(carrito);
}

//podria ser un globito abajo del boton con algun mensaje
boton.onmouseover = () => {
    //de esta forma le cambiamos el color al boton cuando pasamos por arriba
    boton.className="btn btn-success";
}

boton.onmouseout = () => {
    //de esta forma le devolvemos el color original al boton cuando salimos de arriba con el mouse
    boton.className="btn btn-primary";
}



        //evento para cada boton(ponemos una funcion para que reciba parametros porque el addeventlistener no me permite recibir parametros)
        document.getElementById(`${mybutton}`).addEventListener("click",function(){
            agregarAlCarrito(libros);
        });

function agregarAlCarrito(libroComprado){
    carrito.push(libroComprado);
    console.table(carrito);
    alert("Producto: "+libroComprado.nombre+" agregado al carrito!!");
    document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${libroComprado.publicaciom}</td>
            <td>${libroComprado.nombre}</td>
            <td>${libroComprado.precio}</td>
        </tr>
    `;
    totalCarrito = carrito.reduce((acumulador,libros)=> acumulador + libros.precio, 0);
    document.getElementById("total").innerHTML = "Total a pagar: $"+totalCarrito;

}