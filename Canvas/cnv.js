let canvas1 = document.getElementById('canvas1');
let ctx1 = canvas1.getContext('2d');

let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

function desenhar_quadrado(ctx, x, y, tamanho, cor) {
    ctx.fillStyle = cor; 
    ctx.fillRect(x, y, tamanho, tamanho);
}

function desenhar_linha(ctx, x1, y1, x2, y2, cor, largura = 2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = cor;
    ctx.lineWidth = largura;
    ctx.stroke();
}

function desenhar_arco(ctx, x, y, raio, cor) {
    ctx.beginPath();
    ctx.arc(x, y, raio, 0, 2 * Math.PI);  // circulo
    ctx.fillStyle = cor;
    ctx.fill();
}

function desenhar_arco14(ctx, x,y, raio, cor){
    ctx.beginPath();
    ctx.arc(x,y, raio, 1.5*Math.PI, 0);
    ctx.fillStyle = cor;
    ctx.fill();
}

function escrever(ctx, texto, x, y, cor, tamanho) {
    ctx.font = `${tamanho}px Arial`;
    ctx.fillStyle = cor;
    ctx.fillText(texto, x, y);
}

function circulo(ctx, x, y, raio, cor) {
    ctx.beginPath();
    ctx.arc(x, y, raio, 0, 2 * Math.PI);
    ctx.strokeStyle = cor;
    ctx.stroke();
}

function meio_desenhar_arco(ctx, x, y, raio, cor) {
    ctx.beginPath();
    ctx.arc(x, y, raio, Math.PI, 2 * Math.PI);
    ctx.fillStyle = cor;
    ctx.fill();
}

function circulo_meio(ctx, x, y, raio, cor) {
    ctx.beginPath();
    ctx.arc(x, y, raio, Math.PI, 2 * Math.PI);
    ctx.strokeStyle = cor;
    ctx.stroke();
}

function circulo_meio2(ctx, x, y, raio, cor) {
    ctx.beginPath();
    ctx.arc(x, y, raio, 1.5 * Math.PI, 0);
    ctx.strokeStyle = cor;
    ctx.stroke();
}

function circulo_meio14(ctx, x, y, raio, cor) {
    ctx.beginPath();
    ctx.arc(x, y, raio, 1.5 * Math.PI, 0);
    ctx.strokeStyle = cor;
    ctx.stroke();
}

function circulo_meio_outro_lado(ctx, x, y, raio, cor) {
    ctx.beginPath();
    ctx.arc(x, y, raio, 1 * Math.PI, 1.5 * Math.PI);
    ctx.strokeStyle = cor;
    ctx.stroke();
}

function circulo_meio_outro_lado1(ctx, x, y, raio, cor) {
    ctx.beginPath();
    ctx.arc(x, y, raio, 1.75 * Math.PI, 0);
    ctx.strokeStyle = cor;
    ctx.stroke();
}

function circulo_meio_outro_lado2(ctx, x, y, raio, cor) {
    ctx.beginPath();
    ctx.arc(x, y, raio, 1 * Math.PI, 1.25 * Math.PI);
    ctx.strokeStyle = cor;
    ctx.stroke();
}

function desenhar_triangulo(ctx, x1, y1, x2, y2, x3, y3, cor) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fillStyle = cor;
    ctx.fill();
}

function desenhar_retangulo(ctx, x, y, largura, altura, cor) {
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, altura);
}
function desenhar_lago(ctx) {


}






function desenhar_arvore(ctx, x, y) {
    desenhar_retangulo(ctx, x, y, 10, 40, "saddlebrown");

    ctx.beginPath();
    ctx.arc(x + 5, y - 5, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
}

function desenhar_figura(ctx) {
    desenhar_quadrado(ctx, 0, 0, 50, "blue");
    desenhar_quadrado(ctx, 250, 0, 50, "red");
    desenhar_quadrado(ctx, 280, 140, 20, "aqua");
    desenhar_quadrado(ctx, 280, 280, 20, "black");
    desenhar_quadrado(ctx, 280, 260, 20, "black");
    desenhar_quadrado(ctx, 260, 280, 20, "black");
    desenhar_quadrado(ctx, 0, 280, 20, "yellow");
    desenhar_quadrado(ctx, 0, 260, 20, "yellow");
    desenhar_quadrado(ctx, 20, 280, 20, "yellow");
    desenhar_quadrado(ctx, 0, 150, 20, "aqua");
    desenhar_quadrado(ctx, 0, 130, 20, "aqua");
    desenhar_quadrado(ctx, 110, 150, 40, "red");

    desenhar_linha(ctx, 50, 50, 150, 150, "blue");
    desenhar_linha(ctx, 250, 50, 150, 150, "red");
    desenhar_linha(ctx, 0, 150, 300, 150, "green");
    desenhar_linha(ctx, 150, 150, 150, 300, "grey");

    desenhar_arco(ctx, 150, 120, 10, "#add8e6");
    circulo(ctx, 150, 120, 10, "blue");
    circulo(ctx, 75, 220, 15, "green");
    circulo(ctx, 225, 220, 15, "green");
    desenhar_arco(ctx, 75, 220, 15, "yellow");
    desenhar_arco(ctx, 225, 220, 15, "yellow");

    meio_desenhar_arco(ctx, 150, 300, 30, "aqua");
    circulo_meio(ctx, 150, 150, 50, "green");
    circulo_meio(ctx, 150, 300, 30, "green");
    circulo_meio2(ctx, 300, 200, 40, "green");
    circulo_meio14(ctx, 150, 300, 50, "green");
    circulo_meio_outro_lado(ctx, 150, 300, 70, "green");
    circulo_meio_outro_lado1(ctx,150,150, 80, "green");
    circulo_meio_outro_lado2(ctx,150,150, 80, "green");

    desenhar_linha(ctx, 0, 0, 0, 300, "#000000", 5);
    desenhar_linha(ctx, 300, 0, 300, 300, "#000000", 5);
    desenhar_linha(ctx, 0, 0, 300, 0, "#000000", 5);
    desenhar_linha(ctx, 0, 300, 300, 300, "#000000", 5);

    escrever(ctx, "Canvas", 115, 50, "black", 20);
}

function desenhar_figura2(ctx) {
    // CÉU
    desenhar_retangulo(ctx, 0, 0, 300, 300, "mediumaquamarine");

    // RUA
    desenhar_retangulo(ctx, 0, 200, 300, 100, "gray");

    // CASA
    desenhar_retangulo(ctx, 120, 140, 60, 60, "#8B4513");
    desenhar_triangulo(ctx, 120, 140, 150, 110, 180, 140, "#F25F4C");

    // PORTA
    desenhar_retangulo(ctx, 140, 170, 20, 30, "#5A3E1B"); 

    // JANELAS
    desenhar_retangulo(ctx, 125, 155, 15, 15, "deepskyblue");
    desenhar_retangulo(ctx, 160, 155, 15, 15, "deepskyblue");

    // ÁRVORES
    desenhar_arvore(ctx, 60, 160);
    desenhar_arvore(ctx, 240, 230);

    // SOL
    desenhar_arco(ctx, 220, 60, 30, "yellow");


    //DESENHAR LAGO
    desenhar_retangulo(ctx, 0,250,130,50, "blue");
    desenhar_retangulo(ctx, 0,200,50,100, "blue");
    desenhar_arco14(ctx, 0, 200, 50, 50, "blue");

}






desenhar_figura(ctx1);
desenhar_figura2(ctx2);