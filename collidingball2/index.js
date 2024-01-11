// creating and resizing 

var canvas =document.querySelector("canvas");
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height =window.innerHeight;
var ctx = canvas.getContext("2d");


// alert("canvas.height")

// drawing shapes
// ctx.beginPath();
// ctx.fillStyle ="orange";
// ctx.fillRect(100,100,100,100);
// ctx.fillStyle ="blue";
// ctx.fillRect(400,100,100,100);
// ctx.fillStyle ="purple";
// ctx.fillRect(100,400,100,100);
// var color = ["red","yellow","blue","orange","purple","gold","indigo"];
// var randomColor = Math.floor(Math.random(color.length));
// for (var i =0;i < color.length;i++){
  
// }




// creating multiple shaps
// var x = Number(Math.random()*innerWidth);
//     var y = Number(Math.random()*innerHeight);
//     var radius = Number(Math.random()*5 +1);


var mouse = {
  x: undefined,
  y: undefined
}
var maxRadius =40; 
var minRadius = 5;
var  colorArray =[
  "#ff0000",
  "#0000ff",
  "#eb5b73",
  "#8b18dd",
  "#afeeee;",
  "#ffc0cb",
  "#5beb7f",
  "#ff4500",
  "#f523f5",
]

window.addEventListener("mousemove",function(event){
  mouse.x= event.x;
  mouse.y = event.y;
})

function Cirlce(x,y,dx,dy,radius){
  this.x=x;
  this.y=y;
  this.dx = dx;
  this.dy = dy;
  this.radius= radius;
  this.color =colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x , this.y,this.radius,0,Math.PI*2,false);
    ctx.fill();
    ctx.fillStyle = this.color;
    // ctx.stroke();
  }
  this.update =function(){
    if(this.x + this.radius >innerWidth || this.x - radius < 0){
      this.dx = -this.dx;
    } else if(this.y + this.radius > innerHeight || this.y - radius < 0){
      this.dy = -this.dy;
    };
    this.x += this.dx;
    this.y+= this.dy

    // interactivity
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
      if(this.radius < maxRadius){
        this.radius+=1;}
    } else if(this.radius > minRadius){
      this.radius-=1;
    }
  

  this.draw();

  };
}

 
var  circleArray =[];
for(var i=0;i <1600;i++){
  var x = Math.floor((Math.random()*innerWidth - radius* 2) + radius);
var y = Math.floor((Math.random()*innerHeight - radius*2)+ radius);
var dy = (Math.random() -0.5);
var dx = (Math.random()-0.5);
var radius = (Math.random()*4 + 1);
circleArray.push(new Cirlce(x,y,dx,dy,radius));
var circle = new Cirlce(200,200,3,3,30);
}

// console.log(circleArray)

 
function animate(){
 
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,innerWidth,innerHeight);

  // circle.update(); 
  for(var i=0;i< circleArray.length;i++){
    circleArray[i].update();
  }
  
  
  
 }

animate(); 


