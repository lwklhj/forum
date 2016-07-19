var getQueryString=function(field,url){
	var href=url ? url:window.location.href;
	var reg=new RegExp("[?&]"+field+ "=([^&#]*)","i");
	var string=reg.exec(href);
	return string ? string[1]:null;
}

var queryData=[getQueryString("id"),getQueryString("name")];
$(document).ready(function(){
		var title=document.getElementById("thread");
		//title.innerHTML=queryData[0];

});

