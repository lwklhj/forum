$(document).ready(function(){
	$(document).on("click",".menu_wrapper a",function(){
		var 
		$menuList=$(this).parents(".menu_wrapper").children("a");
		$itemList=$(this).parents(".menu_container").siblings(".item_container").children("ul");
		index=$menuList.index(this);
		$itemList.eq(index).show().siblings("ul").hide();

	});
	$(".item_container ul:first-child").show();

	
	

});