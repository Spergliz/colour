let containerE1 = document.getElementById("container");
let inputE1 = document.getElementById("color-in");
let color = [];
fetch("colours.txt").then(conData).then(processdata);

inputE1.addEventListener("keydown", handle);
function conData(rawdata) {
  return rawdata.text();
}
function processdata(stringdata) {
  color = stringdata.split("\r\n");
  display(color);
}
console.log("after fetch");

function handle(event) {
  let divstr = "";
  for(let i = -0; i < color.length; i++){
    if (color[i].includes(inputE1.value)) {
      divstr += `<div style= "background: ${color[i]}">${color[i]}</div> `;
    }

}
containerE1.innerHTML = divstr
} 
function display(colors) {
  let divstr = "";
  let Count = 0;
  for (let i = 0; i < color.length; i++) {
    if (color[i].length === 6) {
      divstr += `<div style= "background: ${color[i]}">${color[i]}</div> `;
      Count++;
    }
  }
  containerE1.innerHTML = divstr + `<p>Count: ${Count}</p>`;
}
