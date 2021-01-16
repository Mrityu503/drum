//Click Listener
for(var i = 0 ; i < document.querySelectorAll(".drum").length ; i++)
{	
	document.querySelectorAll(".drum")[i].addEventListener("click",function() {	
	var buttonInnerHTML = this.innerHTML;		
	keyboard(buttonInnerHTML);
	buttonAnimation(buttonInnerHTML);
	});
}

//Button Listener
document.addEventListener("keydown",function(event){
	keyboard(event.key);	//Here event.key=> key property of the event which is innerHTML in this case.
	buttonAnimation(event.key);
});


//Function for Button (Used in both Mouse and Button Listeners)
function keyboard(key) {
	
	switch(key)
	{
		case "w":
			var tom1 = new Audio("sounds/tom-1.mp3");
				tom1.play();
				break;

		case "a":
			var tom2 = new Audio("sounds/tom-2.mp3");
			tom2.play();
			break;

		case "s":
			var tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
			break;

		case "d":
			var tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
			break;

		case "j":
			var crash = new Audio("sounds/crash.mp3");
			crash.play();
			break;

		case "k":
			var kick = new Audio("sounds/kick-bass.mp3");
			kick.play();
			break;

		case "l":
			var snare = new Audio("sounds/snare.mp3");
			snare.play();
			break;
		
		default:
	}
}

//Animation
function buttonAnimation(button)
{
	var activeButton = document.querySelector("." + button);
	activeButton.classList.add("pressed");

	setTimeout(function(){
		activeButton.classList.remove("pressed");		
	},100);
}