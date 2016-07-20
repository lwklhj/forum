var getQueryString=function(field,url){
	var href=url ? url:window.location.href;
	var reg=new RegExp("[?&]"+field+ "=([^&#]*)","i");
	var string=reg.exec(href);
	return string ? string[1]:null;
}

var queryData=[getQueryString("type"),getQueryString("name")];

$(document).ready(function(){
	$("title").text(queryData[1]+" forum");
	$("#queryInfo").click(function(){
		window.location.href = "post.html?type="+queryData[0]+"&name="+queryData[1];
	})
		//


	jQuery.ajax({
		url:"data/"+queryData[0]+"/"+queryData[1]+".txt",
		dataType:"text",
		success:function(data){
			var list=data.split("&");
			for(var i=0;i<list.length;i++){
				var splitData=list[i].split("|");
				var newRow="<tr><td class=\"name\"><a href=\"threadpage.html?id="+splitData[0]+"\">"+splitData[0]+"</a></td><td class=\"by\">"+splitData[1]+"</td><td class=\"date\">"+splitData[2]+"</td></tr>";

				$("#threadList").append(newRow);
			}
		}
	});

});
