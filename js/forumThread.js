var getQueryString=function(field,url){
	var href=url ? url:window.location.href;
	var reg=new RegExp("[?&]"+field+ "=([^&#]*)","i");
	var string=reg.exec(href);
	return string ? string[1]:null;
}

var queryData=[getQueryString("type"),getQueryString("name")];
$(document).ready(function(){
	for(var i=0;i<20;i++){
		var newRow="<tr><td class=\"name\"><a href=\"threadpage.html\">haha</a></td><td class=\"by\">bb</td><td class=\"date\">date</td></tr>";
		$("#content").append(newRow);
	}

});

