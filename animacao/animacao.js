const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const image = new Image();
image.src = "/home/bruno/Downloads/Meu_Site/animacao/WhatsApp Image 2025-04-12 at 4.50.11 PM.jpeg";

const imgWidth = 50;  
const imgHeight = 50; 

let mouseX = (canvas.width - imgWidth) / 2;
let mouseY = (canvas.height - imgHeight) / 2;

canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  let x = e.clientX - rect.left - imgWidth / 2;
  let y = e.clientY - rect.top - imgHeight / 2;

  x = Math.max(0, Math.min(x, canvas.width - imgWidth));
  y = Math.max(0, Math.min(y, canvas.height - imgHeight));

  mouseX = x;
  mouseY = y;
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, mouseX, mouseY, imgWidth, imgHeight);
  requestAnimationFrame(draw);
}

image.onload = () => {
  draw();
};