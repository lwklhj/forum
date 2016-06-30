$(document).ready(function(){

	$(".dropDown").hover(
		function(){
			$(this).children(".submenu").slideDown(100);
		},
		function(){
			$(this).children(".submenu").stop().slideUp(100);
		}

	);
});