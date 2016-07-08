function StartupChecker(){
	if(localStorage.getItem("Name") == null){
		document.getElementById("LoginButton").style.display = "block";
		document.getElementById("LoginButton").setAttribute("style", "display: inline-block");
		
		document.getElementById("WelcomeUserName").style.display = "none";
		document.getElementById("LogoutButton").style.display = "none";
		document.getElementById("LoginBox").style.display = "none";
		document.getElementById("CBToggler").style.display = "none";
		document.getElementById("CBWrapper").style.display = "none";
	}
	
	else{
		document.getElementById("LogoutButton").style.display = "block";
		document.getElementById("LogoutButton").setAttribute("style", "display: inline-block");
		
		document.getElementById("WelcomeUserName").style.display = "block";
		document.getElementById("WelcomeUserName").setAttribute("style", "display: inline-block");
		
		document.getElementById("WelcomeUserName").innerHTML = "Welcome " + "\"" + localStorage.getItem("Name") + "\"";
		document.getElementById("LoginBox").style.display = "none";
		document.getElementById("LoginButton").style.display = "none";
		
		document.getElementById("CBToggler").style.display = "block";
	}
}

function WhenLoginPress(){
	document.getElementById("LoginBox").style.display = "block";
	document.getElementById("LoginBox").setAttribute("style", "display: inline-block");
}

function WhenLogoutPress(){
	localStorage.clear();
	StartupChecker();
}

function LoginSubmit(){
	localStorage.setItem("Name", document.getElementById("loginName").value);
	StartupChecker();
}

function CloseLoginbox(){
	document.getElementById("LoginBox").style.display = "none";
}