var verseChoose = document.querySelector('select');
var poemDisplay = document.querySelector('pre');

verseChoose.onchange = function() {
  var verse = verseChoose.value;
  updateDisplay(verse);
};
function updateDisplay(verse) {
	verse = verse.replace(" ", "");
	verse = verse.toLowerCase();
	var url = verse + '.txt';
	
	fetch(url).then(function(response) {
	  response.text().then(function(text) {
		poemDisplay.textContent = text;
	  });
	});
	request.send();
};
updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';

