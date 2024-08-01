const counterElement = document.getElementById("counter");
let count = 0;

function playAudio(audio) {
	audio.play();
	count++;
	counterElement.innerText = `you have clicked the koyuki ball ${count} time(s)`;	
}