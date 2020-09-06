//Declaracion de variables globales

let btnChange = document.getElementById('btn-change')            // Obtengo el ID del boton en el DOM

let body = document.getElementById('body')                 //Obtengo el ID del body

const change = () => {

// Declaracion de varaibles locales
    let color = $('input[name="color"]:checked').val();  
    body.style.backgroundColor = color;               

};

// Declaracion eventos
btnChange.addEventListener('click', change);