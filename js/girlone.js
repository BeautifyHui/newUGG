//轮播图
timer = setInterval(auto,2000)
var index = 1;
var left = $("#banner").find("div").width();
function auto(){
	$("#banner").find("div").eq(index).css({"left":left,"z-index":1}).animate({"left":0},1500,function(){
	$("#banner").find("li").eq(index).css("background","#ccc").siblings().css("background","none")
		$(this).css("z-index",0).siblings().not("ul").css("left",left);
		index++;
		index = index > 2?0:index 
	})
}
//鼠标移入商品事件
$("#continer").find("dl").mouseenter(function(){
	$(this).find("p").css("opacity",1)
	$(this).find("li:last").css("display","block")
	$(this).css("border","1px solid #ccc")
}).mouseleave(function(){
	$(this).find("p").css("opacity",0)
	$(this).find("li:last").css("display","none")
	$(this).css("border","1px solid rgba(1,1,1,0)")
})
