//eventos
//esto funcionara con un solo producto, si utiizas mas habra algunas variantes
const carrito = [];
let totalCarrito;
let contenedor= document.getElementById("tarjetas");

function renderizarTarjetas(){
    for(const libro of fotoLibro){
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
    fotoLibro.forEach(libro => {
    //evento para cada boton que pondre
    document.getElementById(`btn${libro.Isbn}`).addEventListener("click",function (){
        agregarAlCarrito(libro);
    });
    })
}

renderizarTarjetas();


/*
boton.onmouseover = () => {
    //de esta forma le cambiamos el color al boton cuando pasamos por arriba
    boton.className="btn btn-success";
}
boton.onmouseout = () => {
    //de esta forma le devolvemos el color original al boton cuando salimos de arriba con el mouse
    boton.className="btn btn-primary";
}
*/

function agregarAlCarrito(libroComprado){
    carrito.push(libroComprado);
    console.table(carrito);
    alert(`${libroComprado.nombre} agregado al carrito!!`);
    document.getElementById("tablabody").innerHTML += `
        <tr>
            <td class="td-comprar">${libroComprado.Isbn}</td>
            <td class="td-comprar">${libroComprado.nombre}</td>
            <td class="td-comprar">$ ${libroComprado.precio}</td>
        </tr>
    `;
    totalCarrito = carrito.reduce((acumulador,libro)=> acumulador + libro.precio, 0);
    document.getElementById("total").innerText = "Total a pagar: $"+totalCarrito;
}

