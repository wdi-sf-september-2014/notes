var navList = document.querySelectorAll(".nav li");

[].forEach.call(navList, function (el) {
	el.addEventListener('click', function() {
		[].forEach.call(navList, function (el) {
			el.className = el.className.replace("active","");
		});
		addClass(this,"active");
	}, false);
});

function addClass(element,newClass) {
	element.className += newClass;
}

function removeClass(element,rmClass) {
	[].forEach.call(element, function () {
		element.className = element.className.replace(rmClass,"");
	});
}

document.getElementById("learn-more-button").addEventListener("click", function() {
	var myName = prompt("What is your name?");

	if (myName === null) {
		return false;
	} else {
		document.getElementById("page-name").innerHTML = myName + "'s";
	}
});