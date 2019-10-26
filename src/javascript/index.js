import '../sass/styles.scss';

import config from './config';

window.onload = function() {
  //draw_4();

  let canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d");

  ctx.fillStyle = "#e6e6e6";
  ctx.fillRect(0, 0, 512, 512);

  let s_4x4 = document.querySelector(".small");
  s_4x4.addEventListener("click", draw_4);
  let s_32x32 = document.querySelector(".medium");
  s_32x32.addEventListener("click", draw_32)
  let s_512x512 = document.querySelector(".large");
  s_512x512.addEventListener("click", draw_512);
}

//4x4
function draw_4() {  
  let A = [["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
  ["FFEB3B", "FFC107","FFC107","FFEB3B"],
  ["FFEB3B", "FFC107","FFC107","FFEB3B"],
  ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]];

  let canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  width = A[0].length,
  height = A.length,
  scale = 128;

  canvas.width = width * scale; 
  canvas.height = height * scale; 

  for(let i = 0; i < A.length; i++){
    for (let j = 0; j < A[i].length; j++){
      A[i][j] = "#" + A[i][j];
    }
  }

  for(var row = 0; row < height; row++) {
      for(var col = 0; col < width; col++) {
          ctx.fillStyle = A[row][col];
          ctx.fillRect(col * scale, row * scale, scale, scale); 
      }
  }
}



//32x32
function draw_32() {
  let canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  arr = config.arr,
  width = arr[0].length,
  height = arr.length,
  scale = 16;

  canvas.width = width * scale; 
  canvas.height = height * scale; 

  let result = [];

  for(let i = 0; i < arr.length; i++){
    result.push([]);
    for (let j = 0; j < arr[i].length; j++){
      result[i].push(`rgb(${arr[i][j]})`);
    }
  }

  for(var row = 0; row < height; row++) {
      for(var col = 0; col < width; col++) {
          ctx.fillStyle = result[row][col];
          ctx.fillRect(col * scale, row * scale, scale, scale); 
      }
  }
}

function draw_512() {
  let canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d");
  let img = new Image();
  img.src = "src/images/logo.jpg";
  img.onload = () => {
    ctx.drawImage(img, 0, 0, 512, 512);
  };
}