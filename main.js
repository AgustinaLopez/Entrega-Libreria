
//Array de Objetos - Lista de Hoteles
const Hoteles = [
    Hotel1 = {id:'Hotel1', nombre: 'All Star Movies', categoria: 'Economico' ,price: 1500, extra: "desayuno incluido", img: "img/hoteles/movies.jpg"},
    Hotel2 = {id:'Hotel2', nombre: 'All Star Music', categoria: 'Economico' ,price: 1500, extra: "desayuno incluido", img: "img/hoteles/music.jpg"},
    Hotel3 = {id:'Hotel3',nombre: 'All Star Sports', categoria: 'Economico' ,price: 1500, extra: "desayuno incluido", img: "img/hoteles/sports.jpg"},
    Hotel4 = {id:'Hotel4',nombre: 'Caribbean Beach Resort', categoria: 'Moderado'  ,price: 2000, extra: "entrada temprana", img: "img/hoteles/caribbean.jpg"},
    Hotel5 = {id:'Hotel5',nombre: 'Coronado Spring', categoria: 'Moderado' ,price: 2000, extra: "entrada temprana", img: "img/hoteles/coronado.jpg"},
    Hotel6 = {id:'Hotel6',nombre: 'Port Orleans', categoria: 'Moderado' ,price: 2000, extra: "entrada temprana", img: "img/hoteles/orleans.jpg"}, 
    Hotel7 = {id:'Hotel7',nombre: 'Contemporany Resort', categoria: 'Deluxe' ,price: 3500, extra: "descuento", img: "img/hoteles/contemporany.jpg"},
    Hotel8 = {id:'Hotel8',nombre: 'Animal Kingdom Lodge', categoria: 'Deluxe' ,price: 3500, extra: "descuento", img: "img/hoteles/animal.jpg"},
    Hotel9 = {id:'Hotel9',nombre: 'Grand Floridian', categoria: 'Deluxe' ,price: 3500, extra: "descuento", img: "img/hoteles/floridian.jpg"},
];

//Precio Hoteles
Hoteles.forEach ( (hotel) =>{ 
    let contenedor = document.createElement ("div");
    contenedor.innerHTML = `<div class="card" style="width: 18rem;">
    <img src=${hotel.img} class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title"> ${hotel.nombre} </h5>
    <h6> ${hotel.price} </h6>
    <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium autem molestiae laborum accusamus, repellat, maiores magni nesciunt quis corrupti repudiandae inventore in architecto, facere nihil asperiores nostrum amet a perferendis.</p>
    <button class="btn btn-success btn-sm" id="botonTres${hotel.id}"> Reservar </button>
    </div>
    </div> `;
  document.body.appendChild (contenedor)
});


//Array de Objetos - Lista de Tickets
const Tickets = [
  Ticket1 = {tipo: 'Un parque por Día', price: 1500},
  Ticket2 = {tipo: 'Park Hopper', price: 2500},
];



//Primer Fromulario
//Cantidad de Personas
let cantidadPersonas = [ '', 1, 2, 3, 4, 5, 6, 7, 8];
let pasajeros = document.getElementById('pasajeros'); 

function opciones(lista, opcion){
    let elemento = "";
    for (let i = 0; i < lista.length; i++){
        elemento += "<option>" + lista[i] + "</option>";
    }
    opcion.innerHTML = elemento
} 
opciones(cantidadPersonas, pasajeros)


//Fecha
let llegada = document.getElementById("llegada");
let salida = document.getElementById("salida");

const fechaBoton = document.getElementById ('botonFecha');
botonFecha.addEventListener ('click', fecha); 
function fecha(){   
    localStorage.setItem(llegada.name, llegada.value);
    localStorage.setItem(salida.name, salida.value);
   
    let fechaLlegada = localStorage.getItem (llegada.name);
    console.log (fechaLlegada);
    let fechaSalida = localStorage.getItem (salida.name);
    console.log (fechaSalida);
    let cantidadDeDias = fechaSalida - fechaLlegada;
    console.log (cantidadDeDias)
}



//Primer Paso
function paqueteDatos(){
    cantidadPersonas()
    fecha()
    
    ?(llegada.value, salida.value , pasajeros.value === null || llegada.value, salida.value , pasajeros.value === '')
        //sweet alert
        : window.location.href = "paquete.html";  
}


//Paquete Precio Total 
let carrito = [];

const agregarAlCarrito = (hotelId) => {
   const reserva = Hoteles.find (hotel => hotel.id === hotelId);
   carrito.push (reserva);

};

//const botonTres = document.getElementById ("botonTres${hotel.id}");
//botonTres.addEventListener('click', () => {
  //agregarAlCarrito (hotelId);
  //Toastify({
    //text: "¡Agregado al Carrito!",
    //duration: 3000
    //}).showToast();
//});



  
//Boton Principal
//const boton = document.getElementById ('botonUno');
//boton.addEventListener ('click', () => {
 //Swal.fire(
    //'¡Listo!',
    //'Te llegará un correo de confirmación!',
    //'success'
  //)
//});



//Formulario de Consulta
//Boton Dos
const botonDos = document.getElementById ('botonFormulario');
botonDos.addEventListener ('click', () => {
  Swal.fire({
     title: '¡Listo!',
     text: 'Te llegará un correo de confirmación!',
     icon: 'success',
    
    })
 });


