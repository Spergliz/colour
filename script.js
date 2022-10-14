let containerE1 = document.getElementById("container");
let inputE1 = document.getElementById("color-in");
let color = [];
fetch("colours.txt").then(conData).then(processdata);

inputE1.addEventListener("keydown", handle);
function conData(rawdata) {
  return rawdata.text();
}
function processdata (stringdata){
 color = stringdata.split("\r\n");
 display(color)
}
console.log("after fetch");

function handle(event) {
  if (event.keyCode === 13) {
    color.push(inputE1.value);
    inputE1.value = "";
    display(color);
  }
}

function display(colors) {
  let divstr = "";
  let Count = 0
  for (let i = 0; i < color.length; i++) {
    if (color[i].length ===6 ) {
    divstr += `<div style= "background: ${colors[i]}">${color[i]}</div> `;
    Count++;
    }
  }
  containerE1.innerHTML = divstr + `<p>Count: ${Count}</p>`;
}
