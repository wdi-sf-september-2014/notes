document.addEventListener("DOMContentLoaded", function(event) {

	var barStatus=0;

// UPDATING NAMETAG
	var nameEntry = document.getElementById("name"); //the name entry field

	nameEntry.addEventListener("keyup", function() {
		var entry=nameEntry.value; //assigning the text within "nameEntry" to variable "entry"
		var ntag = document.getElementById("namet"); //getting the nametag item
		ntag.innerHTML = (entry); //setting the innter HTML of nametag to "entry"
	});

// TRACKING ABOUT CHARACTERS
	var about = document.getElementById("about"); //about = the about entry field

	about.addEventListener("keyup", function() {
		console.log("hi");
		var aboutEntry = about.value; //the text within about entry
		if (aboutEntry.length >= 140) { //if the text length exceeds 140
			alert("Too long!");
		}
	});

//CHECKING USERNAME LENGTH UPON BLUR
	var uName = document.getElementById("uname"); //uName = username input
	var button = document.getElementById("submit"); //button = submit button

	uName.addEventListener("blur", function() {
		if (uName.value.length <4) { //if the username is less than 4 characters
			alert("Username must exceed 4 characters.")
		} else {
			console.log("hi");
			barStatus += 25;
			bar.setAttribute("style", "width:"+barStatus+"%");
		}
	});

//CHECKING USERNAME LENGTH UPON SUBMIT
	button.addEventListener("click", function() { //when the button is clicked
		if (uName.length <4) { //if the username is less than 4 characters
			alert("Username must exceed 4 characters.")
		}
	});

//CHECKING PASSWORD LENGTH
	var pwd = document.getElementById("pwd");

	pwd.addEventListener("blur", function() {
		if (uName.value.length <6) { //if the username is less than 4 characters
			alert("Password must exceed 6 characters.")
		} else {
			console.log("hi");
			barStatus += 25;
			bar.setAttribute("style", "width:"+barStatus+"%");
		}
	});

//UPDATING PROGRESS BAR (buggy)

	var bar = document.getElementById("bar");
	nameEntry.addEventListener("blur", function() {
		barStatus +=25;
		bar.setAttribute("style", "width:"+barStatus+"%");
	});
	about.addEventListener("blur", function() {
		barStatus +=25;
		bar.setAttribute("style", "width:"+barStatus+"%");
		checkBar();
	});


	// function checkBar() {
	// 	if (barStatus >=25) {
	// 		bar.setAttribute("background", "red");
	// 	}
	// };

})