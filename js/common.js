window.onload=function(){
	//二级导航栏效果
	$("#nav").find(".licon").mouseenter(function(){
		$(this).css("background","rgba(255,255,255,0.4)").find(".bbox").css("display","block").end().siblings().find(".bbox").css("display","none")
	}).mouseleave(function(){
		$(this).css("background","").find(".bbox").css("display","none")
	})
	$("#nav").find(".licon").eq(0).find(".right").click(function(){
		$(this).css("display","none")
		$("#nav").find(".licon").eq(0).find(".u1").animate({"left":-120},1000,function(){
			$(this).parent().parent().find(".left").css("display","block").click(function(){
				$(this).css("display","none");
				$("#nav").find(".licon").eq(0).find(".u1").animate({"left":0},1000,function(){
					$(".right").css("display","block")
				})
			})
		})
	})
	$(".bbox").find("li").mouseenter(function(){
		$(this).find("p").css("border-bottom","1px solid #111");
	}).mouseleave(function(){
		$(this).find("p").css("border-bottom","none");
	})
	lbt();  //轮播图调用
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
	
	
}

//轮播图
function lbt(){
	var i = 0;
	var timer = setInterval(auto,2000);
	function auto(){
		$("#banner").find("li").eq(i).siblings().css("left","1263px")
		i++;
		i=i==4?0:i;
		$("#banner").find("li").eq(i).animate({"left":"0"},1500,function(){
			$(this).css("z-index",0).siblings().css({"left":"1263px","z-index":1})
			$("#banner").find("ol").find("li").eq(i).css("background","#E9E9E9").siblings().css("background","none")
		});
	
	}
	
	$("#banner").mouseenter(function(){
		clearInterval(timer);
		$("#banner").find("i").mouseenter(function(){
			$(this).css("background","rgba(1,1,1,0.5)")
		}).mouseleave(function(){
			$(this).css("background","")
		})
	}).mouseleave(function(){
		timer = setInterval(auto,2000);
	})
	$("#banner").find(".icon-xiangyoujiantou").click(function(){
		$("#banner").find("li").eq(i).siblings().css("left","1263px")
		auto();
	})
	$("#banner").find(".icon-xiangzuojiantou").click(function(){
		i--;
		if(i==-1){
			i=3
		}
		$("#banner").find("li").eq(i).css({"left":"-1263px","z-index":1}).animate({"left":"0"},1500,function(){
			$(this).css("z-index",0).siblings().css({"left":"-1263px","z-index":1});
			$("#banner").find("ol").find("li").eq(i).css("background","#E9E9E9").siblings().css("background","none");
		});
		
	})
	
}