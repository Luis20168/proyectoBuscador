
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
    Kilometros: "",
    estado: "",
    calificacion: "",
    tipoVia: ""

};

//valores de los select

selectRutas.addEventListener('change', (e)=>{
    console.log(e.target.value);
    infoRutas.nombre= e.target.value;   //aqui indrodusco el valor al objeto de datos
    filtrarNombre();
    
    

    

});

selectMinimo.addEventListener('change', (e)=>{
    console.log(e.target.value);
    infoRutas.Kilometros= parseInt(e.target.value);  //aqui indrodusco el valor al objeto de datos
    filtrarMinKilometros();
   
    

    

})

// selectMaximo.addEventListener('change', (e)=>{
//     console.log(e.target.value);
//     infoRutas= parseInt(e.target.value);   //aqui indrodusco el valor al objeto de datos
    
    // filtrarMaxKilometros();

    

    

// })

estado.addEventListener('change', (e)=>{
    console.log(e.target.value);
    infoRutas.estado= e.target.value;   //aqui indrodusco el valor al objeto de datos
    
    filtrarEstado();
    
    

    

})

calificacion.addEventListener('change', (e)=>{
    console.log(e.target.value);
    infoRutas.calificacion= parseInt(e.target.value);   //aqui indrodusco el valor al objeto de datos
    
    filtrarCalificacion();
    
    

    

})

tipoVia.addEventListener('change', (e)=>{
    console.log(e.target.value);
    infoRutas.tipoVia= e.target.value;   //aqui indrodusco el valor al objeto de datos
    FiltrarTipoVia()
    
    
    

    

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
        option.innerHTML = rutas[i].kilometros;
        option.value= rutas[i].kilometros;
        selectMinimo.appendChild(option);


    }


}

function llenarMaximo(){

    for(let i=0; i<rutas.length; i++){
        const option= document.createElement("option");
        option.innerHTML = rutas[i].kilometros;
        option.value= parseInt(rutas[i].kilometros);
        selectMaximo.appendChild(option);


    }

}

//fin llenar



//buscar

// const form= document.getElementById('form');
// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
    

//     
//     
//     
//     
//     
//     FiltrarTipoVia();

    
    
   
//     // limpia();

    





// })





function limpia(){
    for(let i= 0; allRutas.length ; i++){
        allRutas.pop(i);

    }
}



//filtracines






function filtrarNombre(){
    const resultado= rutas.filter((ruta)=>{
        if(ruta.nombre ){
            return ruta.nombre===infoRutas.nombre

        }

        return ruta
    })
    console.log(resultado);

    
    


    
    mostrar(resultado)
}




function filtrarMinKilometros(){
    const resultado= rutas.filter((ruta)=>{
        if(ruta.kilometros){
            return ruta.kilometros==infoRutas.kilometros
            

        }

        return ruta
        
    })

    console.log(resultado)
    mostrar(resultado)


}

function filtrarMaxKilometros(){
    const resultado= rutas.filter((ruta)=>{
        if(ruta.maxKilometros){
            return ruta.maxKilometros===infoRutas.maxKilometros
            

        }

        return ruta
        
    })

    console.log(resultado)
    mostrar(resultado)
}

function filtrarEstado(){
    const resultado= rutas.filter((ruta)=>{
        if(ruta.estado){
            return ruta.estado===infoRutas.estado
           
        }

        return ruta

    })

    console.log(resultado)
    mostrar(resultado)

    

    
}


function filtrarCalificacion(){
    const resultado= rutas.filter((ruta)=>{
        if(ruta.calificacion){
            return ruta.calificacion===infoRutas.calificacion;
            
        }

        return ruta

    })  
    console.log(resultado)
    mostrar(resultado)
     
}

function FiltrarTipoVia(){
    const resultado= rutas.filter((ruta)=>{
        if(ruta.tipoVia){
            return ruta.tipoVia===infoRutas.tipoVia;
            
        }

        return ruta

    })

    console.log(resultado)
    mostrar(resultado)
}


//mostrar
const table= document.getElementById("table")
function mostrar(resultado){
    
    table.innerHTML=`
        <tr>
            <td>Nombre de la Ruta</td>
            <td>Minimo de la Ruta</td>
            <td>Maximo de la Ruta</td>
            <td>Estado de la Ruta</td>
            <td>Calificacion</td>
            <td>Tipo de Via</td>
        </tr>`;

    resultado.forEach((ruta)=>{

        const tr= document.createElement("tr");
        tr.innerHTML =`


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





