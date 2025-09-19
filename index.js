const container = document.querySelector(".container");
const style = getComputedStyle(container);
containerHeight = parseFloat(style.height);
containerWidth = parseFloat(style.width);
const buttons = document.querySelectorAll("button");


// Create the 16x16 using a for loop 


function makeGrid(gridSize){
  for (let i = 0; i < (gridSize * gridSize); i++){
    let div =  document.createElement("div");
    div.style.height = `${(containerHeight / gridSize)}px`;
    div.style.width = `${(containerWidth / gridSize)}px`;
    container.appendChild(div);
    div.addEventListener('mouseover', ()=>{
    div.style.backgroundColor = "green";
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

makeGrid(16);



// const gridBoxes = document.querySelectorAll(".container div");


// gridBoxes.forEach((box) => {
//   box.addEventListener('mouseover', ()=>{
//     box.style.backgroundColor = "red";  
//   })
// })