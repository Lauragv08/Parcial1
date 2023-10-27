function crearColaboradores({imagenUrl,titulo,descripcion}){
    return`
        <div class="colaborador">
            <img class="img-colaborador"src=${imagenUrl}>
            <div class = "colaboradores">
            <h1>${titulo}</h1>
            <p>${descripcion}</p>
            </div>
        </div>
    `;
}

const cola =[
    {imagenUrl:"img/MV5BNzgxYTA2OTUtYmE0ZC00ZTc0LWJjY2QtOTIzMTJhNGUyZjBlXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_FMjpg_UX1000_.jpg", titulo:"Gal Gadot", descripcion: "Programadora en jefe "},
    {imagenUrl:"img/johnny-depp_8299550_20230514114027.jpg",titulo:"Johnny Depp", descripcion: "Diseñador grafico, y el mejor actor del mundo."},
    {imagenUrl:"img/descarga.jpg",titulo:"voldemort", descripcion: "Investigador en innovación"},
];

const contenedorColaboradores=document.querySelector('.contenedor-colaborador');

function mostrarColaboradores(){
    for(let colaborador of cola){
        const colaboradorHtml= crearColaboradores(colaborador);
        contenedorColaboradores.insertAdjacentHTML('beforeend',colaboradorHtml);
    };
};

export{mostrarColaboradores};
