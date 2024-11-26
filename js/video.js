var video; // initializing video variable
var speed = 1; // Initializing the speed variable for calculations later

// Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	
	video = document.getElementById('player1');// Selects the video
	video.autoplay = false; // Turns off autoplay
	console.log("autoplay off");
	video.loop = false; // Turns off looping
	console.log("loop off");
});

// Event listeners for all buttons at the top. Each one logs into the console what it is doing. 

// Initializing all variables for above buttons
var videoPlay = document.querySelector("#play");
var videoPause = document.querySelector("#pause");
var videoSlowDown = document.querySelector("#slower");
var videoSpeedUp = document.querySelector("#faster");
var videoSkipAhead = document.querySelector("#skip");

// Initializing all variables for below buttons
var videoMute = document.querySelector("#mute");
var videoOldSchool = document.querySelector("#vintage");
var videoOriginal = document.querySelector("#orig");

// Initializing volume variables
var volumeSlider = document.querySelector("#slider");
var volumeLabel = document.querySelector("#volume");


// ------------------------ PLAY / PAUSE

// Play the video and update the volume information.  
videoPlay.addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volumeLabel.innerHTML = volumeSlider.value;

});
	
// Pause the video.
videoPause.addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// ------------------------ SPEED

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
videoSlowDown.addEventListener("click", function() {
	console.log("SLOW DOWN Video"); 
	console.log("old speed =" + speed);
	speed = speed * 0.9;
	console.log("new speed =" + speed);
	video.playbackRate = speed;
	
});

// Speed up the video. Increase the current video speed each time the button is clicked and log the new speed to the console.
videoSpeedUp.addEventListener("click", function() {
	console.log("SPEED UP Video");
	console.log("old speed =" + speed);
	speed = speed / 0.9;
	console.log("new speed =" + speed);
	video.playbackRate = speed;
});

// Skip Ahead: Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
videoSkipAhead.addEventListener("click", function() {
	console.log("Skip Video");

	video.currentTime = video.currentTime + 10;
	console.log("Current Time: " + video.currentTime);

	if (video.currentTime == 67.403333) {
		video.currentTime = 0;
		console.log("RESTART VIDEO: " + video.currentTime);

	}
	
});



// ------------------------ FILTER

// Old School: Utilize the existing oldSchool class on the video element
videoOldSchool.addEventListener("click", function() {
	console.log("Old School Video");
	video.className = "video oldSchool";

});

// Original: Remove the oldSchool class from the video
videoOriginal.addEventListener("click", function() {
	console.log("Original Video");
	video.className = "video";
});


//------------------------- VOLUME

// Mute/unmute the video and update the text in the button
videoMute.addEventListener("click", function() {
	console.log("Mute Video");
	console.log("current button:" + videoMute.innerHTML);

	if (videoMute.innerHTML == "Mute") {
		console.log('Mute -> Unmute');
		videoMute.innerHTML = "Unmute"
		video.muted = true;
		
		
	} else {
		console.log('Unmute -> Mute');
		videoMute.innerHTML = "Mute"
		video.muted = false;
	}
});

// Volume Slider: Change the volume based on the slider and update the volume information. 
volumeSlider.addEventListener("input", function() {
	// Checking what the current video volume is and what the volume slider is
	console.log("Volume Slider!");
	console.log("Current Volume = " + video.volume);
	console.log("Volume = " + volumeSlider.value);

	// Setting the new volume, which is percentage
	video.volume = volumeSlider.value / 100
	console.log("New Volume = " + video.volume);

	//Adjusting the label
	volumeLabel.innerHTML = volumeSlider.value;


});





