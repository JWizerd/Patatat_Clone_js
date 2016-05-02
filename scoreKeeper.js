var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var pS1 = document.querySelector("#pS1");
var pS2 = document.querySelector("#pS2");
var gameOver = false;
var winningScore = 5;
var winNumber = document.querySelector("#winNumber");
var winColor = document.querySelector(".win");
var winScoreSet = document.querySelector("input");


p1.addEventListener("click", function(){
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			gameOver = true;
			pS1.classList.add("win");
		}
		pS1.textContent = p1Score;
	}
});

p2.addEventListener("click", function(){
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			gameOver = true;
			pS2.classList.add("win");
		}
		pS2.textContent = p2Score;
	}
});

reset.addEventListener("click", function() {
		pS1.textContent = 0;
		pS2.textContent = 0;
		p1Score = 0;
		p2Score = 0;
		gameOver = false;
		pS1.classList.remove("win");
		pS2.classList.remove("win");	
});

winScoreSet.addEventListener("change", function(){
	winNumber.textContent = winScoreSet.value;
	
});

