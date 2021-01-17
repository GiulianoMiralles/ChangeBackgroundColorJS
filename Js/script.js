//Declaracion de variables globales

let btnChange = document.getElementById('btn-change')            // Obtengo el ID del boton en el DOM

let body = document.getElementById('body')                //Obtengo el ID del body
let h1 = document.getElementById('h1')
let h3 = document.getElementById('h3')
let label = document.getElementById('label')
let label2 = document.getElementById('label2')
let label3 = document.getElementById('label3')

const change = () => {

    // Declaracion de varaibles locales
    let color = $('input[name="color"]:checked').val();
    body.style.backgroundColor = color;
    if (color == "#ffffff") {
        h1.style.color = "#000000";
        h3.style.color = "#000000";
        label.style.color = "#000000";
        label2.style.color = "#000000";
        label3.style.color = "#000000";
    }else {
        h1.style.color = "#ffffff";
        h3.style.color = "#ffffff";
        label.style.color = "#ffffff";
        label2.style.color = "#ffffff";
        label3.style.color = "#ffffff";
    }
};

// Declaracion eventos
btnChange.addEventListener('click', change);