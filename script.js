let colorOne = document.getElementById("colorOne");
let colorTwo = document.getElementById("colorTwo");
let random = document.getElementById("random");
let range = document.getElementById("range");
let body = document.querySelector("body");
const p = document.querySelector("p");

// FUNCTIONS
function colorUpdate(){
	p.innerHTML = "background: linear-gradient(" + range.value + "deg, " 
	+ colorOne.value +", " + colorTwo.value + ");";
	body.style.background = "linear-gradient(" + range.value + "deg, " 
	+ colorOne.value +", " + colorTwo.value + ")";
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
	colorOne.value = getRandomColor();
	colorTwo.value = getRandomColor();
	colorUpdate();
}

// OPERATIONS
colorUpdate();
colorOne.addEventListener("input", colorUpdate);
colorTwo.addEventListener("input", colorUpdate);
range.addEventListener("input", colorUpdate);
random.addEventListener("click", setRandomColor);
