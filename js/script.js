$("document").ready(function(){
	$("#main-content").skippr();
});

$("#main-content").skippr({
	transition : "fade",
	speed : 1000,
	easing : "easeOutQuart",
	navType : "block",
	childrenElementType : "div",
	arrows : false,
	autoPlay : true,
	autoPlayDuration : 1000,
	keyboardOnAlways : false,
	hidePrebious : false
});

$("#back a").on("click",function(){
	$("body,html").animate({
		scrollTop:0
	},800);
	return false;
});
