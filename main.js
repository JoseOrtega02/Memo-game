// vars
const img = document.querySelectorAll(".img");
const elephant = document.getElementsByName("elephant");
const score = document.getElementById("score");
const fail = document.getElementById("fails");

let hasFlippedCard = false;
let firstCard, secondCard;

var sCounter = 0
var fCounter = 0


// event listener

// img.forEach(img => img.addEventListener("click", () => {
// 	verificarIMG()
// 	verificarCard()

// }))



// functions
function verificarIMG() {
	if (event.target.name === "elephant") {
		event.target.setAttribute("src", "img/elephant.jpg")
	}
	if (event.target.name === "jirafa") {
		event.target.setAttribute("src", "img/jirafa.jpg")
	}
	if (event.target.name === "leon") {
		event.target.setAttribute("src", "img/leon.jpg")
	}



}

function verificarCard() {
	verificarIMG()
	if (!hasFlippedCard) {
		hasFlippedCard = true
		firstCard = event.target
		firstCardName = firstCard.name
		


	} else {
		hasFlippedCard = false
		secondCard = event.target
		secondCardName = secondCard.name
		

		if (firstCardName === secondCardName) {
		firstCard.removeEventListener("click", verificarCard)
		secondCard.removeEventListener("click", verificarCard)
		sCounter = sCounter+1

	}else{
		setTimeout(()=>{
		firstCard.setAttribute("src","img/descargar.png")
		secondCard.setAttribute("src","img/descargar.png")
		
	}, 1000);
		fCounter = fCounter + 1
	}
}
conter()

}


// Counters
function conter(){
	score.innerHTML = `Score:${sCounter}`
	fail.innerHTML = `Fails:${fCounter}`
}



img.forEach(card => card.addEventListener("click",verificarCard) )