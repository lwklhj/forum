$(document).ready(function(){
	$(document).on("click",".item",function(){

		var
		$menuList=$(this).parents("ul").children("li");
		menuIndex=$menuList.index(this);

		$containerList=$(this).parents("#menulist").children("li")
		containerIndex=$containerList.index($(this).parents("li"));
		console.log(containerIndex);

		if(containerIndex==0){
			$displayItem=$("#academic").children("table");

		}
		else if(containerIndex==1){
				$displayItem=$("#cca").children("table");
		}
			$displayItem.eq(menuIndex).show().siblings("table").hide();
			$displayItem.parents("div").siblings("div").children("table").hide();









	});
	$("#academic table:first-child").show();
});
