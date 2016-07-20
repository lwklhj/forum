function Login_submit() {
	localStorage.setItem("Name", document.getElementById("Get_login_name").value);
	location.reload();
}

function Logout_submit() {
	localStorage.removeItem("Name");
	location.reload(); 
}

function Onload_check() {
	if(localStorage.getItem("Name") != null) {
		//show chatbox, logout button, username
		document.getElementById("Chatbox_toggle").style.display = "block";
		document.getElementById("Logout_button").style.display = "inline-block";
		document.getElementById("username").innerHTML = "Welcome " + "\"" + localStorage.getItem("Name") + "\"";
		//hide login button
		document.getElementById("Login_button").style.display = "none";
	}
	else {
		//Display login button
		document.getElementById("Login_button").style.display = "inline-block";
		//Hide username, logout button, hide chatbox
		document.getElementById("username").style.display = "none"
		document.getElementById("Logout_button").style.display = "none";
		document.getElementById("Chatbox_toggle").style.display = "none";
		document.getElementById("Chatbox_wrapper").style.display = "none";
	}
}