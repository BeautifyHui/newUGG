
//键盘部分

//键盘部分JS
$("#jianpan .title").css("line-height",$("#jianpan").height()/5+"px");
function xfjianpan(id) {
    //xfjianpan(id),当id为input的id，如果id==false时，键盘隐藏

    var jpnub = $("#xfjp td").length;

    move("jianpan");        //开启键盘可移动

    $("#xfjp td").unbind("click");

    if (id != false) {          
        $("#jianpan").show();
        var xfjp_text = $("#"+id).val();                        //获取input框当前的val值
        $(".input_on").removeClass("input_on");
        $("#"+id).addClass("input_on");                         //设置input框选中时的样式

        $("#jptitle").html($("#"+id).attr("placeholder"));      //键盘标题，自动获取input的placeholder值

        $("#xfjp td").click(function () {
            var click = $(this).html();                         //获取点击按键的内容

            //特殊按键在这添加事件
            //判断点击的按键是否有特殊事件，如果没有则按键内容加在input文本后面
            if (click == "清空") {
                xfjp_text = "";
                $("#"+id).val(xfjp_text);
            }else if(click == "shift"){
                for(i=0;i<jpnub;i++){
                        $("#xfjp td:eq("+i+")").html($("#xfjp td:eq("+i+")").html().toUpperCase());
                    }
            }else if(click == "SHIFT"){
                for(i=0;i<jpnub;i++){
                        $("#xfjp td:eq("+i+")").html($("#xfjp td:eq("+i+")").html().toLowerCase());
                    }
            }else if(click == "空格"){
                xfjp_text = xfjp_text + " ";
                $("#"+id).val(xfjp_text);
            }else {
                xfjp_text = xfjp_text + click;
                $("#"+id).val(xfjp_text);
            }

            $("#"+id).focus();
        })
    }else{
        $(".input_on").removeClass("input_on");                    //移除选中input的选中样式
        $("#jianpan").hide();
    }
}




//鼠标按住拖动部分JS

function unmove(obj){
    $("#" + obj + " .title").unbind("mousedown");
}
function move(obj){
    var OffsetX = 0;
    var OffsetY = 0;
    var moveKg = false;
    var csZ = 0;
    function d(id) {
        return document.getElementById(id);
    }
    $("#"+obj+" .title").bind("mousedown", function () {
        OffsetX = event.pageX - d(obj).offsetLeft;
        OffsetY = event.pageY - d(obj).offsetTop;
        csZ = $("#"+obj).css("z-index");
        $("#"+obj).css("z-index","9999");
        moveKg = true;
        jpyd();
    })
    function jpyd() {
        $(document).bind("mousemove", function () {
            var e = e || window.event;
            var mouswX = e.pageX;
            var mouswY = e.pageY;
            var moveX = mouswX - OffsetX;
            var moveY = mouswY - OffsetY;
            var maxX = $(window).width() - d(obj).offsetWidth;
            var maxY = $(window).height() - d(obj).offsetHeight;
            moveX=Math.min(maxX,Math.max(0,moveX));
            moveY=Math.min(maxY,Math.max(0,moveY));
            $("#"+obj).css({"left":moveX,"top":moveY});
        })
        $(document).bind("mouseup", function () {
            moveKg = false;
            $("#"+obj).css("z-index",csZ);
            $(document).unbind("mousemove mouseup");
        })
    }
}

//表单验证部分
$(".name").blur(function(){	
	y1();
})
function y1(){
		var reg = /^\w{4,6}$/;
		var name = $(".name").val();
		if(!reg.test(name)){
			if($(".name").next().attr("name")== "1"){
				$(".name").next().remove();
			}
			$(".name").after(`<h3 name="1">姓名必须为4-6位数字字母下划线组成</h3>`)
			return "false"
		}else{
			if($(".name").next().attr("name")== "1"){
				$(".name").next().remove();
			}
			return "ture";
		}
	

}

$(".tell").blur(function(){y2()	})
function y2(){
		var reg = /^1\d{10}$/;
		var tell = $(".tell").val();
		if(!reg.test(tell)){
			if($(".tell").next().attr("name")== "1"){
				$(".tell").next().remove();
			}
			$(".tell").after(`<h3 name="1">手机号码必须为1开头的11位纯数字</h3>`)
			return "false"
		}else{
			if($(".tell").next().attr("name")== "1"){
				$(".tell").next().remove();
			}
			return "ture"
		}
}

$(".msage").blur(function(){y3()});
function y3(){
	//邮箱验证
		var reg = /^\w+@\w+(\.\w+)+$/;
		var msg = $(".msage").val();
		if(!reg.test(msg)){
			if($(".msage").next().attr("name")== "1"){
				$(".msage").next().remove();
			}
			$(".msage").after(`<h3 name="1">请输入正确的邮箱地址</h3>`)
			return "false"
		}else{
			if($(".msage").next().attr("name")== "1"){
				$(".msage").next().remove();
			}
			return "ture";
		}
	
}

$(".yname").blur(function(){y4()})
function y4(){
	//用户名验证
		var reg = /^[0-9a-z]{6,8}$/i;
		var yname = $(".yname").val();
		if(!reg.test(yname)){
			if($(".yname").next().attr("name")== "1"){
				$(".yname").next().remove();
			}
			$(".yname").after(`<h3 name="1">必须由6-8位数字英文字母组成</h3>`)
		}else{
			if($(".yname").next().attr("name")== "1"){
				$(".yname").next().remove();
			}
		}
			return  "ture";
}

$(".pass1").blur(function(){y5()})
function y5(){
//	密码验证
		var reg = /^\d{6}$/i;
		var p1 = $(".pass1").val();
		if(!reg.test(p1)){
			if($(".pass1").next().next().attr("name")== "1"){
				$(".pass1").next().next().remove();
			}
			$(".pass1").next().after(`<h3 name="1">密码必须由6位纯数字组成</h3>`)
			return "false"
		}else{
			if($(".pass1").next().next().attr("name")== "1"){
				$(".pass1").next().next().remove();
			}
			return "ture";
		}
}

$(".pass2").blur(function(){y6()})
function y6(){
		var p1 = $(".pass1").val();
		var p2 = $(".pass2").val();
		if(p1 != p2){
			if($(".pass2").next().next().attr("name")== "1"){
				$(".pass2").next().next().remove();
			}
			$(".pass2").next().after(`<h3 name="1">密码不一致</h3>`)
			return "false"
		}else{
			if($(".pass2").next().next().attr("name")== "1"){
				$(".pass2").next().next().remove();
			}
			return "ture";
		}
	
	
}
	//验证码
	$(".new").click(function(){
		var str =Math.round( Math.random()*9999 + 1000)
		$(this).prev().html(str)
		return false
	})
//	提交验证
	var arr = []
	$("#btn").click(function(){
		a = y1();
		b = y2();
		c = y3();
		d = y4();
		e = y5();
		f = y6();
		if( a=="ture"&&b=="ture"&&c=="ture"&&d=="ture"&&e=="ture"&&f=="ture" ){
			var json={
				"name":$(".yname").val(),
				"password":$(".pass1").val()
			}
			arr.push(json);
			var str = JSON.stringify(arr)
			save("user",str,10 )
			alert("注册成功");
			location.href="usercenter.html";
		}else{
			alert("请正确填写必要信息")
		}
		
	})
	
