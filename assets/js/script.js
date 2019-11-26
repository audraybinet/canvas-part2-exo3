const canvas=document.querySelector("canvas");
const ctx= canvas.getContext("2d");
//le corp du bordel
(function draw(){
  ctx.fillStyle = "#976F0F";
  ctx.fillRect(135 ,170, 80, 150);
})();
//
//la teuté
(function drawCircle(){
  ctx.fullStyle = "#976F0F";
  ctx.beginPath();
  ctx.arc(175, 125, 60,0 , Math.PI *2, false);
  ctx.fill();
})();
//
//la tronche
(function draw() {
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(200, 105, 5, 0, Math.PI * 2, true);  // Oeil gauche
  ctx.arc(150, 105, 5, 0, Math.PI * 2, true);  // Oeil droite
  ctx.fill();
})();
//les sourcils
// (function draw() {
//   ctx.beginPath();
//   ctx.moveto(200,100);
//   ctx.quadraticCurveTo(300,100,300,300);
//   ctx.fill();
// })();
//les bras-bras
(function draw(){
  ctx.fillStyle = "#976F0F";
  ctx.fillRect(80 ,170, 200, 40);
})();
//
//jambes de nains
(function draw(){
  ctx.fillStyle = "#976F0F";
  ctx.fillRect(135 ,300, 30, 100);
})();
(function draw(){
  ctx.fillStyle = "#976F0F";
  ctx.fillRect(185 ,300, 30, 100);
})();
//
//bouton1
(function drawCircle(){
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(175, 220, 10,0 , Math.PI *2, false);
  ctx.fill();
})();
//
//bouton 2
(function drawCircle(){
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(175, 250, 10,0 , Math.PI *2, false);
  ctx.fill();
})();
//
//les mains
(function drawCircle(){
  ctx.fillStyle = "#976F0F";
  ctx.beginPath();
  ctx.arc(80, 190, 20,0 , Math.PI *2, false);
  ctx.fill();
})();
(function drawCircle(){
  ctx.fillStyle = "#976F0F";
  ctx.beginPath();
  ctx.arc(280, 190, 20,0 , Math.PI *2, false);
  ctx.fill();
})();
//
// les peutons
(function drawCircle(){
  ctx.fillStyle = "#976F0F";
  ctx.beginPath();
  ctx.arc(150, 400, 15,0 , Math.PI *2, false);
  ctx.fill();
})();
(function drawCircle(){
  ctx.fillStyle = "#976F0F";
  ctx.beginPath();
  ctx.arc(200, 400, 15,0 , Math.PI *2, false);
  ctx.fill();
})();
//
//les bourses
(function drawCircle(){
  ctx.fillStyle = "#976F0F";
  ctx.beginPath();
  ctx.arc(190, 320, 10,0 , Math.PI *2, false);
  ctx.fill();
})();
(function drawCircle(){
  ctx.fillStyle = "#976F0F";
  ctx.beginPath();
  ctx.arc(160, 320, 10,0 , Math.PI *2, false);
  ctx.fill();
})();
// la bouche
(function drawCircle(){
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(175, 140, 20,0 , Math.PI , false);
  ctx.fill();
})();
