// ESTE APARTADO PARA LAS VARIABLES

const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
const resultado = document.querySelector("#resultado");

const max = new Date().getFullYear();
const min = max - 20;

//Generando un objeto con la búsqueda
const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

//ESTE APARTADO PARA LOS EVENTOS

document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos();
  llenarSelect(); //Llena el Select	 de años
});

//EVENTOS PARA CADA UNO DE LOS SELECT

marca.addEventListener("change", (e) => {
  console.log("Se escogio una opción");
  console.log(e.target.value); //este valor es el que se debe de almacenar en el objeto que se creo
  datosBusqueda.marca = e.target.value;
  //console.log(datosBusqueda);
  //filtrarAuto();
});

//ESTE APARTADO PARA LAS FUNCIONES

//definimos la funcion mostrarAutos
function mostrarAutos() {
  autos.forEach((auto) => {
    const autoHTML = document.createElement("p");
    autoHTML.innerHTML = `
             <p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmisión: ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color}</p>
         `;
    resultado.appendChild(autoHTML);
  });
}

function llenarSelect() {
  console.log("LLenado el Select");
  console.log(min);
  console.log(max);
  for (let i = max; i >= min; i--) {
    //este es cambio para que me muestre los años desde el max
    //for (let i = min; i <= max; i++) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion);
  }
}

year.addEventListener("change", (e) => {
  datosBusqueda.year = e.target.value;
  console.log(datosBusqueda);
});

minimo.addEventListener("change", (e) => {
  datosBusqueda.minimo = e.target.value;
  console.log(datosBusqueda);
});

maximo.addEventListener("change", (e) => {
  datosBusqueda.maximo = e.target.value;
  console.log(datosBusqueda);
});

puertas.addEventListener("change", (e) => {
  datosBusqueda.puertas = e.target.value;
  console.log(datosBusqueda);
});

transmision.addEventListener("change", (e) => {
  datosBusqueda.transmision = e.target.value;
  console.log(datosBusqueda);
});

color.addEventListener("change", (e) => {
  datosBusqueda.color = e.target.value;
  console.log(datosBusqueda);
});

function filtrarAuto() {
  console.log("Filtrando por automoviles");
  const resultado = autos.filter(filtrarMarca);
  console.log(resultado);
}

function filtrarMarca(auto) {
  if (datosBusqueda.marca) {
    return auto.marca === datosBusqueda.marca;
  }
  return auto;
}