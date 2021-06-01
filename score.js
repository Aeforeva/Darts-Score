const board = document.querySelector("#board");

class Div {
  constructor(x, y) {
    (this.x = x), (this.y = y);
    this.score = x * y;
    if (this.x === 1) {
      if (this.score % 2) {
        this.class = "white";
      } else {
        this.class = "black";
      }
    } else {
      if ((this.score / this.x) % 2) {
        this.class = "green";
      } else {
        this.class = "red";
      }
    }
  }
}

const divs = [];
function createDivs(xMax, yMax) {
  for (let x = 1; x <= xMax; x++) {
    let divY = [];
    for (let y = 1; y <= yMax; y++) {
      divY.push(new Div(x, y));
    }
    divs.push(...divY);
  }
  for (let x = 1; x <= xMax; x++) {
    let divY = [];
    for (let y = 11; y <= yMax * 2; y++) {
      divY.push(new Div(x, y));
    }
    divs.push(...divY);
  }
}

createDivs(3, 10);

let html = "";
divs.forEach((element) => {
  html += `<div v-on:click="vScore" class="${element.class}">${element.score}</div>`;
});
board.innerHTML = html;
