let containerE1 = document.getElementById("container");

//colours
let colors = ["red", "green", "blue", "orange", " purple", "cyan"];
//  colours      0      1      2          3        4

let divstr = ""
for ( let i = 0; i<6; i++){
  console.log(i)
divstr += `<div style= "background: ${colors[i]}"></div> `
  // containerE1.innerHTML = `<div style= "background: ${randcol}"></div>`;
  console.log(divstr)
}
containerE1.innerHTML = divstr;