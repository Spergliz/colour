let containerE1 = document.getElementById("container");
let inputE1 = document.getElementById("color-in");

inputE1.addEventListener("keydown", handle);

function handle(event) {
  if (event.keyCode === 13) {
    let inputstr = inputE1.value;
    let colorsarray = inputstr.split(",");
    display(colorsarray);
  }
}

function display(colors) {
  let divstr = "";
  for (let i = 0; i < 6; i++) {
    console.log(i);
    divstr += `<div style= "background: ${colors[i]}"></div> `;
    // containerE1.innerHTML = `<div style= "background: ${randcol}"></div>`;
    console.log(divstr);
  }
  containerE1.innerHTML = divstr;
}
