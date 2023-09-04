
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
    filtros()
    // allFiltro();
    
    

    

});

selectMinimo.addEventListener('change', (e) => {
    console.log(e.target.value);
    infoRutas.minKilometros = parseInt(e.target.value);  // Establecer el valor mínimo de kilómetros
    filtros()
    // allFiltro();
});

selectMaximo.addEventListener('change', (e) => {
    console.log(e.target.value);
    infoRutas.maxKilometros = parseInt(e.target.value);  // Establecer el valor máximo de kilómetros
    filtros()
    // allFiltro();
});



estado.addEventListener('change', (e)=>{
    console.log(e.target.value);
    infoRutas.estado= e.target.value;   //aqui indrodusco el valor al objeto de datos
    
    filtros()
    // allFiltro();
    
    

    

})

calificacion.addEventListener('change', (e)=>{
    
    infoRutas.calificacion= parseInt(e.target.value);   //aqui indrodusco el valor al objeto de datos
    
    filtros()
    // allFiltro();
    
    

    

})

tipoVia.addEventListener('change', (e)=>{
    console.log(e.target.value);
    infoRutas.tipoVia= e.target.value;   //aqui indrodusco el valor al objeto de datos
    filtros()
    // allFiltro();
    
    
    

    

})










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


//filtracines


function filtros() {
    
    const resultado = rutas.filter((ruta) => {
        
        const nombreRuta = infoRutas.nombre=="" || ruta.nombre === infoRutas.nombre;

        const minKilometros= infoRutas.minKilometros=="" || ruta.minKilometros >= infoRutas.minKilometros ;
        const maxKilometros = infoRutas.maxKilometros=="" || ruta.maxKilometros <= infoRutas.maxKilometros;
        const estado = infoRutas.estado=="" || ruta.estado === infoRutas.estado;
        const calificacion = infoRutas.calificacion=="" || ruta.calificacion === infoRutas.calificacion;
        const tipoVia = infoRutas.tipoVia=="" || ruta.tipoVia === infoRutas.tipoVia;

        return nombreRuta && minKilometros && maxKilometros && estado && calificacion && tipoVia;
    });

    console.log(resultado);

    
    mostrar(resultado);
}

function allFiltro(){
    const filtro= rutas.filter((ruta)=>{
        const nombreRuta= rutas.filter((ruta)=>{
            if(infoRutas.nombre=="" || ruta.nombre === infoRutas.nombre){
                return ruta
        
            }
        
        })

        const minKilometros=rutas.filter((ruta)=>{
            if(infoRutas.minKilometros=""){
                return ruta.minKilometros >= infoRutas.minKilometros && ruta.maxKilometroskilometros <= infoRutas.maxKilometros;

            }
            return ruta
        })

        const maxKilometros= rutas.filter((ruta)=>{
            if(infoRutas.maxKilometros=""){
                return ruta.maxKilometros === infoRutas.maxKilometros;


            }
            return ruta

        })

        const estado= rutas.filter((ruta)=>{
            if(infoRutas.estado=""){
                return ruta.estado === infoRutas.estado;

            }
            return ruta

        })

        const calificacion= rutas.filter((ruta)=>{
            if(infoRutas.calificacion=""){
                return ruta.calificacion === infoRutas.calificacion;

            }
            return ruta
        })

        const tipoVia= rutas.filter((ruta)=>{
            if(infoRutas.tipoVia=""){
                return ruta.tipoVia===infoRutas.tipoVia;
            }
            return ruta
        })
        return nombreRuta && minKilometros && maxKilometros && estado && calificacion && tipoVia

    })

    mostrar(filtro);
}

function oldFiltro(){
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
    
    
    
    
    function filtrarMinKilometros() {
        const resultado = rutas.filter((ruta) => {
            if (ruta.kilometros) {
                return ruta.kilometros >= infoRutas.kilometros && ruta.kilometros <= infoRutas.maxKilometros;
            }
            return ruta;
        });
    
        console.log(resultado);
        mostrar(resultado);
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
    

}



//mostrar
const table= document.getElementById("table")
function mostrar(resultado){
    if(resultado==''){
        const div= document.createElement('div');
        div.textContent= 'Sin resultados';
        alerta.appendChild(div);

        setTimeout(()=>{
        alerta.remove();

        }, 1500)

    }




   

    
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


const alerta= document.getElementById('alerta')

function alert(){
    
   


       
        
    
    

   






    
}





