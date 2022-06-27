// // // now i have to create an object so this canvas
// // canvas= document.getElementById("mycanvas");

// // canvas.width=500;
// // canvas.height=500;

// // //creating an object which can help us draw or something

// // pen= canvas.getContext("2d");

// // pen.fillRect(20,20,50,50);
// // pen.fillStyle="red";
// // pen.arc(90,90,55,0,2*Math.PI);
// // pen.fillStyle="purple";
// // pen.stroke();
// // pen.fill(); //creating objects and circles
// //

// //--> creating a game loop ----> //

// // 1. init function is used to created object once called only
// function init() {
//   canvas = document.getElementById("mycanvas"); //--> this is nothing but a way to draw on canvas
//   //set height and width of canvas
//   W = canvas.height = 500;
//   H = canvas.width = 500;
//   pen = canvas.getContext("2d");

//   // now creating an object rect which will we moving randomly
//   rect = {
//     x: 10,
//     y: 10,
//     w: 40,
//     h: 40,
//     speed: 15,
//     gameover: false,
//   };
// }

// //2. draw function is used to draw the object;
// function draw() {
//   pen.clearRect(0, 0, W, H);
//   pen.fillStyle = "red"; // this is his color
//   pen.fillRect(rect.x, rect.y, rect.w, rect.h); // what cordinates need to be filled
// }

// //3. update function will update the x cordinate of the object;
// function update() {
//   rect.x += rect.speed; // update x cordinate by 10;
//   if (rect.x + 40 > 500 || rect.x < 0) {
//     rect.speed *= -1;
//   }
// }

// //4 gameloop function will help us to call both draw and update function simun.
// function gameloop() {
//     if(rect.gameover==true){
//         clearInterval(f);
//     }
//   draw();
//   update();
// }
// init(); //created object;
// var f = setInterval(gameloop, 100);

// even listners which captures the event on our website

canvas=document.getElementById("mycanvas");

function f1(){
    console.log("you clicked on the document");
}
canvas.addEventListener('click',f1);
function f2(){
    console.log("you clicked on the canva");
}

function f3(e){
    console.log("you click a key",e.key);
}


document.addEventListener('click',f3);
canvas  .addEventListener('keydown',f2);


