function switcher_1() {
	if(document.getElementById("switch_1").style.display == "none")
		document.getElementById("switch_1").style.display = "block";
	else
		document.getElementById("switch_1").style.display = "none";
}

function switcher_2() {
	if(document.getElementById("switch_2").style.display == "none")
		document.getElementById("switch_2").style.display = "block";
	else
		document.getElementById("switch_2").style.display = "none"
}

function switcher_3() {
	if(document.getElementById("switch_3").style.display == "none")
		document.getElementById("switch_3").style.display = "block";
	else
		document.getElementById("switch_3").style.display = "none"
}

function switcher_4() {
	if(document.getElementById("switch_4").style.display == "none")
		document.getElementById("switch_4").style.display = "block";
	else
		document.getElementById("switch_4").style.display = "none"
}

function NYP_tutorial_on() {
	localStorage.setItem("", 1);
	document.location.href = "mainpage.html";
	
}