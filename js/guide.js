checkGuide();
//confirm box
function doubleConfirm(){
	var q = confirm("Welcome! Would you like to take a tour on the NYP Forum?");
	if(q == true){
		document.getElementById("guide1").style.display="block";
		document.getElementById("body").style.overflow="hidden";

		//document.getELementById("black").style.display="block";
		//alert("Great!\n\nPlease do not disable dialogs from this website.\n ");
	}
	else{
		localStorage.setItem("j", true);
		alert(" \n If you want to visit the guide, go to under the mainpage and click tutorial\n ");
	}
}

//confirm box
//check guide
function checkGuide(){
	if(localStorage.getItem("j") == null){
		doubleConfirm();
	}
	else {
	}
}
//1
	function next1(){
		document.getElementById("guide1").style.display="none";
		document.getElementById("guide2").style.display="block";
	}
//2
	function next2(){
		document.getElementById("guide2").style.display="none";
		document.getElementById("guide3").style.display="block";
	}
	function previous2(){
		document.getElementById("guide2").style.display="none";
		document.getElementById("guide1").style.display="block";
	}
//3
	function next3(){
		document.getElementById("guide3").style.display="none";
		document.getElementById("guide4").style.display="block";
	}
	function previous3(){
		document.getElementById("guide3").style.display="none";
		document.getElementById("guide2").style.display="block";
	}
//4
	function next4(){
		document.getElementById("guide4").style.display="none";
		document.getElementById("guide6").style.display="block";
	}
	function previous4(){
		document.getElementById("guide4").style.display="none";
		document.getElementById("guide3").style.display="block";
	}
//6
	function next6(){
		document.getElementById("guide6").style.display="none";
		document.getElementById("guide7").style.display="block";
		document.getElementById("body").style.overflow="hidden";
	}
	function previous6(){
		document.getElementById("guide6").style.display="none";
		document.getElementById("guide4").style.display="block";
	}
//end
	function previous7(){
		document.getElementById("guide7").style.display="none";
		document.getElementById("guide6").style.display="block";
	}
	function endGuide(){
		localStorage.setItem("j", true);
		document.getElementById("guide7").style.display="none";
		document.getElementById("body").style.overflow="scroll";
	}


