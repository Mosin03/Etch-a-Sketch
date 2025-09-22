const container = document.querySelector(".container");
const style = getComputedStyle(container);
containerHeight = parseFloat(style.height);
containerWidth = parseFloat(style.width);
const buttons = document.querySelectorAll("button");
let mouseDown = false;


// Create the 16x16 using a for loop 


function makeGrid(gridSize){
  for (let i = 0; i < (gridSize * gridSize); i++){ 
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let div =  document.createElement("div"); 
    div.style.height = `${(containerHeight / gridSize)}px`;
    div.style.width = `${(containerWidth / gridSize)}px`;
    div.color = `rgb(${red}, ${green}, ${blue})`;
    container.appendChild(div);
    div.addEventListener('mouseover', ()=>{
      if(mouseDown){
          div.style.backgroundColor = div.color;
      }
    })
  }
}


function remakeGrid(e){
  e.addEventListener("click", ()=>{
    container.innerHTML = "";
    let gridSize = parseFloat(e.textContent);
    makeGrid(gridSize);
  })
}

document.addEventListener("mousedown", ()=>{
  mouseDown = true;
})

document.addEventListener("mouseup", ()=>{
  mouseDown = false;  
})


makeGrid(16);
buttons.forEach(remakeGrid);








