$.ajax({  //获取小图片加载到页面
		url : "json/details.json",
		type : "get",
		success : function(arr){
			var str = "";
			var index = 1;
			for(var i = 0; i < arr.length;i++){
				str += `<img src="img/details/${arr[i].src}" alt="" data-src="${arr[i].src}"/>`
			}
			$("#detail").html(str);
			$("#detail").find("img").click(function(){//切换大图
				var src = $(this).data("src")
				$(".fdj").html(`<img src="img/details/${src}" alt="" ">`)
			})
			var height = $("#detail").find("img").eq(0).height(); 
			$(".left1").find("div:first").click(function(){  //上下调节按钮
				$("#detail").animate({"top":-index*height},1000)
				index++;
				if(index > 2){
					index = 2;
				}
			})
			$(".left1").find("div:last").click(function(){  //上下调节按钮
				index--;
				console.log(index)
				if(index < 0){
					index = 0;
				}
				$("#detail").animate({"top":-index*height},1000)
			})
		}
	})
fangdajing();
function fangdajing(){    //放大镜效果
	var flag = true;
	$(".fdj").click(function(e){
		if(flag){
			var e = e || event;
			var left = e.pageX - $(this).offset().left;
			var top = e.pageY - $(this).offset().top;
			var porcentw =Math.round( $(this).find("img").eq(0).width() / 800);
			var porcentt = Math.round($(this).find("img").eq(0).height() / 800);
			$(this).css("cursor","move").find("img").css({"width":"800px","height":"800px","left":-porcentw * left,"top":-porcentt * top})
			$(this).bind("mousemove",(function(e){
				var left = e.pageX - $(this).offset().left;
				var top = e.pageY - $(this).offset().top;
				$(this).find("img").css({"width":"1158px","height":"1292px","left":-2 * left,"top":-2 * top})
			})	
			)
			flag = false
		}else{
			$(this).css("cursor",'url("img/cursor/zoomin.png"),pointer').find("img").css({"width":"579px","height":"646px","left":0,"top":0});
			$(this).unbind("mousemove");
			flag = true;
		}
	}).mouseleave(function(){
		$(this).css("cursor",'url("img/cursor/zoomin.png"),pointer').find("img").css({"width":"579px","height":"646px","left":0,"top":0});
			$(this).unbind("mousemove");
			flag = true;
	})
}
$("#pinkp").click(function(){  //点击切换图片
	$(".fdj").html(`<img src="img/details/l1.jpg">`)
})
$("#bluep").click(function(){
	$(".fdj").html(`<img src="img/details/l9.jpg">`)
})
//选取尺码
chose()
function chose(){
	var flag = true;
	$(".right1").find("section").click(function(){
		if(flag){
			$(this).css("height",40).find("ol").fadeIn(0);
			flag = false;
		}else{
			$(this).css("height",34).find("ol").fadeOut(0);
			flag = true;
		}
	})
	$(".right1").find("ol").find("li").click(function(){
		var str = $(this).text();
		$(this).parent().fadeOut(0);
		$(".right1").find("section").find("p:first").html(str);
	})
}
