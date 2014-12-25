
// Taking full name and putting into name tag
var namer = document.getElementById("namer");
namer.addEventListener("keyup", function() {
	document.getElementById("rename").innerHTML = namer.value;
});

// Limit about text box to 140 characters
var about = document.getElementById("aboutme");
about.addEventListener("keyup", function() {
	var foo = about.value.length;
	if (foo > 140) {
		alert("Too long!");
	}
})

// Ensure user name has 4 characters
var userCount = document.getElementById("user");
userCount.addEventListener("keyup", function() {
	document.getElementById("button").onclick = function() {
		if (userCount.value.length < 4 ) {
			alert("User name too short!");
		}
	}
})

// Update progress bar
var progress = 0;
var inputs = document.getElementsByClassName("form-control"); 
for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("change", function() {
		progress += 1;
		document.getElementById("progress").setAttribute("style", "width:" + (progress / 4 * 100) + "%");
	});
};

// Validate password
