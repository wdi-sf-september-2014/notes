//Click handler for each paragraph

var paragraphs = document.querySelectorAll(".paragraph");

for (var i = 0; i < paragraphs.length; i++) {
	paragraphs[i].addEventListener("click", function() {
		alert("Clicked on a paragraph");
	});
}

//Click handler for the nav

var navList = document.getElementsByTagName("nav");

navList[0].addEventListener("click", function() {
	alert("Click on the nav");
});

//Click handler for each footer link

var footerLinks = document.querySelectorAll("#footer a");

for (var i = 0; i < footerLinks.length; i++) {
	footerLinks[i].addEventListener("click", function(event) {
		event.preventDefault();

		alert("Hijacked link!!! HAHAHA!");
	});
}