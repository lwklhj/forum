var onCount = 0;
function Chatbox_toggler(){
	onCount++;
	if(onCount%2 == 0)
		document.getElementById("Chatbox_wrapper").style.display = "none";
	else
		document.getElementById("Chatbox_wrapper").style.display = "block";
}

function Chatbox_submit() {
	var Get_Name = document.createElement("span");
	Get_Name.setAttribute("class", "Chatbox_names");
	Get_Name.innerHTML= localStorage.getItem('Name');
	
	var CurrentDate = new Date();
	var	Minutes = CurrentDate.getMinutes();
	if(Minutes<10)
		Minutes = "0" + Minutes;
	var Hours = CurrentDate.getHours();
	var Day = CurrentDate.getDate();
	var Month = CurrentDate.getMonth();
	Month+1;
	var Year = CurrentDate.getFullYear();
	CurrentDate = " " + Day +"/" + Month + "/" + Year + " " + Hours + ":" + Minutes;
	var Get_Date = document.createElement("span");
	Get_Date.innerHTML = CurrentDate;
	
	Comment_Data = document.getElementById("Chatbox_data").value;
	var Get_Comment = document.createElement("p");
	Get_Comment.innerHTML= Comment_Data;
	
	var Comment_Container = document.createElement("div");
	Comment_Container.setAttribute("class", "Chatbox_text_BG");
	Comment_Container.appendChild(Get_Name);
	Comment_Container.appendChild(Get_Date);
	Comment_Container.appendChild(Get_Comment);
	
	var CommentAbove = document.getElementById("Chatbox_hidden");
	
	CommentAbove.parentNode.insertBefore(Comment_Container,CommentAbove);
	document.getElementById("Chatbox_hidden").scrollIntoView();
}