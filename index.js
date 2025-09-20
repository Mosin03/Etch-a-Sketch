const container = document.querySelector(".container");
const gridBox = document.querySelectorAll(".container div");
const style = getComputedStyle(container);
containerHeight = parseFloat(style.height);
containerWidth = parseFloat(style.width);
const buttons = document.querySelectorAll("button");


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
    div.style.backgroundColor = div.color;
    })
  }
}



buttons.forEach((button)=>{
  button.addEventListener("click", ()=>{
    container.innerHTML = ""; 
    let grizeSize = parseFloat(button.textContent);
    makeGrid(grizeSize);
  })
})

gridBox.forEach((gridBox)=>{
  gridBox.addEventListener("mouseover", ()=>{
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    gridBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    })
})



makeGrid(16);




