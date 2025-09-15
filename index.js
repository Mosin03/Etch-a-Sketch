const container = document.querySelector(".container");
const style = getComputedStyle(container);
containerHeight = parseFloat(style.height);
containerWidth = parseFloat(style.width);

// Create the 16x16 using a for loop 

for (let i = 0; i < (16* 16); i++){
 let div =  document.createElement("div");
 div.style.height = `${(containerHeight / 16)}px`;
 div.style.width = `${(containerWidth / 16)}px`;
 container.appendChild(div);
 div.addEventListener('mouseover', ()=>{
  div.style.backgroundColor = "green";
 })
}

// const gridBoxes = document.querySelectorAll(".container div");


// gridBoxes.forEach((box) => {
//   box.addEventListener('mouseover', ()=>{
//     box.style.backgroundColor = "red";  
//   })
// })