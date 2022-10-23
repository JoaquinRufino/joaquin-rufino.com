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


// dark/light mode
const boton = document.getElementById("mode");
const cuerpo = document.getElementById("cuerpo")
const principal = document.getElementById("principal");
//de esta forma quedara guardado el modo que indiquemos cuando volvamos a ingresar
let modo = localStorage.getItem("modo");

//primer renderizado, con esto cuando ingreses esta el modo que indicaste
if(modo !=null){
    document.body.className=modo;
    cuerpo.className="pt-0 mt-0 mb-0 m-0 p-0 "+modo;
    if(modo=="dark"){
        boton.innerText="Light mode";
    }else{
        boton.innerText="Dark mode";
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
        boton.innerText="Dark mode";
        modo="light";
    }else{
        document.body.className="dark";
        principal.classList.remove("light");
        principal.classList.add("dark");
        boton.innerText="Light mode";
        modo="dark";
    }
    localStorage.setItem("modo", modo);
}


