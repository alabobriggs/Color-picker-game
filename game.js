var name = prompt("Choose Username");
alert("Welcome " + name + " the great RGB guessing game. To play you have to choose between Easy and Hard mode based on your experience with rgb colors. Also " + name + " feel free to give your feedback" );

var h1 = document.querySelector("h1");
// -----------------------------------------------------------Play again button------------------------------------------------
var resetB = document.querySelector(".reset");
resetB.addEventListener("click", reset);

// -------------------------------------------------------------grid colours----------------------------------------------------
var colors = [];
var numsquares = 6;
// ----------------------------------------------------------picked square colors-----------------------------------------------
var picked;
var colourDisplay = document.getElementById('colorDisplay');
colourDisplay.textContent = picked

// display message at the top
var messageC = document.querySelector('#message');

// ----------------------------------------------------------Grid colors--------------------------------------------------------
var square = document.querySelectorAll('.square');

// ---------------------------------------------------------toggle button-------------------------------------------------------
var click = document.querySelector('#button')
function change () {
  document.body.classList.toggle('body')
}
click.addEventListener('click', change);
// -----------------------------------------------------------start js----------------------------------------------------------
start()
function start() {
// .........................................................mode button.........................................................
  var modebutton = document.querySelectorAll(".mode");
  for (var i = 0; i < modebutton.length; i++) {
    modebutton[i].addEventListener("click", function () {
      modebutton[0].classList.remove("selected");
      modebutton[1].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        numsquares = 3;
      } else {
        numsquares = 6;
      }
      reset();
    });
  }
}
// ------------------------------------------------------reset button selectors------------------------------------------------
function reset() {
  colors = generateRC(numsquares);
  // pick a new color from array
  picked = functionC();
  // change color display to match picked color
  colourDisplay.textContent = picked;
  // change color of squares
  for (var i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.display = "block";
      square[i].style.background = colors[i];
    } else {
      square[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
  // change message textContent
  messageC.textContent = "";
  // change reset name
  resetB.textContent = "NEW COLORS";
}

// ------------------------------------ ---add var colors to var square using array and behaviour--------------------main logic
for (var i = 0; i < square.length; i++) {
  // add clicked listeners to square and behaviour
  square[i].addEventListener('click', function () {
    var clickedColor = this.style.background
    if (clickedColor === picked) {
      messageC.textContent = 'Correct!';
      changecolor(clickedColor);
      h1.style.background = clickedColor;
      resetB.textContent = "PLAY AGAIN?";
    } else {
      this.style.background = '#232323';
      messageC.textContent = 'Try Again';
    }
  })

  reset();
}
// ------------------------------------------function to make all box colors change to clicked color-----------------------
function changecolor(color) {
    for (var i = 0; i < square.length; i++) {
         square[i].style.background = color;
    }  
}
// --------------------------------------------------------function for picked random colour-------------------------------
function functionC() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
// ---------------------------------------------------------function for colours------------------------------------------
function generateRC(num) {
// make an array
  var arr = [];
//repeat num times
for (var i = 0; i < num; i++) {
// get random color and push into arr
arr.push(randomcolor());
}
// return array 
return arr;
}
// ------------------------------------------------------function for random color----------------------------------------
function randomcolor() {
// random colors red 0- 255
  var r = Math.floor(Math.random() * 256);
// random colors green 0- 255
  var g = Math.floor(Math.random() * 256);
// random colors blue 0- 255
  var b = Math.floor(Math.random() * 256);
return "rgb(" + r + ", " + g + ", " + b + ")";
}