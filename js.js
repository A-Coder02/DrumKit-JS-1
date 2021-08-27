//Functions---->
//----
//----


//to PLay Sound
function playSound(e) {
	const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
	if(!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
}

//to Remove transition to revert
function removeT(t) {
	if(t.propertyName !== 'transform') return;
	console.log(t.propertyName)
	this.classList.remove('playing')
}

//Events and Bindings---->
//----
//----


//Event to play sound on click button
window.addEventListener('keydown', playSound)

//to call removeT function to all key elemnts(of html)
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
	key.addEventListener('transitionend',removeT)
})
