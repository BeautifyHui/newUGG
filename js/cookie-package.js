//存cookie
function save(key,value,day){
	if(day){
		var d = new Date();
		d.setDate(d.getDate() + day)
		return document.cookie = key + "=" + value + ";expires = " + d;
	}else{
		return document.cookie = key + "=" + value;
	}
	
}

//取cookie
function get(key){
	if(document.cookie){
		var str = document.cookie;
		var arr = str.split("; ");
		for(var i = 0;i < arr.length;i++){
			var item = arr[i].split("=");
			if(item[0] == key){
				return item[1];
			}
		}
		return "";
	}
	return "";
}

//删除cookie
function remove(key){
	save(key,"",-1);
}













