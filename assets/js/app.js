
import{rutas} from './rutas.js';






document.addEventListener("DOMContentLoaded", ()=>{
    llenaRutas();
    llenarMinimo();
    llenarMaximo();
});




const selectRutas= document.getElementById("selectRutas");
const selectMinimo= document.getElementById("selectMinimo");
const selectMaximo= document.getElementById("selectMaximo");
const estado= document.getElementById("estado");

const calificacion= document.getElementById("calificacion");
const tipoVia= document.getElementById("tipoVia");





let infoRutas={
    id: "",
    nombre: "",
    minKilometros: "",
    maxKilometros: "",
    estado: "",
    calificacion: "",
    tipoVia: ""

};

//valores de los select

selectRutas.addEventListener('change', (e)=>{
    console.log(e.target.value);
    infoRutas.nombre= e.target.value;   //aqui indrodusco el valor al objeto de datos
    

    

});

selectMinimo.addEventListener('change', (e)=>{
    console.log(e.target.value);
    infoRutas.minKilometros= parseInt(e.target.value);  //aqui indrodusco el valor al objeto de datos
    

    

})

selectMaximo.addEventListener('change', (e)=>{
    console.log(e.target.value);
    infoRutas.maxKilometros= parseInt(e.target.value);   //aqui indrodusco el valor al objeto de datos
    

    

})

estado.addEventListener('change', (e)=>{
    console.log(e.target.value);
    infoRutas.estado= e.target.value;   //aqui indrodusco el valor al objeto de datos
    

    

})

calificacion.addEventListener('change', (e)=>{
    console.log(e.target.value);
    infoRutas.calificacion= parseInt(e.target.value);   //aqui indrodusco el valor al objeto de datos
    

    

})

tipoVia.addEventListener('change', (e)=>{
    console.log(e.target.value);
    infoRutas.tipoVia= e.target.value;   //aqui indrodusco el valor al objeto de datos
    

    

})


//fin valores de los select







//funciones de llenar
function llenaRutas(){
    for(let i=0; i<rutas.length; i++){
        const option= document.createElement("option");
        option.innerHTML = rutas[i].nombre;
        option.value= rutas[i].nombre;
        selectRutas.appendChild(option);


    }
}

function llenarMinimo(){
    for(let i=0; i<rutas.length; i++){
        const option= document.createElement("option");
        option.innerHTML = rutas[i].minKilometros;
        option.value= rutas[i].minKilometros;
        selectMinimo.appendChild(option);


    }


}

function llenarMaximo(){

    for(let i=0; i<rutas.length; i++){
        const option= document.createElement("option");
        option.innerHTML = rutas[i].maxKilometros;
        option.value= parseInt(rutas[i].maxKilometros);
        selectMaximo.appendChild(option);


    }

}

//fin llenar


let allRutas=[];
//buscar

const form= document.getElementById('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(infoRutas);

    filtrarNombre();
    filtrarMinKilometros();
    filtrarMaxKilometros();
    filtrarEstado();
    filtrarCalificacion();
    FiltrarTipoVia();

    console.log(allRutas)
    
    mostrar(allRutas);
    limpia();

    





})





function limpia(){
    for(let i= 0; allRutas.length ; i++){
        allRutas.pop(i);

    }
}



//filtracines



function filtrarNombre(){
    rutas.filter((ruta)=>{
        if(ruta.nombre==infoRutas.nombre){
            console.log(ruta)
            allRutas= [...allRutas, ruta]

        }
    })
}


function filtrarMinKilometros(){
    rutas.filter((ruta)=>{
        if(infoRutas.minKilometros==ruta.minKilometros){
            console.log(ruta)
            allRutas= [...allRutas, ruta]

        }
        
    })
}

function filtrarMaxKilometros(){
    rutas.filter((ruta)=>{
        if(infoRutas.maxKilometros==ruta.maxKilometros){
            console.log(ruta)
            allRutas= [...allRutas, ruta]

        }
        
    })
}

function filtrarEstado(){
    rutas.filter((ruta)=>{
        if(ruta.estado== infoRutas.estado){
            console.log(ruta);
            allRutas= [...allRutas, ruta]
        }

    })

    
}


function filtrarCalificacion(){
    rutas.filter((ruta)=>{
        if(ruta.calificacion==infoRutas.calificacion){
            console.log(ruta)
            allRutas= [...allRutas, ruta]
        }

    })       
}

function FiltrarTipoVia(){
    rutas.filter((ruta)=>{
        if(ruta.tipoVia== infoRutas.tipoVia){
            console.log(ruta)
            allRutas= [...allRutas, ruta]
        }

    })
}


//mostrar

const table= document.getElementById("table")
function mostrar(allRutas){
    
    table.innerHTML=`
        <tr>
            <td>Nombre de la Ruta</td>
            <td>Minimo de la Ruta</td>
            <td>Maximo de la Ruta</td>
            <td>Estado de la Ruta</td>
            <td>Calificacion</td>
            <td>Tipo de Via</td>
        </tr>`;

    allRutas.forEach((ruta)=>{

        const tr= document.createElement("tr");
        tr.innerHTML = `

        




        <tr>
            <td>${ruta.nombre}</td>
            <td>${ruta.minKilometros}</td>
            <td>${ruta.maxKilometros}</td>
            <td>${ruta.estado}</td>
            <td>${ruta.calificacion}</td>
            <td>${ruta.tipoVia}</td>
        </tr>
        
        
        `

        table.appendChild(tr);

    })

    
}



