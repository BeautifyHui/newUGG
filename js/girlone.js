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

//利用json获取所有商品详情并动态添加到页面上
$.ajax({
	url : "json/girlone.json",
	type : "get",
	success : function(arr){
		for(var i = 0; i < arr.length;i++){
			var str = "";
			var str1 = "";
			var str2 = "";
			for(var j = 0; j < arr[i].src.length;j++){
				str1 += `<img src="img/girl/${arr[i].src[j]}" alt="" />`;
				str2 += `<em style="background:${arr[i].color[j]}"></em>`;
			}
				str += `<a href = "#" data-pic=${arr[i].src[j-1]} data-name=${arr[i].name} data-price=${arr[i].price} data-idname="${i}">
						<dl>
						<dd>
							${str1}
							<p>${arr[i].pcon}</p>
						</dd>
						<dt>
							<li>${arr[i].name}</li>
							<li>${arr[i].price}</li>
							<li>${j}色 <span>★★★★★</span><span>（7）</span></li>
							<li>
								${str2}
							</li>
						</dt>
					</dl>
					</a>`
				str1 = "";
				str2 = "";
				$(".conpic").append(str);
				$(".conpic").find("a").click(function(){  //点击商品页面跳转
					var json= {
						"pic" : $(this).data("pic"),
						"name" : $(this).data("name"),
						"price" : $(this).data("price"),
						"id" : $(this).data("idname")
					}
					var str = JSON.stringify(json);
					save("product",str)
					location.href="details.html";
					return false;
				})
		}
		
		//鼠标移入商品事件
		$("#continer").find(".conpic").find("dl").mouseenter(function(){
			$(this).find("p").css("opacity",1)
			$(this).find("li:last").css("display","block")
			$(this).css("border","1px solid #ccc")
		}).mouseleave(function(){
			$(this).find("p").css("opacity",0)
			$(this).find("li:last").css("display","none")
			$(this).css("border","1px solid rgba(1,1,1,0)")
		})
				
		//鼠标移入换商品颜色
		$(".conpic").find("dl").find("li:last").find("em").mouseenter(function(){
			$(this).parent().parent().parent().find("img").eq( $(this).index() ).css("z-index",1).siblings().css("z-index",0)
		}).mouseleave(function(){
				$(this).parent().parent().parent().find("img").eq(0).css("z-index",1).siblings().css("z-index",0)
			})
		}
})
//楼梯效果
$(window).scroll(function(){
	if($("html,body").scrollTop() > 170 && $("html,body").scrollTop() < 1460){
		var i = Math.round(($("html,body").scrollTop()-335) / 402)
		$("#stairs").find("li").eq(i).css("background","red").siblings().css("background","#ccc")
	}else{
		$("#stairs").find("li").css("background","#ccc")
	}
})
$("#stairs").find("li").click(function(){
	$(this).css("background","red").siblings().css("background","#ccc");
	var top = ($(this).index() * 402) + 330
	$("html,body").scrollTop(top)
})
