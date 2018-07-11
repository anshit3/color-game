var numSquares =6;
var colors = [];
var pickedColor;
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var correctColorBackground = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {
	setUpSquares();
	setUpModeButtons();
	reset();
}

function setUpModeButtons(){
	for(var i = 0;i<modeButton.length;i++) {
	modeButton[i].addEventListener("click", function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
}
}

function setUpSquares(){
	for(var i=0;i<square.length;i++) {
//add initial color
	square[i].style.backgroundColor = colors[i];
//add click listeners to the squares
	square[i].addEventListener("click", function() {
	
//grab color fron the clicked square
var clickedColor = this.style.backgroundColor;
//compare with the pickedColor
	if(clickedColor === pickedColor) {
		correctColorBackground.style.backgroundColor = clickedColor;
		messageDisplay.textContent = "Correct";
		reset.textContent = "Play Again?";
		changeColors(clickedColor);
	} else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";
	}
	});
}
}

function reset() {
	colors = generateRandomColors(numSquares);

	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;

	for(var i=0;i<square.length;i++) {
		if(colors[i]) {
			square[i].style.display = "block";
			square[i].style.backgroundColor = colors[i];
		}else {
			square[i].style.display = "none";
		}
	}
	correctColorBackground.style.backgroundColor = "steelblue";
	resetBtn.textContent = "New Colors";
	messageDisplay.textContent = "";
}

resetBtn.addEventListener("click", function() {
	reset();

});

function changeColors(color){
	//loop through squares
	//change each ones color
	for (var i = 0; i <square.length; i++) {
		square[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(colorArrayLength) {
	var arr = [];
	for(var i = 0;i<colorArrayLength;i++) {
		var random = "rgb(" + Math.floor(Math.random() * 266) + ", " + Math.floor(Math.random() * 266) + ", " + Math.floor(Math.random() * 266) + ")";
		arr.push(random);
			}
	return arr;
}

/*easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	var numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	correctColorBackground.style.backgroundColor = "steelblue"
	for(var i=0;i<square.length;i++) {
		if(colors[i]) {
			square[i].style.backgroundColor = colors[i];
		}else {
			square[i].style.display = "none";
		}
	}

});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	var numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	correctColorBackground.style.backgroundColor = "steelblue"
	for(var i=0;i<square.length;i++) {
			square[i].style.backgroundColor = colors[i];
			square[i].style.display = "block";
	}
});*/