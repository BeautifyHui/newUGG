$("#fix").find("a").mouseenter(function(){
	$(this).find("i").stop().animate({"left":-$(this).find("i").width()},400);
	$(this).find("p").css("display","block")
}).mouseleave(function(){
	$(this).find("i").stop().animate({"left":5},400)
	$(this).find("p").css("display","none")
})

