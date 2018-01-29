if(get("shopCar")){
	var str = get("shopCar");
	var arr = JSON.parse(str);
	$("#con4").css("display","block");
console.log(arr)
	var con = "";
	for(var i = 0; i < arr.length;i++){
		con+=`<tr>
							<td><img src="img/car.jpg" alt="" /></td>
							<td><em>卡森（高筒靴）</em><br /><em>颜色：深棕，尺码：37</em></td>
							<td>
								<select name="a">
									<option value="1">数量（1）</option>
									<option value="2">数量（2）</option>
									<option value="3">数量（3）</option>
									<option value="4">数量（4）</option>
									<option value="5">数量（5）</option>
								</select>
							</td>
							<td>总计：<em> ￥2016</em></td>
							<td> <em>♥</em><em>☯</em></td>
						</tr>`
	}
	$("$con4").find("table").prepend(con)
}
