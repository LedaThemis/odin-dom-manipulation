const container = document.querySelector("#container");

// a <p> with red text that says “Hey I’m red!”
const redPara = document.createElement("p");
redPara.innerText = "Hey I'm red!";
redPara.style.color = "red";
container.appendChild(redPara);

// an <h3> with blue text that says “I’m a blue h3!”
const blueH3 = document.createElement("h3");
blueH3.innerText = "I'm a blue h3!";
blueH3.style.color = "blue";
container.appendChild(blueH3);

// a <div> with a black border and pink background color
const div = document.createElement("div");

// with the following elements inside of it:
// another <h1> that says “I’m in a div”
const h1 = document.createElement("h1");
h1.innerText = "I'm in a div";
div.appendChild(h1);

// a <p> that says “ME TOO!”
const divPara = document.createElement("p");
divPara.innerText = "ME TOO!";
div.appendChild(divPara);

container.appendChild(div);
