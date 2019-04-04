//if a card is facedown, flip it face up, or vice-versa
function flip(cardObj) {
	//SHOULD make absolutely nothing happen and log the cardObj
	//WAS if (cardObj.facedown)
	if (cardObj.facedown) {
		
		cardObj.removeClass('facedown')
	} else {
		cardObj.facedown = true
		cardObj.addClass('facedown')
	}
}

//have the deck shuffled, then deal them out into the display
function deal() {
	var deck = shuffle(cardList)
	var dealTemplate = ``
	deck.forEach(function(card) {
		dealTemplate += `${card.source}`
	})
	displayCards(dealTemplate)
}

//display the dealt cards
function displayCards(cards) {
	$('#gamespace').html(cards)
}

//shuffle the deck
function shuffle(arr) {
	//Fisher-Yates (aka Knuth) Shuffle
	var currentIndex = arr.length
	var temporaryValue
	var randomIndex

	//while there remain elements to shuffle
	while (0 !== currentIndex) {

		//pick a remaining element
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1

		//and swap it with the current element
		temporaryValue = arr[currentIndex]
		arr[currentIndex] = arr[randomIndex]
		arr[randomIndex] = temporaryValue
	}

	return arr
}

deal()

$(document).ready(function() {
	$(document).find('i').on('click', function(e) {
		flip($(this))
	})
	
})