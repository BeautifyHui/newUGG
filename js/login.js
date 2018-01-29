
$("#login").click(function(){
	var str = get("user");
	if(str){
		var arr = JSON.parse(str);
		var name = arr[0].name;
		var pass = arr[0].password;
		var name1 = $("#name").val();
		var pass1 = $("#pass").val();
		if(name == name1){
			if(pass == pass1){
				alert("登录成功");
				location.href="usercenter.html";
			}else{
				alert("密码错误")
			}
		}else{
			alert("用户名不存在")
		}
	}else{
		alert("未获得数据库反馈")
	}
})
