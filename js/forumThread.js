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
	$(".item").click(function(){
		$(this).children("ul").toggle(200);
		//$(this).parents(".main_menu").siblings().children(".item").children("ul").css();
		$(this).siblings(".item").children("ul").hide();
	})

		//


	//loading data
	var currentIndex=1;
	var maxLoad=20;
	initialize();
	function initialize(){
		LoadData();
		jQuery.ajax({
			url:"data/"+queryData[0]+"/"+queryData[1]+".txt",
			dataType:"text",
			success:function(data){
				var list=data.split("&");
				//base on number of total thread to determine button
				var totalBut=0;
				//truncate to int type
				totalBut=parseInt(list.length/maxLoad);
				//check if more than totalbut add 1 more button
				if(list.length%maxLoad!=0){
					totalBut++;
				}
				//insert button into html

				for(var i=1;i<=totalBut;i++){
					var newBut="<li class=\"dataBut\">"+i+"</li>";
					$("#dataButContiner").append(newBut);
				}
			}
		});


		$(document).on("click",".dataBut",function(){
			var dataButList=$(".dataBut");
			currentIndex=dataButList.index(this);
			currentIndex++;
			LoadData();
		});

		//attach click event to databut
		//$(document).on("click",".dataBut"){}
		/*jQuery.each(dataButList,function(index,value){
			dataButList
		});*/
	}


	function LoadData(){
		var lastIndex=currentIndex*maxLoad;
		$("#threadList").empty();
		jQuery.ajax({
			url:"data/"+queryData[0]+"/"+queryData[1]+".txt",
			dataType:"text",
			success:function(data){
				var list=data.split("&");
				//base on last index to load certain portion of data from array
				for(var i=lastIndex-maxLoad;i<lastIndex;i++){

					var splitData=list[i].split("|");
					var newRow="<tr><td class=\"name\"><a href=\"threadpage.html?id="+splitData[0]+"\">"+splitData[0]+"</a></td><td class=\"by\">"+splitData[1]+"</td><td class=\"date\">"+splitData[2]+"</td></tr>";

					$("#threadList").append(newRow);
					if(i>list.length-1){
						break;
					}

				}
			}
		});



	}


	/*
	loading from back,for illustion only
	int currentIndex=2;
		int maxLoad=20;
		int lastIndex=currentIndex*maxLoad;
		for(int i=lastIndex-1;i>=lastIndex-maxLoad;i--){
			System.out.println(i+" "+(lastIndex-maxLoad));
		}*/


	/*jQuery.ajax({
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
	});*/

});
