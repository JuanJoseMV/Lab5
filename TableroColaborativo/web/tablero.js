/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var canvas = document.getElementById("myCanvas");
var btnBorrar = document.getElementById("Borrar");
var btnGuardar = document.getElementById("Guardar");

var context = canvas.getContext("2d");



canvas.addEventListener("click", defineImage, false);//unda
canvas.addEventListener("mousedown", draw, false);
canvas.addEventListener("mouseup", finnishDrawing, false);

btnBorrar.addEventListener('click', clearCanvas, false);

btnGuardar.addEventListener('click', saveImage, false);



/**
 * Función que toma las coordenadas x e y.
 * @param {type} evt evento
 * @returns {undefined} x e y
 */
function getCurrentPos(evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

/**
 * 
 * @param {type} evt
 * @returns {undefined}
 */

function draw(evt) {
    canvas.addEventListener("mousemove", defineImage, false);
}

/**
 * 
 * @param {type} evt
 * @returns {undefined}
 */
function finnishDrawing(evt) {
    canvas.removeEventListener("mousemove", defineImage, false);
}

/**
 * Función para tomar el color y la forma del formulario HTML5
 * @param {type} evt
 * @returns {undefined}
 */
function defineImage(evt) {
    var currentPos = getCurrentPos(evt);

    for (i = 0; i < document.inputForm.color.length; i++) {
        if (document.inputForm.color[i].checked) {
            var color = document.inputForm.color[i];
            break;
        }
    }

    for (i = 0; i < document.inputForm.shape.length; i++) {
        if (document.inputForm.shape[i].checked) {
            var shape = document.inputForm.shape[i];
            break;
        }
    }
    //Armamos la estructura del JSON a usar    
    var json = JSON.stringify({
        "shape": shape.value,
        "color": color.value,
        "coords": {
            "x": currentPos.x,
            "y": currentPos.y
        }

    });
    drawImageText(json);
    sendText(json);
}

function drawImageText(image) {
    var json = JSON.parse(image);
    context.fillStyle = json.color;
    switch (json.shape) {
        case "circle":
            context.beginPath();
            context.arc(json.coords.x, json.coords.y, 5, 0, 2 * Math.PI, false);
            context.fill();
            break;
        case "square":
        default:
            context.fillRect(json.coords.x, json.coords.y, 10, 10);
            break;

    }
}

function saveImage() {
    var link = document.createElement('a');
    link.addEventListener('click', function(ev) {
        link.href = canvas.toDataURL();
        link.download = "MiTablero.png";
    }, false);
    link.click();
    document.body.appendChild(link);
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}