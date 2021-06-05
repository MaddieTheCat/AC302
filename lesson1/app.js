console.log("test....");
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();
ctx.moveTo(0,10);
ctx.lineTo(110,50);
ctx.moveTo(90,50);
ctx.lineTo(210,10);
ctx.moveTo(190,10);
ctx.lineTo(300,50);
ctx.strokeStyle = "#F0E0FF";
ctx.lineWidth = 5;
ctx.stroke();

ctx.fillstyle = 'rgb (255, 224, 252)';
ctx.fillRect(75,125,150,100);

ctx.strokeStyle = "#E0FFFF";
ctx.strokeRect(50,100,200,150);

ctx.clearRect(125,150,50,50);

// Challenge#1console.log"
console.log("Challenge 1 is loaded");
var c1 = document.getElementById("one");
var ctx1 = c1.getContext("2d");
ctx1.fillStyle = "rgb(255, 224, 252)";
ctx1.fillRect(0,0,150,150);
ctx1.fillRect(150,150,150,150);

//Challenge
var c2 = document.getElementById("two");
var ctx2 = c2.getContext("2d");
ctx2.fillStyle = "rgb(255, 224, 252)";
ctx2.fillRect(0,0,300,300);
ctx2.clearRect(20,20,120,120);
ctx2.clearRect(20, 160, 120, 120);
ctx2.clearRect(160, 20, 120, 120);
ctx2.clearRect(160, 160, 120, 120);