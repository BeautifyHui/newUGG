$.ajax({
		url : "json/details.json",
		type : "get",
		success : function(arr){
			var str = "";
			for(var i = 0; i < arr.length;i++){
				str += `<img src="img/details/${arr[i].src}" alt="" />`
			}
			$("#detail").html(str)
		}
	})

