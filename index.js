// Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// Loop through each drum button
for (var i=0; i<numberOfDrumButtons; i++){
// Add click event listener to each drum button
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
      // Get the inner HTML (which corresponds to the key) of the clicked button
        var buttonInnerHTML = this.innerHTML;
 // Call makesound function with the key as argument
makesound(buttonInnerHTML);
          
buttonAnimation(buttonInnerHTML);

    });
}

// Detecting Keyboard Press
document.addEventListener("keypress", function(event){ 
 // Call makesound function with the pressed key as argument
    makesound(event.key)

buttonAnimation(event.key);    
});



// Function to play sound based on key
function makesound(key){
 // Use a switch statement to determine which sound to play based on the key
    switch (key) {
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
            var snare = new Audio("sounds/snare.mp3");
             snare.play();
        break;
    
        case "k":
            var crash = new Audio("sounds/crash.mp3");
             crash.play();
        break;
    
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
             kick.play();
        break;
    // If the pressed key doesn't match any case, log the button's inner HTML to the console
             default: console.log(buttonInnerHTML);
          
    }

}


function buttonAnimation(currentkey){

    var activeButton = document.querySelector("." + currentkey);

    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
    
    


