let canvas = document.getElementById("canvas");
let contexto = canvas.getContext("2d");
let desenhando = false;

// Defina as cores para o cabelo e o corpo do ovo
contexto.strokeStyle = "black"; // Preto para o cabelo
contexto.fillStyle = "brown";   // Marrom para o corpo e braços

canvas.addEventListener("mousedown", function(event){
    desenhando = true;
    contexto.beginPath();
    contexto.moveTo(event.clientX - canvas.offsetLeft,
        event.clientY - canvas.offsetTop);
});

canvas.addEventListener("mousemove", function(event){
    if(desenhando){
        contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        contexto.stroke();
    }
});

canvas.addEventListener("mouseup", function(event){
    desenhando = false;
});

let fillButton = document.getElementById("fillButton");

fillButton.addEventListener("click", function() {
    // Define a cor de preenchimento como marrom
    contexto.fillStyle = "brown";
    
    // Preenche o canvas com a cor definida
    contexto.fillRect(0, 0, canvas.width, canvas.height);
});

let preencherDesenhoButton = document.getElementById("preencherDesenho");

preencherDesenhoButton.addEventListener("click", function() {
    // Define a cor de preenchimento como a cor do pincel atual
    contexto.fillStyle = corPincel;
    
    // Preenche o espaço delimitado pelo desenho
    contexto.fill();
});

// Pega os botões de cores
let blackButton = document.getElementById("black");
let brownButton = document.getElementById("brown");

// Defina a cor inicial do pincel
let corPincel = "black"; // Inicialmente, o pincel é preto

// Adicione eventos de clique aos botões de cores
blackButton.addEventListener("click", function() {
    corPincel = "black"; // Defina a cor do pincel como preto
});

brownButton.addEventListener("click", function() {
    corPincel = "brown"; // Defina a cor do pincel como marrom
});

canvas.addEventListener("mousedown", function(event) {
    desenhando = true;
    contexto.beginPath();
    contexto.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    contexto.strokeStyle = corPincel; // Define a cor do traço igual à cor do pincel
});