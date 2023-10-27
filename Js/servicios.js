function crearServicio({titulo,descripcion}){
    return`
        <div class="servicio">
            <h1>${titulo}</h1>
            <p>${descripcion}</p>
        </div>
    `;
} 

const data =[
    {titulo:"Modificación del ADN humano", descripcion: "La ingeniería genética (también denominada modificación genética) es un proceso que emplea tecnologías de laboratorio para alterar la composición del ADN de un organismo. Eso puede incluir un cambio en un único par de bases (A-T o C-G), la deleción de una región del DNA o la adición de un nuevo segmento de ADN."},
    {titulo:"Modificación del ADN en plantas", descripcion: "La modificación genética de las plantas es una alternativa de los métodos de genética molecular en desarrollo que permite acelerar el proceso de mejoramiento molecular vegetal, combinado con técnicas de mutagénesis. Asi permitiendo implementar nuestro proyecto principal de arboles bioluminicentes."},
    {titulo:"Modificación del ADN en enfermedades", descripcion: "Esta nueva técnica podría sustituir el método CRISPR, otra técnica de edición genética que se utiliza en laboratorios de todo el mundo desde 2012. El CRISPR sigue el mismo procedimiento: identifica patrones de letras erróneos e intenta sustituirlos utilizando la enzima CAS9, que permite quitar o añadir material genético como si fueran una especie de tijeras a nivel molecular."},
    {titulo:"Modificación del ADN en los embriones humanos", descripcion: "La modificación genética en embriones es un método de manipulación en donde se ocupan diversas tecnologías para perturbar la composición de los genes en un embrión (ya sea de un humano o algún otro ser vivo), produciendo un cambio dentro de las células involucradas."},
    {titulo:"Fusión de ADN", descripcion: "Es la RECOMBINACIÓN GENÉTICA de partes de dos o más GENES, que da como resultado un gen con regiones reguladoras diferentes o adicionales, o un nuevo producto génico quimérico."},
    {titulo:"Experimentos", descripcion: "Este descubrimiento es uno de los logros más importantes de la ciencia en la historia de la humanidad.La molécula de ADN fue descubierta por Friedrich Miescher en 1869, quien la encontró al inspeccionar el esperma de salmón y el pus de heridas abiertas. Ya que la encontró solamente en los núcleos lo llamó Nucleína."}
];

const contenedor=document.querySelector('.contenedor-servicios');


function mostrarServicios(){
    for(let servicio of data){
        const servicioHtml= crearServicio(servicio);
        contenedor.insertAdjacentHTML('beforeend',servicioHtml);
    };
}

export{mostrarServicios};
