const counterElement = document.getElementById("counter");
let count = localStorage.getItem("clickCount") ?? 0;
if (count != 0) {
	counterElement.innerText = `you have clicked the koyuki ball ${count} time(s)`;	
}

function playAudio(audio) {
	audio.play();
	count++;
	localStorage.setItem("clickCount", count)
	counterElement.innerText = `you have clicked the koyuki ball ${count} time(s)`;	
}