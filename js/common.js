window.onload=function(){
	//二级导航栏效果
	$("#nav").find(".licon").mouseenter(function(){
		$(this).css("background","rgba(255,255,255,0.7)").find(".bbox").css("display","block").end().siblings().find(".bbox").css("display","none")
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
	
//搜索效果
	$("#nav").find(".font").find("i:first").click(function(){
		$("#nav").find("ul").css("display","none").end().find(".font").css("display","none")
		$("#nav").find("#shadow").css("display","block");
	})
	$("#nav").find("#close").click(function(){
		$("#nav").find("ul").css("display","block").end().find(".font").css("display","block")
		$("#nav").find("#shadow").css("display","none");
	})
//吸顶效果
	$(window).scroll(function(){
		if($("html,body").scrollTop() >= $("#top").height()){
			$("#nav").css({"position":"fixed","top":0})
		}else{
			$("#nav").css({"position":"absolute","top":$("#top").height()})
		}
		
	})
//购物车显示与隐藏效果
	var flag = true;
	$("#nav").find(".font").find("i:last").click(function(){
		if(flag){
			$("#nav").find(".div").animate({"right":0},500);
			flag = false;
		}else{
			$("#nav").find(".div").animate({"right":-$("#nav").find(".div").width()},500);
			flag = true;
		}
	})
	$("#nav").find(".div").find(".close").click(function(){
		$(this).parent().animate({"right":-$(this).parent().width()},500);
		flag = true;
	})
//固定栏
	$("#fix").find("a").mouseenter(function(){
		$(this).find("i").stop().animate({"left":-$(this).find("i").width()},400);
		$(this).find("p").css("display","block")
	}).mouseleave(function(){
		$(this).find("i").stop().animate({"left":5},400)
		$(this).find("p").css("display","none")
	})
	
//购物车
	if(get("user")){
		var arr = JSON.parse(get("user"))
		var str = arr[0].name;
		$("#nav").find($(".div")).find("li:last").html(`<i class="iconfont icon-pullup"></i>
						<a href="#">${str}${"退出"}</a>`)
	
	$("#nav").find($(".div")).find("li:last").click(function(){
		save("user","",10);
		$(this).html(`<i class="iconfont icon-pullup"></i>
						<a href="#">登录</a><a href="register.html">/注册</a>`)
	})
	}
//轮播图调用	
	lbt();  
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