let containerE1 = document.getElementById("container");

//colours
let colors = ["red", "green", "blue", "orange", " purple"];
//  colours      0      1      2          3        4

document.addEventListener("click",thng)
function thng(){
    containerE1.innerHTML = `<div style= "background: ${
        colors[randomint(0,6)]
      }"></div>`;
    }
