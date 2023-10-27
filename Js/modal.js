//FUncion para crear las etiquetas HTML del modal 
function crearModal(){
    return`
        <div class="contenedor-modal">
            <div class="modal">
                <h2>¿Está seguro que desea ver las demás secciones?</h2>
                <div class="div-button">
                <button id="btnaceptar">Aceptar</button>
                <button id="btncancelar">Cancelar</button>
                </div>
            </div>
        </div>
    `;
}


const traerLaAs2=document.getElementById('sva');
const traerLaAs3=document.getElementById('cla');
const seccionServicios=document.getElementById("portafolio");
const seccionColaboradores=document.getElementById("clientes contenedor");
const btnVerMas=document.getElementById('vermas'); 


function abrirModal(){   
    btnVerMas.addEventListener('click',()=>ejecutarModal());
}


function ejecutarModal(){
    document.body.insertAdjacentHTML('beforeend',crearModal());

    const botonAceptar=document.getElementById("btnaceptar");
    const botonCancelar=document.getElementById("btncancelar");
    const modal = document.querySelector(".contenedor-modal");
    
    botonAceptar.addEventListener('click',function() {btnaceptar(modal)});
    botonCancelar.addEventListener('click',() => modal.remove()); 
};


function btnaceptar(modal){     
    modal.remove();
    seccionColaboradores.classList.remove("escondido");
    seccionServicios.classList.remove("escondido");
    traerLaAs2.classList.remove("escondido");
    traerLaAs3.classList.remove("escondido");
    btnVerMas.remove();
};

export{abrirModal};