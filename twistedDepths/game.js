// @ts-nocheck
const canvas = document.getElementById('canvas1');
if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error("Canvas element not found or not a <canvas>!");
}
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'https://www.frankslaboratory.co.uk/downloads/shadow_dog.png';

function animate() {
  ctx.fillStyle = "red";
  ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
  ctx.fillRect(50,50,100,100);
  requestAnimationFrame(animate);
}
animate();

class Player {
  
}