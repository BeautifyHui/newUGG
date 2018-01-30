if(get("shopCar")){
	var str = get("shopCar");
	var arr = JSON.parse(str);
	$(".con5").css("display","block");
	var con = "";
	var flag = true;
	for(var i = 0; i < arr.length;i++){
		con += `<tr>
					<td><img src="img/girl/${arr[i].picture}" alt="" /></td>
					<td><em>${arr[i].type}</em><br /><em>颜色：深棕，尺码：${arr[i].size}</em></td>
					<td>
						<select name="a" class="number">
							<option value="1">数量（1）</option>
							<option value="2">数量（2）</option>
							<option value="3">数量（3）</option>
							<option value="4">数量（4）</option>
							<option value="5">数量（5）</option>
						</select>
					</td>
					<td>总计：<em> ${arr[i].price}</em></td>
					<td> <em class="love">♥</em><em class="del"><i class="iconfont icon-delete"></i></em></td>
				</tr>`
	}
	
	$("#con4").find(".con5").find("table").prepend(con);
	var pri = arr[0].price.split("￥")[1]
	$("table").bind("click","change",function(){
		$("table").find(".priceSum").html(pri * ($(this).find("option:selected").index()+1))
	})
	$("table").find(".priceSum").html(pri * ($(this).find("option:selected").index()+1))
	$("select").find("option").eq(arr[0].num).css("selected","selected")
	$("table").find(".price1").html(arr[0].price);
	$("td").find(".love").click(function(){
		if(flag){
			$(this).html("ღ").css("color","#ccc");
			flag = false;
		}else{
			$(this).html("❤").css("color","red");
			flag = true;
		}
	})
}
