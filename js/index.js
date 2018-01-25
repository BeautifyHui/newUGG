//内容区第一个商品滚动条
$.ajax({
	url : "json/index.json",
	type : "get",
	success : function(msg){
		var arr = msg;
		var str = "";
		var index = 1;
		var ul = $("#con").find(".con1").find("ul");
		for(var i = 0; i < arr.length;i++){
			str +=` <a href="${arr[i].href}">
					<li><img src="img/${arr[i].src}" alt="" /></li>
				</a>`
		}
		ul.html(str);
		$("#con").find(".icon-xiangzuojiantou").click(function(){   //con1里面的左右滑动
			if(index == 3){
				index = 1;
				ul.css("left",0);
			}
			var left = 1200*index;
			ul.animate({"left":-left},1000,function(){
				index++;
				console.log(index)
			})
		})
		$("#con").find(".icon-xiangyoujiantou").click(function(){ //con1里面的左右滑动
			if(index == 1 || index == 3){
				ul.css("left",-2400);
				ul.animate({"left":-1200},1000);
				index++;
			}
			else{
				ul.animate({"left":0},1000);
				index--;
			}
		})
	}
})
//内容区第二个商品鼠标移入移出效果
$("#con").find(".con2").find("li").mouseenter(function(){
	$(this).find("a:first").fadeIn(500)
}).mouseleave(function(){
	$(this).find("a:first").fadeOut(500)
})
