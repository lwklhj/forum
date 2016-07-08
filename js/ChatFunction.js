var onCount = 0;
function CBToggler(){
	onCount++;
	if(onCount%2 == 0)
		document.getElementById("CBWrapper").style.display = "none";
	else
		document.getElementById("CBWrapper").style.display = "block";
}

function CBCommentSend() {
	var newName = document.createElement("span");
	newName.setAttribute("class", "CBNames");
	newName.innerHTML= localStorage.getItem('Name');
	
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
	var NewDate = document.createElement("span");
	NewDate.innerHTML = CurrentDate;
	
	CommentData = document.getElementById("CBCommentData").value;
	var NewComment = document.createElement("p");
	NewComment.innerHTML= CommentData;
	
	var CBCommentDiv = document.createElement("div");
	CBCommentDiv.setAttribute("class", "CBTextBG");
	CBCommentDiv.appendChild(newName);
	CBCommentDiv.appendChild(NewDate);
	CBCommentDiv.appendChild(NewComment);
	
	var CommentAbove = document.getElementById("CBHidden");
	
	CommentAbove.parentNode.insertBefore(CBCommentDiv,CommentAbove);
	document.getElementById( 'CBHidden' ).scrollIntoView();
}