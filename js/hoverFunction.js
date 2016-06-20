$(document).ready(function(){
	$(document).on("mouseover",".menu_item",function(){
		
	})
	$(.menu_item).hover(
		alert("hello");
		function(){
			$(this).stop().animate({width:"110%"},height:"110%"},500),
		},
		function(){
			$(this).stop().animate({width:"100%",height:"100%"},500),
		}
	);
};
/*<$(function(){
	 $(document).on("mouseover","menu_item",function(){
			 
			var 
			$tab = $(this).parents(".tab_box").children("a");
			$con = $(this).parents(".tab_box").siblings(".con_box").children("ul");
			index = $tab.index(this);
			$con.eq(index).show().siblings("ul").hide();
			})
	$(".licon_l img").hover(
		  function () {
			$(this).stop().animate({ width: "110%",height:"110%",left:"-10px",top:"-10px" },500);
		  },
		  function () {
			$(this).stop().animate({ width: "100%",height:"100%",left:"0px",top:"0px" },500)
		  }
		);
		 
			
 
});*/
	