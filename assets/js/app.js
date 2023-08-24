
import{rutas} from './rutas.js';


document.addEventListener("DOMContentLoaded", ()=>{
    llenaRutas();
    llenarMinimo();
    llenarMaximo();
});


const form= document.getElementById('form')

const selectRutas= document.getElementById("selectRutas");
const selectMinimo= document.getElementById("selectMinimo");
const selectMaximo= document.getElementById("selectMaximo");



let infoRutas={
    id: "",
    nombre: "",
    minKilometros: "",
    maxKilometros: "",
    estado: "",
    calificacion: "",
    tipoVia: ""

};










selectRutas.addEventListener('change', (e)=>{
    console.log(e.target.value);
    infoRutas.nombre= e.target.value;   //aqui indrodusco el valor al objeto de datos
    

    

})

selectMinimo.add

//funciones de llenar
function llenaRutas(){
    for(let i=0; i<rutas.length; i++){
        const option= document.createElement("option");
        option.innerHTML = rutas[i].nombre
        selectRutas.appendChild(option);


    }
}

function llenarMinimo(){
    for(let i=0; i<rutas.length; i++){
        const option= document.createElement("option");
        option.innerHTML = rutas[i].minKilometros;
        selectMinimo.appendChild(option);


    }


}

function llenarMaximo(){

    for(let i=0; i<rutas.length; i++){
        const option= document.createElement("option");
        option.innerHTML = rutas[i].maxKilometros;
        selectMaximo.appendChild(option);


    }

}

