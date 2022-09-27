function randoRGB() {
  let R = randomint(0, 256);
  let G = randomint(0, 256);
  let B = randomint(0, 256);
  return "rgb(" + R + ", " + G + "," + b + ")";
}
function randomint(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

function randoelem(anarray){
    return anarray[randomint(0, anarray.length)]
}